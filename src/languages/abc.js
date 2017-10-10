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
              contains: [
                hljs.BACKSLASH_ESCAPE,
                hljs.COMMENT('\\%','$'),
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
              ]
            }
          }
        },
        {
          begin: '\\n  ',
          className: parentClassName,
          end: '$',
          contains: [
            hljs.BACKSLASH_ESCAPE,
            hljs.COMMENT('\\%','$'),
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
          ]
        }
      ]
    }
  }

  var INFO_FIELDS = {
    variants: [
      {
        begin: '\\[[A-VY-Za-vy-z]',
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
            contains: [
              hljs.BACKSLASH_ESCAPE,
              hljs.COMMENT('\\[r\\:','\\]'),
              hljs.COMMENT('\\%','$'),
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
            ]
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
        className: 'strong',
        begin: '[Xx]',
        end: '\\:',
        excludeEnd: true,
        starts: {
          begin: '\\:',
          starts: {
            className: 'strong',
            end: '$',
            endsWithParent: true,
            excludeEnd: true,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              hljs.COMMENT('\\[r\\:','\\]'),
              hljs.COMMENT('\\%','$'),
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
            ]
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
            // endsWithParent: true,
            // excludeEnd: true,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              hljs.COMMENT('\\%','$'),
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
            ]
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
          contains: [
            hljs.BACKSLASH_ESCAPE,
            hljs.COMMENT('\\%','$'),
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
          ]
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
        begin: '[|\\[\\]]',
      }
    ]
  }
}
