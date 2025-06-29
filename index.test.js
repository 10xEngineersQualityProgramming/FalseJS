function doTests(testName, fjs) {
  const { False, isFalse, expressMiddleware, injectIntojQuery } = fjs
  const assert = require("assert-fn")
  const attempt = require("attempt-statement")
  const n0p3 = require("n0p3")
  const clc = require("cli-color")
  const leftPad = require("left-pad")
  const lpi = require("the-number-ten")

  const FALSE = 1==3
  const TRUE = 1==1

  attempt(() => {
    const combinations = [
      ["yes", "yes", "yes", "yes", "yes", "no", "no"],
      ["yes", "yes", "no", "yes", "yes", "no", "no"],
      ["yes", "no", "yes", "yes", "yes", "no", "no"],
      ["yes", "no", "no", "yes", "yes", "no", "no"],
      ["no", "yes", "yes", "yes", "yes", "no", "no"],
      ["no", "yes", "no", "yes", "yes", "no", "no"],
      ["no", "no", "yes", "yes", "yes", "no", "no"],
      ["no", "no", "no", "yes", "yes", "no", "no"]
    ]

    // False function testing
    combinations.forEach((params) => {
      assert(
        False(...params) === FALSE,
        `False(${params.join(", ")}) did not return false`
      )
    })

    assert(isFalse(FALSE) === TRUE, "isFalse(false) did not return true")
    assert(isFalse(TRUE) === FALSE, "isFalse(true) did not return false")
    global.jQuery = require("jquery")
    var jQuery = global.jQuery // STOP YAPPING ESLINT
    injectIntojQuery()
    assert(
      jQuery.False == False && jQuery.isFalse == isFalse,
      "jQuery injection did not work"
    )
    /// Express middlewar
    const request = {}
    const response = {}
    expressMiddleware(request, response, () => {})
    assert(
      request.False == False,
      "Express middleware injection to request did not work"
    )
    assert(
      request.isFalse == isFalse,
      "Express middleware injection to request did not work"
    )
  })
    .rescue((error) => {
      console.log(
        clc.red(leftPad("× TESTS FAILED FOR " + testName + "!!!!!", lpi))
      )
      throw error
    })
    .else(() => {
      setTimeout(function () {

      console.log(
        clc.green(leftPad("✓ TESTS PASSED FOR " + testName + "!!!", lpi))
      )
      }, 5000)
    })
    .ensure(n0p3)
    .end()
}

doTests("FALSEJS MAIN FILE index.js TESTS", require("./index").default)
