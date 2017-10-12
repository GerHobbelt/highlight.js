/*
Language: ABC
Authors: Andrea Crawford <andrea.crawford13@gmail.com>
Category: markup
*/

function(hljs) {

  function continuation(parentClassName){
    return {
      begin: '\\n(\\+\\:|  )',
      end: '$',
      returnBegin: true,
      contains: [
        {
          className: 'attribute',
          begin: '\\n\\+',
          end: '\\:',
          excludeEnd: true,
          starts: {
            begin: '\\:',
            starts: {
              className: parentClassName,
              end: '$',
              contains: COMMENTS,
            }
          }
        },
        {
          begin: '\\n  ',
          className: parentClassName,
          end: '$',
          contains: COMMENTS,
        }
      ]
    }
  }

  var COMMENTS = [
    hljs.BACKSLASH_ESCAPE,
    hljs.COMMENT('\\%','$'),
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
  ]

  var INFO_FIELDS = {
    variants: [
      {
        begin: '\\[[A-VY-Za-vy-z]\\:',
        end: '\\]'
      },
      {
        begin:'^[A-VY-Za-vy-z\\+]\\:',
        end: '$'
      },
    ],
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '[A-VX-Za-vx-z\\+]',
        end: '\\:',
        excludeEnd: true,
        starts: {
          begin: '\\:',
          starts: {
            className: 'params',
            end: '$',
            endsWithParent: true,
            excludeEnd: true,
            contains: COMMENTS,
          }
        }
      },
      continuation('params')
    ]
  }

  var REF_FIELD = {
    className: 'strong',
    begin:'^[Xx]\\:',
    end: '$',
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '[Xx]',
        end: '\\:',
        excludeEnd: true,
        starts: {
          begin: '\\:',
          starts: {
            className: 'params',
            end: '$',
            endsWithParent: true,
            excludeEnd: true,
            contains: COMMENTS,
          }
        }
      }
    ]
  }

  var LYRICS = {
    begin:'^[Ww]\\:',
    end: '$',
    returnBegin: true,
    contains: [
      {
        className: 'attribute',
        begin: '[Ww]',
        end: '\\:',
        excludeEnd: true,
        starts: {
          begin: '\\:',
          starts: {
            className: 'string',
            end: '$',
            contains: COMMENTS,
          }
        }
      },
      continuation('string')
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
          contains: COMMENTS,
        }
      },
    ]
  }

  return {
    contains: [
      DIRECTIVE,
      hljs.BACKSLASH_ESCAPE,
      hljs.COMMENT('\\[r\\:','\\]'),
      hljs.COMMENT('\\%','$'),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      REF_FIELD,
      LYRICS,
      INFO_FIELDS,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'meta',
        begin: '\\%abc',
        end: '$',
      },
      {
        className: 'keyword',
        begin:'!\\S+!',
      },
      {
        className: 'symbol',
        begin: '\\[?\\|\\]?',
      }
    ]
  }
}
