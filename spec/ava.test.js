// spec/ava.test.js

const test = require('ava')
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

// AVA tests use t.true() or t.is() for assertions.
// We use test.serial to prevent potential state interference between tests.

test.serial('Core Function: isFalse(FALSE) should return TRUE', t => {
  // t.true checks if the expression evaluates to the boolean true
  t.true(isFalse(FALSE) === TRUE)
})

test.serial('Core Function: isFalse(TRUE) should return FALSE', t => {
  t.true(isFalse(TRUE) === FALSE)
})

combinations.forEach((params, index) => {
  test.serial(`Core Function: False(${params.join(", ")}) should return FALSE`, t => {
    // We check if the result of False() is strictly equal to the constant FALSE
    t.is(False(...params), FALSE)
  })
})