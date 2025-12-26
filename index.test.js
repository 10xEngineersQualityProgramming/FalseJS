// DO TESTS MANUALLY

function doTests(testName, fjs) {
	const {
		False,
		isFalse,
		expressMiddleware,
		injectIntojQuery,
		COMPATIBILITY_MODE,
	} = fjs
	const assert = require("assert-fn")
	const attempt = require("attempt-statement")
	const n0p3 = require("n0p3")
	const clc = require("cli-color")
	const leftPad = require("left-pad")
	const lpi = require("the-number-ten")

	const FALSE = 1 == 3
	const TRUE = 1 == 1

	attempt(() => {
		// --- Sampled Combinations ---
		// Using a small, representative set instead of generating all 2048 combinations.
		const combinations = [
			// 1. All "no", testing the "none" compat option
			["no", "no", "no", "no", "no", "no", COMPATIBILITY_MODE.NONE],

			// 2. All "yes" for first three, testing the 'netscape' compat option
			["yes", "yes", "yes", "no", "no", "no", COMPATIBILITY_MODE.NETSCAPE],

			// 3. Testing a mixed set with 'ie5'
			["no", "yes", "no", "no", "yes", "yes", COMPATIBILITY_MODE.IE5],

			// 4. Testing another mixed set with 'opera_presto'
			["yes", "no", "yes", "yes", "no", "yes", COMPATIBILITY_MODE.OPERA_PRESTO],
		]

		// False function testing
		combinations.forEach((params) => {
			assert(
				False(...params) === FALSE,
				`False(${params.join(", ")}) did not return false`,
			)
		})

		assert(isFalse(FALSE) === TRUE, "isFalse(false) did not return true")
		assert(isFalse(TRUE) === FALSE, "isFalse(true) did not return false")

		// jQuery injection test
		global.jQuery = require("jquery")
		injectIntojQuery()
		assert(
			jQuery.False == False && jQuery.isFalse == isFalse,
			"jQuery injection did not work",
		)

		// Express middleware test
		const request = {}
		const response = {}
		expressMiddleware(request, response, () => {})
		assert(
			request.False == False,
			"Express middleware injection to request did not work",
		)
		assert(
			request.isFalse == isFalse,
			"Express middleware injection to request did not work",
		)
	})
		.rescue((error) => {
			console.log(clc.red(leftPad(`× TESTS FAILED FOR ${testName}!!!!!`, lpi)))
			console.log(clc.red(`Tests Error Message: ${error.message}`))
			throw error
		})
		.else(() => {
			setTimeout(function () {
				console.log(
					clc.green(leftPad(`✓ TESTS PASSED FOR ${testName}!!!`, lpi)),
				)
			}, 5000)
		})
		.ensure(n0p3)
		.end()
}

doTests("FalseJS Library Tests", require("./index").default)
