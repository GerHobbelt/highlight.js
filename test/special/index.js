'use strict';

let nodeVersion = process.version;
let nodeVersionCheck = /v(\d+)\.(\d+)/.exec(nodeVersion);
if (!nodeVersionCheck || +nodeVersionCheck[1] < 6) {
  console.error('\n\n**WARNING**\n\nNode v4/v5 is not supported by JSDOM, hence several unit tests cannot be run on those platforms any more!\n\n');
  nodeVersionCheck = false;
} else {

let _        = require('lodash');
let bluebird = require('bluebird');
let hljs     = require('../../build/node/lib');
let jsdom    = require('jsdom');
let JSDOM    = jsdom.JSDOM;
//let readFile = bluebird.promisify(require('fs').readFile);
let utility  = require('../utility');

let fs = require('fs');
let rf = function rf(file, mode, cb) {
  console.log('READFILE: ', [file, mode, cb]);
  return fs.readFile(file, mode, cb);
};
let readFile = bluebird.promisify(rf);
readFile('../../README.md', 'utf-8', function cbb(err, data) {
  console.log('RDME:', err, data);
});
console.log('READFILE TEST DONE');



describe('special cases tests', function() {
  before(function() {
    const filename = utility.buildPath('fixtures', 'index.html');

    console.log('function:', readFile);
    return readFile(filename, 'utf-8')
      .then(page => jsdomEnv(page))
      .then(window => {
        let blocks;

        // Allows hljs to use document
        global.document = window.document;

        // Special language to test endsWithParentVariants
        hljs.registerLanguage('nested', require('../fixtures/nested.js'));

        // Setup hljs environment
        hljs.configure({ tabReplace: '    ', languages: ['xml', 'php', 'javascript', 'nested'] });
        hljs.initHighlighting();

        // Setup hljs for non-`<pre><code>` tests
        hljs.configure({ useBR: true });

        blocks = document.querySelectorAll('.code');
        _.each(blocks, hljs.highlightBlock);
      });
  });

  // require('./explicitLanguage');
  // require('./customMarkup');
  // require('./languageAlias');
  // require('./noHighlight');
  // require('./subLanguages');
  // require('./buildClassName');
  // require('./useBr');
  // require('./endsWithParentVariants')




describe('explicit language class', function() {
  // before(function() {
  //   const filename = utility.buildPath('fixtures', 'expect', 'explicit1.txt'),
  //         testHTML = document.querySelectorAll('#explicit-language .hljs');

  //   return utility.setupFile(filename, 'utf-8', this, testHTML);
  // });

  it('should highlight block with language in code tag', function() {
    const actual = this.blocks[0];

    actual.should.equal(this.expected);
  });

  // it('should highlight block with language in pre tag', function() {
  //   const actual = this.blocks[1];

  //   actual.should.equal(this.expected);
  // });

  // it('should highlight using html 5 style (language-*)', function() {
  //   const actual = this.blocks[2];

  //   actual.should.equal(this.expected);
  // });

  // it('should highlight with shortened prefix (lang-)', function() {
  //   const filename = utility.buildPath('fixtures', 'expect', 'explicit2.txt'),
  //         actual   = this.blocks[3];

  //   return utility.expectedFile(filename, 'utf-8', actual);
  // });

  // it('should highlight if classname contains uppercase symbols', function() {
  //   const filename = utility.buildPath('fixtures', 'expect', 'explicit2.txt'),
  //         actual   = this.blocks[4];

  //   return utility.expectedFile(filename, 'utf-8', actual);
  // });
});
});

}
