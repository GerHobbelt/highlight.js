/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
*/

function(hljs) {
  return {
    aliases: ['patch'],
    contains: [
      {
        className: 'chunk',
        relevance: 10,
        variants: [
          {begin: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@/, end: /$/},
          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*/, end: /$/},
          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-/, end: /$/}
        ]
      },
      {
        className: 'header',
        variants: [
          {begin: /^[Ii]ndex:? /, end: /$/},
          {begin: /=====/, end: /=====$/},
          {begin: /^\-\-\-/, end: /$/},
          {begin: /^diff \-\-git a/, end: /$/},
          {begin: /^\*{3} /, end: /$/},
          {begin: /^\+\+\+/, end: /$/},
          {begin: /\*{5}/, end: /\*{5}$/}
        ]
      },
      {
        className: 'addition',
        begin: '^\\+', end: '$'
      },
      {
        className: 'deletion',
        begin: '^\\-', end: '$'
      },
      {
        className: 'change',
        begin: '^\\!', end: '$'
      }
    ]
  };
}
