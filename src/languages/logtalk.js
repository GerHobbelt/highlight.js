/*
Language: Logtalk
Author: Paulo Moura <pmoura@logtalk.org>
Description: Logtalk is an object-oriented logic programming language that extends and leverages the Prolog language with a feature set suitable for programming in the large.
*/

function(hljs) {

  var ATOMS = {
    className: 'atom',
    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  var QUOTED_ATOMS = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [hljs.BACKSLASH_ESCAPE],
    illegal: /\n/,
    relevance: 0
  };

  var VARIABLES = {
    className: 'variable',
    begin: /[A-Z_][A-Za-z0-9_]*/,
    relevance: 0
  };

  var NUMBERS = {
    className: 'number',
    begin: /0\'.|0b[0-1]+|0o[0-7]+|0x[0-9a-fA-F]+|[0-9]+(\.[0-9]+)?([eE]([-+])?[0-9]+)?/,
    relevance: 0
  };

  var PARENTED = {
    begin: /\(/, end: /\)/,
    relevance: 0
  };

  var LISTS = {
    begin: /\[/, end: /\]/,
    relevance: 0
  };

  var CURLY_BRACKTED_TERMS = {
	begin: /\{/, end: /\}/,
    relevance: 0
  };

  var LINE_COMMENTS = {
    className: 'comment',
    begin: /%/, end: /$/
  };

//  var BLOCK_COMMENTS = hljs.COMMENT('/\\*', '\\*/');

  var BACKTICK_STRINGS = {
    className: 'string',
    begin: /`/, end: /`/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var DIRECTIVE_KEYWORDS = {
    className: 'keyword',
	keyword: 'object end_object'
  },

  var DIRECTIVES = {
    className: 'preprocessor',
//	lexemes: /:-\s[a-z][A-Za-z0-9_]*[.(]/,
	begin: ':-[ ]', end: '\\(|\\./', excludeEnd: true,
	contains: [DIRECTIVE_KEYWORDS]
//    keywords: DIRECTIVE_KEYWORDS,
//    variants: [
//        {beginKeywords: ':-\\s(object|protocol|category)', end: '\\(', excludeEnd: true},
//        {beginKeywords: ':-\\s(end_object|end_protocol|end_category)', end: '\\.', excludeEnd: true},
//	],
//	contains: [ATOMS, NUMBERS, VARIABLES]
  };

//  var PRED_OP = { // relevance booster
//    begin: /:-/
//  };

  var inner = [

	DIRECTIVES,
    ATOMS,
    QUOTED_ATOMS,
    hljs.BACKSLASH_ESCAPE,
    VARIABLES,
    NUMBERS,
    PARENTED,
//    PRED_OP,
    LISTS,
    CURLY_BRACKTED_TERMS,
    LINE_COMMENTS,
    hljs.C_BLOCK_COMMENT_MODE,
    BACKTICK_STRINGS
  ];

  PARENTED.contains = inner;
  LISTS.contains = inner;
  CURLY_BRACKTED_TERMS.contains = inner;

  return {
    aliases: ['lgt'],
    case_insensitive: true,
    contains: inner.concat([
      {begin: /\.$/} // relevance booster
    ])
  };
}
