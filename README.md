# Highlight.js

Highlight.js is a node.js fork of (highlight.js)[https://github.com/isagalaev/highlight.js] for the browser.

##Install

	npm install highlight.js

##Usage

###Auto Language Detection:

	var hl = require("highlight.js");
	var txt = "var test = 'asdf'";
	var html = hl.highlightAuto(txt);
	console.log(html.value);

###Pass in Language:

	var hl = require("highlight.js");
	var txt = "var test = 'asdf'";
	var html = hl.highlight('javascript', txt);
	console.log(html.value);

##Example Output:

<span class="keyword">var</span> test = <span class="string">'asdf'</span>
