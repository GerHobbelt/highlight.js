/*
Language: ABC
Authors: Andrea Crawford <andrea.crawford13@gmail.com>
Category: markup
*/

function(hljs) {
  var ACCIDENTAL_SYMBOLS = {
    begin: '[_^]{1,2}|\=',
    className: 'meta'
  }
  var BROKEN_RHYTHM_SYMBOLS = {
    begin: '[<>]{1,3}',
    className: 'meta'
  }
  var RESTS = {
    begin: '[zZxX]\\d*(?!\\:)',
    className: 'comment'
  }
  var METADATA2 = {
    className: 'meta-keyword',
    begin: '^\\w\\:',
    contains: [
      {
        className: 'meta-string',
        end: '(?=%)|$',
        endsParent: true,
        contains: [
          {
            begin: '\\n '
          },
        ]
      },
    ]
  }
  var METADATA = {
    className: 'attribute',
    begin: '[wW+]\\:',
    contains: [
      {
        className: 'string',
        end: '(?=%)|$',
        endsParent: true,
        contains: [
          {
            begin: '\\n '
          },
        ]
      },
    ]
  }
  return {
    keywords: {
      symbol: '',
    },
    contains: [
      hljs.COMMENT('\\[r\\:','\\]'),
      hljs.COMMENT('\\%[^\\%]','$'),
      ACCIDENTAL_SYMBOLS,
      BROKEN_RHYTHM_SYMBOLS,
      METADATA,
      {
        className: 'meta',
        begin: '\\%abc',
        end: '$',
      },
      {
        className: 'built_in',
        begin:'!',
        end: '!',
      },
      {
        className: 'attribute',
        begin:'^\\w\\:',
      },
      {
        className: 'meta',
        begin: '\\[\\w\\:',
        end: '\\]',
        contains: [
          {
            className: 'meta-string',
            begin: '[^\\]]',
            endsWithParent: true,
            excludeEnd: true,
          }
        ]
      },
      {
        className: 'meta',
        begin: '^\\%\\%',
        end: '$',
        contains: [
          {
            className: 'meta-string',
            begin: ' ',
            end: '$',
          }
        ]
      }
    ]
  }
}
