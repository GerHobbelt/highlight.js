/*
Language: Java Property Files
Author: Michael Gerbig <error418@users.noreply.github.com>
Contributors: Raffaele Sgarro <raffaeleSgarro@gmail.com>
Description: language definition for Java Property files
Category: common, config
*/

function language_JAVA_PROPERTIES(hljs) {
  return {
    contains: [
      hljs.COMMENT(
        '^\\s*[\\!#]',
        '$'
      ),
      {
        className: 'variable',
        begin: /^[^:=]+/m,
        illegal: ".*\\S\\s\\S.*"
      },
      {
        className: 'string',
        begin: /[=:]\s*/,
        end: /[^\\]$/,
        excludeBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'symbol',
            begin: /\\(t|n|r|u[0-9A-Fa-f]{4})/
          },
          {
            className: 'meta',
            begin: /\\$/
          },
          "self"
        ]
      }
    ]
  };
}
