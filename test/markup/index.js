'use strict';

let nodeVersion = process.version;
let nodeVersionCheck = /v(\d+)\.(\d+)/.exec(nodeVersion);
if (!nodeVersionCheck || +nodeVersionCheck[1] < 11) {
  console.error('\n\n**WARNING**\n\nNode v4 has trouble with the async tests, hence several unit tests cannot be run on those platforms any more!\n\n');
  nodeVersionCheck = false;
} else {
  nodeVersionCheck = +nodeVersionCheck[1];

let _        = require('lodash');
let bluebird = require('bluebird');
let fs       = bluebird.promisifyAll(require('fs'));
let glob     = require('glob');
let hljs     = require('../../build/node/lib');
let path     = require('path');
let utility  = require('../utility');

function testLanguage(language) {
  if (+nodeVersionCheck[1] <= 4 && /^(?:beancount|clojure|cs|css|php|protobuf|python|ruby|st|twig|typescript)$/.test(language)) {
    return;
  }

  describe(language, function() {
    const filePath  = utility.buildPath('markup', language, '*.expect.txt'),
          filenames = glob.sync(filePath);

    _.each(filenames, function(filename) {
      const testName   = path.basename(filename, '.expect.txt'),
            sourceName = filename.replace(/\.expect/, '');

      it(`should markup ${testName}`, function(done) {
        const sourceFile   = fs.readFileAsync(sourceName, 'utf-8'),
              expectedFile = fs.readFileAsync(filename, 'utf-8');

        bluebird.join(sourceFile, expectedFile, function(source, expected) {
          const actual = hljs.highlight(language, source).value;

          if (actual !== expected)
          console.log('----------------START---------------\n', actual, '\n------------------------------------------------\n', 
            expected, '\n---------------END-------------------\n');
          actual.trim().should.equal(expected.trim());
          done();
        });
      });
    });
  });
}

describe('hljs.highlight()', function() {
  let markupPath = utility.buildPath('markup');

  return fs.readdirAsync(markupPath).each(testLanguage);
});

}
