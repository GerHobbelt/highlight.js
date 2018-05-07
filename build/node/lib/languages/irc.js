module.exports = function language_IRC(hljs) {

  return {
    keywords: 'NickServ VERIFY REGISTER GROUP',
    contains: [
      hljs.COMMENT('-!-', '$'),
      {
        className: 'section',
        begin: /\/[a-z]+/
      },
      {
        className: 'variable',
        begin: /#[a-z]+/
      },
    ]
  };

};