/*
 Language: PowerShell
 Author: David Mohundro <david@mohundro.com>
 Contributors: Nicholas Blumhardt <nblumhardt@nblumhardt.com>, Victor Zhou <OiCMudkips@users.noreply.github.com>, Nicolas Le Gall <contact@nlegall.fr>, G8t Guy <g8tguy@g8tguy.com>, Dirk Schuermans <dirk@schuermans.me>
*/

function(hljs) {
  // https://msdn.microsoft.com/en-us/library/ms714428(v=vs.85).aspx
  var VALID_VERBS =
    'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|' +
    'Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|' +
    'Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|' +
    'Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|' +
    'ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|' +
    'Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|' +
    'Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|' +
    'Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|' +
    'Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|' +
    'Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|' +
    'Unprotect|Use|ForEach|Sort|Tee|Where';

  var COMPARISON_OPERATORS =
    '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|' +
    '-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|' +
    '-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|' +
    '-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|' +
    '-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|' +
    '-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|' +
    '-split|-wildcard|-xor';

  var KEYWORDS = {
    keyword: 'if else foreach return do while until elseif begin for trap data dynamicparam ' +
    'end break throw param continue finally in switch exit filter try process catch ' +
    'hidden static parameter validate[A-Z]+'
  };

  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]',
    relevance: 0
  };

  var VAR = {
    className: 'variable',
    variants: [
      { begin: /\$\B/ },
      { className: 'keyword', begin: /\$this/ },
      { begin: /\$[\w\d][\w\d_:]*/ }
    ]
  };

  var LITERAL = {
    className: 'literal',
    begin: /\$(null|true|false)\b/
  };

  var QUOTE_STRING = {
    className: 'string',
    variants: [
      { begin: /"/, end: /"/ },
      { begin: /@"/, end: /^"@/ }
    ],
    contains: [
      BACKTICK_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$[A-z]/, end: /[^A-z]/
      }
    ]
  };

  var APOS_STRING = {
    className: 'string',
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /@'/, end: /^'@/ }
    ]
  };

  var PS_HELPTAGS = {
    className: 'doctag',
    variants: [
      /* no paramater help tags */
      { begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ },
      /* one parameter help tags */
      { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }
    ]
  };

  var PS_COMMENT = hljs.inherit(
    hljs.COMMENT(null, null),
    {
      variants: [
        /* single-line comment */
        { begin: /#/, end: /$/ },
        /* multi-line comment */
        { begin: /<#/, end: /#>/ }
      ],
      contains: [PS_HELPTAGS]
    }
  );
  
  var VERBS = {
	className: 'built_in',
	variants: [
		{ begin: /Add-/, end: /[^A-z0-9]/ },
		{ begin: /Approve-/, end: /[^A-z0-9]/ },
		{ begin: /Assert-/, end: /[^A-z0-9]/ },
		{ begin: /Backup-/, end: /[^A-z0-9]/ },
		{ begin: /Block-/, end: /[^A-z0-9]/ },
		{ begin: /Checkpoint-/, end: /[^A-z0-9]/ },
		{ begin: /Clear-/, end: /[^A-z0-9]/ },
		{ begin: /Close-/, end: /[^A-z0-9]/ },
		{ begin: /Compare-/, end: /[^A-z0-9]/ },
		{ begin: /Complete-/, end: /[^A-z0-9]/ },
		{ begin: /Compress-/, end: /[^A-z0-9]/ },
		{ begin: /Confirm-/, end: /[^A-z0-9]/ },
		{ begin: /Connect-/, end: /[^A-z0-9]/ },
		{ begin: /Convert-/, end: /[^A-z0-9]/ },
		{ begin: /ConvertFrom-/, end: /[^A-z0-9]/ },
		{ begin: /ConvertTo-/, end: /[^A-z0-9]/ },
		{ begin: /Copy-/, end: /[^A-z0-9]/ },
		{ begin: /Debug-/, end: /[^A-z0-9]/ },
		{ begin: /Deny-/, end: /[^A-z0-9]/ },
		{ begin: /Disable-/, end: /[^A-z0-9]/ },
		{ begin: /Disconnect-/, end: /[^A-z0-9]/ },
		{ begin: /Dismount-/, end: /[^A-z0-9]/ },
		{ begin: /Edit-/, end: /[^A-z0-9]/ },
		{ begin: /Enable-/, end: /[^A-z0-9]/ },
		{ begin: /Enter-/, end: /[^A-z0-9]/ },
		{ begin: /Exit-/, end: /[^A-z0-9]/ },
		{ begin: /Expand-/, end: /[^A-z0-9]/ },
		{ begin: /Export-/, end: /[^A-z0-9]/ },
		{ begin: /Find-/, end: /[^A-z0-9]/ },
		{ begin: /Format-/, end: /[^A-z0-9]/ },
		{ begin: /Get-/, end: /[^A-z0-9]/ },
		{ begin: /Grant-/, end: /[^A-z0-9]/ },
		{ begin: /Group-/, end: /[^A-z0-9]/ },
		{ begin: /Hide-/, end: /[^A-z0-9]/ },
		{ begin: /Import-/, end: /[^A-z0-9]/ },
		{ begin: /Initialize-/, end: /[^A-z0-9]/ },
		{ begin: /Install-/, end: /[^A-z0-9]/ },
		{ begin: /Invoke-/, end: /[^A-z0-9]/ },
		{ begin: /Join-/, end: /[^A-z0-9]/ },
		{ begin: /Limit-/, end: /[^A-z0-9]/ },
		{ begin: /Lock-/, end: /[^A-z0-9]/ },
		{ begin: /Measure-/, end: /[^A-z0-9]/ },
		{ begin: /Merge-/, end: /[^A-z0-9]/ },
		{ begin: /Mount-/, end: /[^A-z0-9]/ },
		{ begin: /Move-/, end: /[^A-z0-9]/ },
		{ begin: /New-/, end: /[^A-z0-9]/ },
		{ begin: /Open-/, end: /[^A-z0-9]/ },
		{ begin: /Out-/, end: /[^A-z0-9]/ },
		{ begin: /Ping-/, end: /[^A-z0-9]/ },
		{ begin: /Pop-/, end: /[^A-z0-9]/ },
		{ begin: /Protect-/, end: /[^A-z0-9]/ },
		{ begin: /Publish-/, end: /[^A-z0-9]/ },
		{ begin: /Push-/, end: /[^A-z0-9]/ },
		{ begin: /Read-/, end: /[^A-z0-9]/ },
		{ begin: /Receive-/, end: /[^A-z0-9]/ },
		{ begin: /Redo-/, end: /[^A-z0-9]/ },
		{ begin: /Register-/, end: /[^A-z0-9]/ },
		{ begin: /Remove-/, end: /[^A-z0-9]/ },
		{ begin: /Rename-/, end: /[^A-z0-9]/ },
		{ begin: /Repair-/, end: /[^A-z0-9]/ },
		{ begin: /Reset-/, end: /[^A-z0-9]/ },
		{ begin: /Resolve-/, end: /[^A-z0-9]/ },
		{ begin: /Restore-/, end: /[^A-z0-9]/ },
		{ begin: /Request-/, end: /[^A-z0-9]/ },
		{ begin: /Restart-/, end: /[^A-z0-9]/ },
		{ begin: /Resume-/, end: /[^A-z0-9]/ },
		{ begin: /Revoke-/, end: /[^A-z0-9]/ },
		{ begin: /Save-/, end: /[^A-z0-9]/ },
		{ begin: /Search-/, end: /[^A-z0-9]/ },
		{ begin: /Select-/, end: /[^A-z0-9]/ },
		{ begin: /Send-/, end: /[^A-z0-9]/ },
		{ begin: /Set-/, end: /[^A-z0-9]/ },
		{ begin: /Show-/, end: /[^A-z0-9]/ },
		{ begin: /Skip-/, end: /[^A-z0-9]/ },
		{ begin: /Split-/, end: /[^A-z0-9]/ },
		{ begin: /Start-/, end: /[^A-z0-9]/ },
		{ begin: /Step-/, end: /[^A-z0-9]/ },
		{ begin: /Stop-/, end: /[^A-z0-9]/ },
		{ begin: /Submit-/, end: /[^A-z0-9]/ },
		{ begin: /Suspend-/, end: /[^A-z0-9]/ },
		{ begin: /Switch-/, end: /[^A-z0-9]/ },
		{ begin: /Sync-/, end: /[^A-z0-9]/ },
		{ begin: /Test-/, end: /[^A-z0-9]/ },
		{ begin: /Trace-/, end: /[^A-z0-9]/ },
		{ begin: /Unblock-/, end: /[^A-z0-9]/ },
		{ begin: /Undo-/, end: /[^A-z0-9]/ },
		{ begin: /Uninstall-/, end: /[^A-z0-9]/ },
		{ begin: /Unlock-/, end: /[^A-z0-9]/ },
		{ begin: /Unprotect-/, end: /[^A-z0-9]/ },
		{ begin: /Unpublish-/, end: /[^A-z0-9]/ },
		{ begin: /Unregister-/, end: /[^A-z0-9]/ },
		{ begin: /Update-/, end: /[^A-z0-9]/ },
		{ begin: /Use-/, end: /[^A-z0-9]/ },
		{ begin: /Wait-/, end: /[^A-z0-9]/ },
		{ begin: /Watch-/, end: /[^A-z0-9]/ },
		{ begin: /Write-/, end: /[^A-z0-9]/ }
	]
  };

  var CMDLETS = {
    className: 'built_in',
    variants: [
      { begin: '('.concat(VALID_VERBS, ')+(-)[\\w\\d]+') },
      // Invalid cmdlets!
      { className: 'subst', begin: /[\w\d]+(-)[\w\d]+/, relevance: 0 }
    ]
  };

  var PS_CLASS = {
    className: 'class',
    beginKeywords: 'class enum', end: /[{]/, excludeEnd: true,
    relevance: 0,
    contains: [hljs.TITLE_MODE]
  };

  var PS_FUNCTION = {
    className: 'keyword',
    begin: /function\s+/, end: /([^A-Z0-9-])/,
    excludeEnd: true,
    relevance: 0,
    contains: [
      CMDLETS,
      // Invalid function names!
      { className: 'subst', begin: /[\w\d]+/ }
    ]
  };

  // Using statment, plus type, plus assembly name.
  var PS_USING = {
    className: 'keyword',
    begin: /using\s/, end: /$/,
    contains: [
      QUOTE_STRING,
      APOS_STRING,
      { className: 'type', begin: /(assembly|command|module|namespace|type)/ },
      { className: 'meta', begin: /\S+/ }
    ]
  };

  // Comperison operators & function named parameters.
  var PS_ARGUMENTS = {
    variants: [
      // PS literals are pretty verbose so it's a good idea to accent them a bit.
      { className: 'subst', begin: '('.concat(COMPARISON_OPERATORS, ')\\b') },
      { className: 'literal', begin: /(-)[\w\d]+/ }
    ]
  };

  var STATIC_MEMBER = {
    className: 'selector-tag',
    begin: /::\w+\b/, end: /$/,
    returnBegin: true,
    contains: [
      { className: 'attribute', begin: /\w+/, endsParent: true }
    ]
  };

  var HASH_SIGNS = {
    className: 'selector-tag',
    begin: /\@\B/,
    relevance: 0
  };

  var PS_NEW_OBJECT_TYPE = {
    className: 'built_in',
    begin: /New-Object\s+\w/, end: /$/,
    returnBegin: true,
    contains: [
      { begin: /$/, endsParent: true },
      { className: 'meta', begin: /\s([\w\.])+/, endsParent: true }
    ]
  };

  // It's a very general rule so I'll narrow it a bit with some strict boundaries
  // to avoid any possible false-positive collisions!
  var PS_METHODS = {
    className: 'name',
    begin: /[\w]+[ ]??\(/, end: /$/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'keyword', begin: '('.concat(
        KEYWORDS.keyword.toString().replace(/\s/g, '|'
        ), ')\\b'),
        endsParent: true,
        relevance: 0
      },
      {
        className: 'built_in', begin: /[\w]+\b/,
        endsParent: true,
        relevance: 0
      }
    ]
  };

  var GENTLEMANS_SET = [
    STATIC_MEMBER,
    PS_METHODS,
    PS_COMMENT,
    BACKTICK_ESCAPE,
    hljs.NUMBER_MODE,
    QUOTE_STRING,
    APOS_STRING,
    PS_NEW_OBJECT_TYPE,
    CMDLETS,
    VAR,
    LITERAL,
    HASH_SIGNS,
    VERBS
  ];

  var PS_TYPE = {
    className: 'no-markup',
    begin: /\[/, end: /\]/,
    excludeBegin: true,
    excludeEnd: true,
    relevance: 0,
    contains: GENTLEMANS_SET.concat(
      'self',
      { className: 'meta', begin: /[\.\w\d]+/, relevance: 0 }
    )
  };

  return {
    aliases: ['ps'],
    lexemes: /-?[A-z\.\-]+/,
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: GENTLEMANS_SET.concat(
      PS_CLASS,
      PS_FUNCTION,
      PS_USING,
      PS_ARGUMENTS,
      PS_TYPE
    )
  };
}
