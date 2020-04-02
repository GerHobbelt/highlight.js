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
  var STANZA_IDENT_RE = '[^\\(\\)\\:\\<\\>\\[\\]\\{\\}",\'`;#|\\\\\\s]+';

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
      'val var defn defn* defmulti defmethod defmethod* fn fn*' + 
      'multi begin let match branch new as as? set do' + 
      'prim tuple quote none of and or ->' + 
      'cap void ? new struct addr addr! deref' + 
      'slot field do call-c prim sizeof tagof' + 
      'letexp and or set labels block goto return' + 
      'let if match func' + 
      'extern extern-fn byte int long float double' +
      'ptr ref ?',

    built_in:
      'True False Byte Int Long Float Double Char String' +
      'Box Fn Type Symbol Tuple List' +
      'Comparable Equalable Lengthable Hashable IndexedCollection' +
      'Array CharArray ByteArray IntArray LongArray FloatArray DoubleArray' +
      'InputStream OutputStream FileOutputStream FileInputStream' +
      'StringInputStream Printable IndentedStream' +
      'Seqable Seq Collection' +
      'BufferedInputStream RandomAccessFile ByteBuffer StringBuffer' +
      'Exception IOException' +
      'Maybe None One' +
      'Range KeyValue' +
      'Token FileInfo' +
      'Random Process Timer' +
      'Unique Finalizer' +
      'Vector Queue HashTable HashSet IntTable IntSet',

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

  // var IDENT = {
  //   begin: STANZA_IDENT_RE,
  //   relevance: 0
  // };
  // 
  // var NAME = {
  //     className: 'name',
  //     begin: STANZA_IDENT_RE,
  //     lexemes: STANZA_IDENT_RE,
  //     keywords: BUILTINS
  // };

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
    lexemes: STANZA_IDENT_RE,
    keywords: KEYWORDS,
    illegal: /\S/,
    contains: [NUMBER, CHAR, STRING, COMMENT]
  };
}
