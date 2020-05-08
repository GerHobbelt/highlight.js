module.exports = function language_SOY(hljs) {
  var TEMPLATE_KEYWORDS = 'alias as autoescape call case default delcall else elseif fallbackmsg foreach if ifempty let msg namespace param print switch template';

  // Partial html tag support
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: '[A-Za-z0-9\\._:-]+',
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };

  return {
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      {
        begin: /\{delpackage/,
        ends: /\}/,
        relevance: 10,
        keywords: 'delpackage'
      },
      {
        begin: /\{namespace/,
        end: /\}/,
        relevance: 10,
        keywords: 'namespace autoescape',
        contains: [
          hljs.QUOTE_STRING_MODE
        ]
      },
      {
        className: 'template-tag',
        begin: /\{template/,
        end: /\{\/template\}/,
        relevance: 10,
        keywords: TEMPLATE_KEYWORDS,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,

          {
            className: 'template-variable',
            relevance: 0,
            begin: /\$[^}\s]+/
          },

          // Partial html support not achievable via subLanguage
          {
            className: 'tag',
            begin: '</?', 
            end: '/?>',
            contains: [
              {
                className: 'name', 
                begin: /[^\/><\s]+/, 
                relevance: 0
              },
              TAG_INTERNALS
            ]
          }
        ]
      }
    ]
  }
};