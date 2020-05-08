module.exports = function language_PORTUGOL(hljs) {

  var OBJC_KEYWORDS = {
    keyword:
      'programa funcao retorne const nao e ou ' +
      'inclua biblioteca  ' +
      'se senao escolha caso contrario pare faca enquanto para ',
    built_in:
      'leia escreva limpa',
    variable:
      'caracter cadeia inteiro real logico vazio verdadeiro falso'
  }
    
  return {
      case_insensitive: true,
      keywords: OBJC_KEYWORDS,
      contains: [
        {
          className: 'string',
          begin: '"', end: '"'
        },
        {
          className: 'string',
          begin: '\'', end: '\''
        },
        hljs.NUMBER_MODE,
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE
      ]
    }
};