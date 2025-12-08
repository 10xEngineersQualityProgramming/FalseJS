// spec/tape.test.js

const test = require('tape')

// Load the library components from the specified path
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

// Tape uses the 't' object for assertions (t.equal, t.ok, t.plan)

test('FalseJS Core Functions', function (t) {
  // Plan the number of assertions expected in this main block (2 assertions + 2 combination blocks * 2 assertions each)
  t.plan(2 + combinations.length)

  t.equal(isFalse(FALSE), TRUE, 'isFalse(FALSE) should return TRUE')
  t.equal(isFalse(TRUE), FALSE, 'isFalse(TRUE) should return FALSE')

  combinations.forEach((params) => {
    // Check if False() returns the exact FALSE constant (which is boolean false)
    t.equal(False(...params), FALSE, `False(${params.join(", ")}) should return FALSE`)
  })
})