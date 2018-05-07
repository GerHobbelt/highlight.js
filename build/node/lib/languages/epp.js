module.exports = function language_EPP(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[%=-]?', end: '[%-]?%>',
        subLanguage: 'puppet',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
};