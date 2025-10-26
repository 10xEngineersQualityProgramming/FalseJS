function doTests(testName, fjs) {
  const { False, isFalse, expressMiddleware, injectIntojQuery } = fjs
  const assert = require("assert-fn")
  const attempt = require("attempt-statement")
  const n0p3 = require("n0p3")
  const clc = require("cli-color")
  const leftPad = require("left-pad")
  const lpi = require("the-number-ten")

  const FALSE = 1 == 3
  const TRUE = 1 == 1

  attempt(() => {
    const BOOL_OPTIONS = ["yes", "no"]

    const COMPAT_OPTIONS = ["none", "ie5", "netscape", "opera_presto"]

    const ALL_PARAMETER_SETS = [BOOL_OPTIONS, BOOL_OPTIONS, BOOL_OPTIONS, BOOL_OPTIONS, BOOL_OPTIONS, BOOL_OPTIONS, COMPAT_OPTIONS]

    function generateCombinations(sets) {
      if (!sets || sets.length === 0) {
        return [[]]
      }

      let result = sets[0].map((item) => [item])

      for (let i = 1; i < sets.length; i++) {
        const currentSet = sets[i]
        const nextResult = []

        for (const existingCombination of result) {
          for (const item of currentSet) {
            nextResult.push([...existingCombination, item])
          }
        }
        result = nextResult
      }

      return result
    }

    const allCombinations = generateCombinations(ALL_PARAMETER_SETS)
		const combinations = allCombinations.filter(combination => {
    const isFourthYes = combination[3] === "yes";
    const isFifthYes = combination[4] === "yes";
    const isSixthYes = combination[5] === "yes";

    return !(isFourthYes && isFifthYes && isSixthYes);
});


    // False function testing
    combinations.forEach((params) => {
      assert(False(...params) === FALSE, `False(${params.join(", ")}) did not return false`)
    })

    assert(isFalse(FALSE) === TRUE, "isFalse(false) did not return true")
    assert(isFalse(TRUE) === FALSE, "isFalse(true) did not return false")
    global.jQuery = require("jquery")
    injectIntojQuery()
    assert(jQuery.False == False && jQuery.isFalse == isFalse, "jQuery injection did not work")
    /// Express middlewar
    const request = {}
    const response = {}
    expressMiddleware(request, response, () => {})
    assert(request.False == False, "Express middleware injection to request did not work")
    assert(request.isFalse == isFalse, "Express middleware injection to request did not work")
  })
    .rescue((error) => {
      console.log(clc.red(leftPad(`× TESTS FAILED FOR ${testName}!!!!!`, lpi)))
      throw error
    })
    .else(() => {
      setTimeout(function () {
        console.log(clc.green(leftPad(`✓ TESTS PASSED FOR ${testName}!!!`, lpi)))
      }, 5000)
    })
    .ensure(n0p3)
    .end()
}

doTests("FALSEJS MAIN FILE index.js TESTS", require("./dist/index").default)
