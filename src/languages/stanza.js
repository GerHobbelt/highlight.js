/*
Language: Stanza
Description: Stanza is a type oriented programming language.
Author: Jonathan Bachrach <j.bachrach@jitx.com>
Contributors: Patrick Li <p.li@jitx.com>
Origin: scheme.js
Website: http://lbstanza.org/
Category: lisp
*/

export default function(hljs) {
  var VARIABLE_NAME_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';

  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [
      {begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'},
      {begin: '\\b(0o[0-7]+)[lLjJ]?'},
      {begin: hljs.C_NUMBER_RE + '[lLjJ]?'}
    ]
  };

  var KEYWORDS = {
    keyword:
      'defpackage import public protected private doc deftype defchild' +
      'devar defn defn* defmulti defmethod defmethod* fn fn*' + 
      'multi begin let match branch new as as? set do' + 
      'prim tuple quote none of and or ->' + 
      'cap void ? new struct addr addr! deref' + 
      'slot field do call-c prim sizeof tagof' + 
      'letexp and or set labels block goto return' + 
      'let if match branch func def defvar deftype deffield' + 
      'extern extern-fn byte int long float double' + 
      'ptr ref',
    literal:
      'false true'
  };

  var STRING = hljs.QUOTE_STRING_MODE;

  var LITERAL = {
    className: 'literal',
    begin: '(true|false)'
  };

  var CHAR = {
    className: 'string',
    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
  };

  var COMMENT = [
    hljs.COMMENT(
      ';',
      '$',
      {
        relevance: 0
      }
    )
  ];

  return {
    name: 'Stanza',
    lexemes: VARIABLE_NAME_RE,
    keywords: KEYWORDS,
    illegal: /\S/,
    contains: [NUMBER, CHAR, STRING, COMMENT]
  };
}
