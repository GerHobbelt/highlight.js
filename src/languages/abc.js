/*
Language: ABC
Authors: Andrea Crawford <andrea.crawford13@gmail.com>
Category: markup
*/

function(hljs) {

  var INFORMATION_FIELDS = {
    variants: [
      {
        begin:'^[A-Za-z\\+]\\:',
        end: '$'
      },
      {
        begin: '\\[[A-Za-qs-z]',
        end: '\\]'
      }
    ],
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '[A-Za-z]',
        end: '\\:',
        excludeEnd: true,
        starts: {
          begin: '\\:',
          starts: {
            className: 'params',
            end: '$',
            endsWithParent: true,
            excludeEnd: true,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              hljs.COMMENT('\\[r\\:','\\]'),
              hljs.COMMENT('\\%','$'),
              {
                begin: '\\n  '
              }
            ]
          }
        }
      }
    ]
  }

  var DIRECTIVE = {
    begin: '^\\%\\%',
    returnBegin: true,
    end: '$',
    contains: [
      {
        className: 'attribute',
        begin: '\\%\\%',
        end: '\\s',
        starts: {
          className: 'params',
          endsWithParent: true,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            hljs.COMMENT('\\%','$'),
          ]
        }
      },
    ]
  }

  return {
    keywords: {
      symbol: '',
    },
    contains: [
      DIRECTIVE,
      hljs.BACKSLASH_ESCAPE,
      hljs.COMMENT('\\[r\\:','\\]'),
      hljs.COMMENT('\\%','$'),
      INFORMATION_FIELDS,
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
    ]
  }
}
