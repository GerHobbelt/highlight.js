module.exports = function language_VBSCRIPT_IN_HTML(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%', end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
};