/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
*/

function(hljs) {
  var VARIABLE = {
    className: 'variable', begin: '(\\$|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'preprocessor', begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      {
        begin: 'b"', end: '"'
      },
      {
        begin: 'b\'', end: '\''
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
    ]
  };
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  return {
    aliases: ['php3', 'php4', 'php5', 'php6'],
    case_insensitive: true,
    keywords:
      'and include_once list abstract global private echo interface as static endswitch ' +
      'array null if endwhile or const for endforeach self var while isset public ' +
      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
      'enddeclare final try switch continue endfor endif declare unset true false ' +
      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
      'yield finally',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        className: 'comment',
        begin: '/\\*', end: '\\*/',
        contains: [
          {
            className: 'phpdoc',
            begin: '\\s@[A-Za-z]+'
          },
          PREPROCESSOR
        ]
      },
      {
          className: 'comment',
          begin: '__halt_compiler.+?;', endsWithParent: true,
          keywords: '__halt_compiler', lexemes: hljs.UNDERSCORE_IDENT_RE
      },
      {
        className: 'string',
        begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        subLanguage: 'xml',
        begin: '\\?>', end: '<\\?php',
        excludeBegin: true, excludeEnd: true
      },
      PREPROCESSOR,
      {
        className: 'namespace',
        beginWithKeyword: true, end: ';',
        keywords: 'namespace',
        excludeEnd: true
      },
      {
        className: 'alias',
        beginWithKeyword: true, end: ';',
        keywords: 'use',
        excludeEnd: true,
        contains: [
          {
            lexems: '[a-zA-Z\\\\][a-zA-Z0-9_\\\\]*',
            className: 'keyword',
            begin: '[a-zA-Z0-9_\x7f-\xff\\\\]+'
          }
        ]
      },
      VARIABLE,
      {
        className: 'keyword',
        begin: '(->|\\-\\-|\\+\\+|\\-|\\+|\\*|/|%|(!|&&|\\|\\|)|<<|>>|~|\\^|&|\\||===|==|!==|!=|<=|>=|<>|<|>|\\.=|\\.|=)'
      },
      {
        className: 'literal',
        begin: '(true|false|null|__(class|dir|f(ile|unction)|line|method|namespace|trait)__|\\b(on|off|yes|no|nl|br|tab)\\b)'
      },
      {
        className: 'class',
        lexems: '',
        begin: '[a-zA-Z0-9_\x7f-\xff]+::+',
        returnBegin: true,
        contains: [
          {
            className: 'keyword',
            begin: '[a-zA-Z0-9_\x7f-\xff]+'
          }
        ]
      },
      {
        className: 'keyword',
        begin: '::'
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [
          {
            className: 'corefunction',
            begin: '(?:(__(?:call|(?:con|de)struct|get|(?:is|un)?set|tostring|clone|set_state|sleep|wakeup|autoload)))'
          },
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {
            beginKeywords: 'extends implements',
            relevance: 10
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
}
