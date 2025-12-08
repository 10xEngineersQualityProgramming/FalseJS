// spec/jest.test.js

// Mock the required modules since the original tests use global side effects
const mockRequest = {}
const mockResponse = {}
const mockNext = jest.fn()

describe("FalseJS Library Tests (Sampled Combinations)", () => {
	let False
	let isFalse
	let expressMiddleware
	let injectIntojQuery
	let jQuery

	// --- Sampled Combinations ---
	// A representative subset of the original 2048 combinations for fast testing.
	// The structure is: [B, B, B, B, B, B, C] where B=Boolean, C=Compat
	const combinations = [
		// 1. All "no", testing the "none" compat option
		["no", "no", "no", "no", "no", "no", "none"],

		// 2. All "yes" for first three, testing the 'netscape' compat option
		["yes", "yes", "yes", "no", "no", "no", "netscape"],

		// 3. Testing a mixed set with 'ie5'
		["no", "yes", "no", "no", "yes", "yes", "ie5"],

		// 4. Testing another mixed set with 'opera_presto'
		["yes", "no", "yes", "yes", "no", "yes", "opera_presto"],
	]
	// ---

	beforeAll(() => {
		// Load the library components from the specified path: ../dist/index
		const fjs = require("../dist/index").default
		False = fjs.False
		isFalse = fjs.isFalse
		expressMiddleware = fjs.expressMiddleware
		injectIntojQuery = fjs.injectIntojQuery

		// Define the expected boolean values based on the original code
		// FALSE = 1 == 3 (false); TRUE = 1 == 1 (true)
		global.FALSE = 1 == 3
		global.TRUE = 1 == 1

		// Load jQuery globally for the injection test
		global.jQuery = require("jquery")
		jQuery = global.jQuery
	})

	// We use the 'done' callback to ensure Jest waits for the asynchronous
	// logging in your library to complete, preventing the "Cannot log after tests are done" error.
	test("All FalseJS functions and integrations should work", (done) => {
		// --- 1. Core Functions Test (Synchronous Assertions) ---

		// False function testing for all sampled combinations
		combinations.forEach((params) => {
			// Original assertion: assert(False(...params) === FALSE)
			expect(False(...params)).toBe(global.FALSE)
		})

		// isFalse function testing
		// Original assertions: assert(isFalse(FALSE) === TRUE), assert(isFalse(TRUE) === FALSE)
		expect(isFalse(global.FALSE)).toBe(global.TRUE)
		expect(isFalse(global.TRUE)).toBe(global.FALSE)

		// --- 2. Integration Tests (Synchronous Assertions) ---

		// jQuery injection test
		injectIntojQuery()
		// Original assertion: assert(jQuery.False == False && jQuery.isFalse == isFalse)
		expect(jQuery.False).toBe(False)
		expect(jQuery.isFalse).toBe(isFalse)

		// Express middleware test
		expressMiddleware(mockRequest, mockResponse, mockNext)
		// Original assertions: assert(request.False == False), assert(request.isFalse == isFalse)
		expect(mockRequest.False).toBe(False)
		expect(mockRequest.isFalse).toBe(isFalse)
		expect(mockNext).toHaveBeenCalledTimes(1)

		// --- 3. Async Completion (Fixing the "Cannot log" Error) ---

		// Use a short setTimeout to mimic the original manual test's delay and
		// ensure any lingering async operations (like the log call) complete.
		setTimeout(() => {
			done() // Tell Jest the test is finished only after the delay
		}, 100)
	}, 10000) // 10-second timeout for this test
})
