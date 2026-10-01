const { test } = require("node:test");
const assert = require("node:assert/strict");

const { greet } = require("../public/script.js");

test('greet("Muhammad Abdullah") returns "Hello, Muhammad Abdullah!"', () => {
  assert.equal(greet("Muhammad Abdullah"), "Hello, Muhammad Abdullah!");
});
