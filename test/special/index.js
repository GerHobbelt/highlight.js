'use strict';

const hljs = require('../../build');
const { JSDOM } = require('jsdom');
const { readFile } = require('fs').promises;
const utility = require('../utility');

describe('special cases tests', () => {
  before(async() => {
    const filename = utility.buildPath('fixtures', 'index.html');
    const page = await readFile(filename, 'utf-8');
    const { window } = await new JSDOM(page);

    // Allows hljs to use document
    global.document = window.document;

    // Special language to test endsWithParentVariants
    hljs.registerLanguage('nested', require('../fixtures/nested.js'));

    // Setup hljs environment
    hljs.configure({ tabReplace: '    ' });
    hljs.initHighlighting();

    // Setup hljs for non-`<pre><code>` tests
    hljs.configure({ useBR: true });

    const blocks = document.querySelectorAll('.code');
    blocks.forEach(hljs.highlightBlock);
  });

  require('./explicitLanguage');
  require('./customMarkup');
  require('./languageAlias');
  require('./noHighlight');
  require('./subLanguages');
  require('./buildClassName');
  require('./useBr');
  require('./endsWithParentVariants');
});
