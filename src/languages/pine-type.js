/*
Language: PineType
Description: Pine (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
*/

export default function(hljs) {

  var OTHER_KEYWORDS = {
    className: 'keyword',
    variants: [{
        begin: /\b(series|list)\((int|float|bool|color|string)\)/
      },
      {
        begin: /\bint|float|bool|color|string|na|void\b/
      },
    ],
  };

  return {
    name: 'Pine Type',
    aliases: ['pine-type'],
    // keywords: KEYWORDS,
    contains: [
      OTHER_KEYWORDS,
      {
        className: 'function',
        begin: '\\b(?=([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(.+?\\)\\s*->)',
        end: '(?=->)',
        illegal: /[${=;\n,]/,
        contains: [
          // FUNC_KEYWORD,
          {
            begin: /\b\w+\s*(?=\:)/,
            className: "title",
          },
          OTHER_KEYWORDS,
          // PARAMS,
        ]
      },
    ]
  };
}
