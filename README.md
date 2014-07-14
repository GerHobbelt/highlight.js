# Highlight.js

Highlight.js is a syntax highlighter written in JavaScript. It works in the
browser as well as on the server. It works with pretty much any markup,
doesn't depend on any framework and has automatic language detection.

You can read more about the features available on its original repo. The features added by the fork are the following:

## Line numbers

This fork has support for line numbers (based on the this idea: https://groups.google.com/forum/#!topic/highlightjs/FATSYzv7IGc).
To enable them just pass the `lineNodes` set to `true` as a configuration option, like in the following example:

```html
<script type="text/javascript">
  hljs.configure({ lineNodes: true });
  hljs.initHighlightingOnLoad();
</script>
```

## Get highlighted text

In case you don't want to touch the DOM (perhaps you are using highlight.js with Node)
you can use the `getHighlighted(code, language)`.

```
// note: the language is optional
console.log(hljs.getHighlighted(code, 'javascript'));
```
