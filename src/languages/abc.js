/*
Language: ABC
Authors: Andrea Crawford <andrea.crawford13@gmail.com>
Category: markup
*/

function(hljs) {
  var INFORMATION_FIELDS = {
    begin:'^[A-Za-z]\\:',
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '^[A-Za-z]',
        end: '\\:',
        excludeEnd: true,
      }
    ]
  }
  var INLINE_INFORMATION_FIELDS = {
    begin: '\\[[A-Za-z]\\:',
    returnBegin: true,
    end: '\\]',
    contains: [
      {
        className: 'attribute',
        begin: '[A-Za-z]',
        end: '\\:',
        excludeEnd: true,
        endsWithParent: true,
      }
    ]
  }
  return {
    keywords: {
      symbol: '',
    },
    contains: [
      hljs.BACKSLASH_ESCAPE,
      hljs.COMMENT('\\[r\\:','\\]'),
      hljs.COMMENT('\\%[^\\%]','$'),
      ACCIDENTAL_SYMBOLS,
      BROKEN_RHYTHM_SYMBOLS,
      LYRICS,
      INFORMATION_FIELDS,
      INLINE_INFORMATION_FIELDS,
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
