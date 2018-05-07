module.exports = function language_METASPLOIT(hljs) {
  return {
    aliases: ['msf'],
    case_insensitive: false,
    keywords: {
      keyword: 'msf|10',
      nomarkup: 'exploit auxiliary post nop encoder' // Helps classification
    },
    contains: [
      {
        className: 'strong',
        begin: '^\\[\\*\\]', end: ' ',
        relevance: 10
      },
      {
        className: 'literal',
        begin: '^\\[\\+\\]', end: ' ',
        relevance: 10
      },
      {
        className: 'number',
        begin: '^\\[[-!]\\]', end: ' ',
        relevance: 10
      },
    ]
  }
};