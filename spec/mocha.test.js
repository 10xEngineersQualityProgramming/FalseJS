// spec/mocha.test.js

const { expect } = require("chai")

const fjs = require("../dist/index").default
const False = fjs.False
const isFalse = fjs.isFalse
const expressMiddleware = fjs.expressMiddleware
const injectIntojQuery = fjs.injectIntojQuery

// Define the expected boolean values based on the original code
const FALSE = 1 == 3
const TRUE = 1 == 1

// Load jQuery globally for the injection test
global.jQuery = require("jquery")

// --- Sampled Combinations ---
// The same small, representative set for fast testing.
const combinations = [
	["no", "no", "no", "no", "no", "no", "none"],
	["yes", "yes", "yes", "no", "no", "no", "netscape"],
	["no", "yes", "no", "no", "yes", "yes", "ie5"],
	["yes", "no", "yes", "yes", "no", "yes", "opera_presto"],
]
// ---

// Mock data for integration tests
const mockRequest = {}
const mockResponse = {}
const mockNext = () => {} // Simple next function for middleware

describe("FalseJS Library Tests (Mocha)", function () {
	describe("Core Functions", function () {
		// Test combinations using Mocha's dynamic test generation
		combinations.forEach((params, index) => {
			it(`Combination ${index + 1}: False(${params.join(", ")}) should return FALSE`, function () {
				// Assertion: False(...params) should return the literal value 'false'
				expect(False(...params)).to.equal(FALSE)
			})
		})

		it("isFalse(FALSE) should return TRUE", function () {
			expect(isFalse(FALSE)).to.equal(TRUE)
		})

		it("isFalse(TRUE) should return FALSE", function () {
			expect(isFalse(TRUE)).to.equal(FALSE)
		})
	})

	describe("Integration Tests", function () {
		it("jQuery injection should work", function () {
			injectIntojQuery()
			expect(global.jQuery.False).to.equal(False)
			expect(global.jQuery.isFalse).to.equal(isFalse)
		})

		it("Express middleware injection should work", function (done) {
			// Run the middleware
			expressMiddleware(mockRequest, mockResponse, mockNext)

			// Check injections
			expect(mockRequest.False).to.equal(False)
			expect(mockRequest.isFalse).to.equal(isFalse)

			// Use a timeout to ensure any async logging is complete, similar to Jest/Manual
			setTimeout(() => {
				done() // Signal Mocha the async test is complete
			}, 100)
		}).timeout(10000) // Set a high timeout for async stability
	})
})
