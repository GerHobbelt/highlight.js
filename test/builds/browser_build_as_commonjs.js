const hljs = require("../../build/highlight");

const major = parseInt(hljs.versionString.split("."));
if (major !== 10) {
  process.exit(1);
}
