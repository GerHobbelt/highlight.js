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
  var INFORMATION_FIELDS = {
    begin:'^[A-Za-z]\\:',
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '^[A-Za-z]',
        end: '\\:',
        excludeEnd: true,
      },
      {
        className: 'params',
        end: '(?=%)|$',
        endsParent: true,
        contains: [
          {
            begin: '\\n '
          },
          hljs.BACKSLASH_ESCAPE,
        ]
      },
    ]
  }
  var LYRICS = {
    begin:'^[Ww+]\\:',
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '^[A-Za-z+]',
        end: '\\:',
        excludeEnd: true,
      },
      {
        className: 'emphasis',
        end: '(?=%)|$',
        endsParent: true,
        contains: [
          {
            begin: '\\n '
          },
          hljs.BACKSLASH_ESCAPE,
        ]
      },
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
      },
      {
        className: 'params',
        begin: '\\:',
        excludeBegin: true,
        excludeEnd: true,
        endsWithParent: true,
      },
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
      // ACCIDENTAL_SYMBOLS,
      // BROKEN_RHYTHM_SYMBOLS,
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
