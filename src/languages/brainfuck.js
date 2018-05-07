/*
Language: Brainfuck
Author: Evgeny Stepanischev <imbolk@gmail.com>
*/

function language_BRAINFUCK(hljs) {
  var LITERAL = {
    className: 'literal',
    begin: '[\\+\\-]',
    relevance: 1
  };
  return {
    aliases: ['bf'],
    contains: [
      hljs.COMMENT(
        '[^\\[\\]\\.,\\+\\-<> \r\n]',
        '[\\[\\]\\.,\\+\\-<> \r\n]',
        {
          returnEnd: true,
          relevance: 1
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 1
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 1
      },
      {
        // this mode works as the only relevance counter
        begin: /\+\+|\-\-/, returnBegin: true,
        contains: [LITERAL]
      },
      LITERAL
    ]
  };
}
