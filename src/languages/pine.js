/*
Language: Pine
Description: Pine (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
*/

export default function (hljs) {

  var KEYWORDS = {
    keyword:
      'var if else for to by return break continue and or not =>',
    literal:
      'true false na open close high low',
    built_in:
      'bool int float string color'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };

  var HEXCOLOR = {
    className: 'number', begin: '#[0-9A-Fa-f]+'
  };

  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    contains: [
      NUMBER, 
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE, 
      HEXCOLOR
    ]
  };

  return {
    name: 'Pine',
    aliases: ['pine'],
    keywords: KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      NUMBER,
      HEXCOLOR,
      {
        className: 'function',
        begin: '\\b(?=([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(.+?\\)\\s*=>)',
        end: '(?==>)',
        illegal: /[${=;\n,]/,
        keywords: KEYWORDS,
        contains: [
          // FUNC_KEYWORD,
          hljs.UNDERSCORE_TITLE_MODE,
          PARAMS,
        ]
      },
    ]
  };
}
