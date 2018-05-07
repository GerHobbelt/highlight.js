/*
 Language: ArcGIS Arcade
 Category: scripting
 Author: John Foster <jfoster@esri.com>
 Description: ArcGIS Arcade is an expression language used in many Esri ArcGIS products such as Pro, Online, Server, Runtime, JavaScript, and Python
*/
function language_ARCADE(hljs) {
  var IDENT_RE = '[A-Za-z_][0-9A-Za-z_]*';
  var KEYWORDS = {
    keyword:
      'if for while var new function do return void else break',
    literal:
      'true false null undefined NaN Infinity PI BackSlash DoubleQuote ForwardSlash NewLine SingleQuote Tab',
    built_in:
      'Abs Acos Asin Atan Atan2 Average Boolean Ceil Concatenate Console Constrain Cos Count Day Date DateAdd DateDiff Decode ' +
      'DefaultValue Dictionary Distinct DomainCode DomainName Exp Extent Feature Find First Floor Geometry HasKey ' +
      'Hour IIf IndexOf IsEmpty Left Line Log Lower Max Mean Mid Millisecond Minute Min Month Multipoint Now Number ' +
      'Point Polyline Polygon Pow Proper Random Replace Reverse Right Round Second Sin Sort Split Sqrt Stdev Sum ' +
      'Tan Text TextFormatting Timestamp Today ToLocal ToUTC Trim TypeOf Upper Variance Weekday When Year'
  };
  var EXPRESSIONS;
  var SYMBOL = {
    className: 'symbol',
    begin: '\\$[feature|view|value]+'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['arcade'],
    keywords: KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      SYMBOL,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(return)\\b)\\s*',
        keywords: 'return',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/
      }
    ],
    illegal: /#(?!!)/
  };
}
