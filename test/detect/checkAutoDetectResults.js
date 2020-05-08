'use strict';

const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const hljs = require('../../build/node/');
const path = require('path');
const utility = require('../utility');
const Table = require('cli-table');
const colors = require('colors/safe');

const resultTable = new Table({
  head: ['expected', 'score', 'actual', 'score', '2nd best', 'score'],
  colWidths: [19, 7, 19, 7, 19, 7],
  style: {
    head: ['grey']
  }
});

function testAutoDetection(language, index, languages) {
  const languagePath = utility.buildPath('detect', language);
  return fs.readdirSync(languagePath)
    .map(function(example) {
      const filename = path.join(languagePath, example);
      return fs.readFileSync(filename, 'utf-8');
    })
    .forEach(function(content) {
      const expected = language;
      const actual = hljs.highlightAuto(content);
      const specific = hljs.highlight(expected, content);
      if (actual.language !== expected && actual.second_best.language !== expected) {
        resultTable.push([
          expected,
          specific.relevance,
          colors.red(actual.language),
          actual.relevance ? actual.relevance : colors.grey('None'),
          colors.red(actual.second_best.language),
          actual.second_best.relevance ? actual.second_best.relevance : colors.grey('None')
        ]);
      } else if (actual.language !== expected) {
        resultTable.push([
          expected,
          specific.relevance,
          colors.yellow(actual.language),
          actual.relevance ? actual.relevance : colors.grey('None'),
          colors.yellow(actual.second_best.language),
          actual.second_best.relevance ? actual.second_best.relevance : colors.grey('None')
        ]);
      }
    });
}

const languages = hljs.listLanguages();
console.log('Checking auto-highlighting for ' + colors.grey(languages.length) + ' languages...');
languages.forEach(testAutoDetection);

if (resultTable.length < 1) {
  console.log(colors.green('SUCCESS') + ' - ' + colors.green(languages.length) + ' of ' + colors.gray(languages.length) + ' languages passed auto-highlight check!');
} else {
  console.log(
    colors.red('FAILURE') + ' - ' + colors.red(resultTable.length) + ' of ' + colors.gray(languages.length) + ' languages failed auto-highlight check.' +
    '\n' +
    resultTable.toString());
}
