// spec/qunit.test.js

const QUnit = require('qunit')
const fjs = require("../dist/index").default
const False = fjs.False
const isFalse = fjs.isFalse

// Define constants
const FALSE = 1 == 3
const TRUE = 1 == 1

// Sampled Combinations
const combinations = [
  ["no", "no", "no", "no", "no", "no", "none"],
  ["yes", "yes", "yes", "no", "no", "no", "netscape"]
]

QUnit.module('FalseJS Library Tests (QUnit)', function(hooks) {
  
  QUnit.test('Core Function: isFalse(FALSE) should return TRUE', function(assert) {
    assert.true(isFalse(FALSE) === TRUE, 'isFalse(false) must return true')
  })

  QUnit.test('Core Function: isFalse(TRUE) should return FALSE', function(assert) {
    assert.true(isFalse(TRUE) === FALSE, 'isFalse(true) must return false')
  })

  combinations.forEach((params) => {
    QUnit.test(`Core Function: False(${params.join(", ")}) should return FALSE`, function(assert) {
      assert.true(False(...params) === FALSE, `False() must return false for params: ${params.join(", ")}`)
    })
  })

})