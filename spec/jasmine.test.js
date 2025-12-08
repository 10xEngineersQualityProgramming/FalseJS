// spec/jasmine.test.js

// Load the library components from the specified path
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
const combinations = [
  ["no", "no", "no", "no", "no", "no", "none"],
  ["yes", "yes", "yes", "no", "no", "no", "netscape"],
  ["no", "yes", "no", "no", "yes", "yes", "ie5"],
  ["yes", "no", "yes", "yes", "no", "yes", "opera_presto"]
]
// ---

// Mock data for integration tests
const mockRequest = {}
const mockResponse = {}
const mockNext = () => {} // Simple next function for middleware

describe("FalseJS Library Tests (Jasmine)", () => {

  describe("Core Functions", () => {
    
    // Test combinations using Jasmine's dynamic test generation
    combinations.forEach((params) => {
      it(`False(${params.join(", ")}) should return the calculated FALSE`, () => {
        // Assertion: False(...params) should return the literal value 'false'
        expect(False(...params)).toBe(FALSE)
      })
    })

    it("isFalse(FALSE) should return TRUE", () => {
      expect(isFalse(FALSE)).toBe(TRUE)
    })

    it("isFalse(TRUE) should return FALSE", () => {
      expect(isFalse(TRUE)).toBe(FALSE)
    })
  })

  describe("Integration Tests", () => {
    
    it("jQuery injection should work", () => {
      injectIntojQuery()
      expect(global.jQuery.False).toBe(False)
      expect(global.jQuery.isFalse).toBe(isFalse)
    })

    it("Express middleware injection should work", (done) => {
      // Run the middleware
      expressMiddleware(mockRequest, mockResponse, mockNext)
      
      // Check injections
      expect(mockRequest.False).toBe(False)
      expect(mockRequest.isFalse).toBe(isFalse)

      // Use a timeout to ensure any async logging is complete
      setTimeout(() => {
        done() // Signal Jasmine the async test is complete
      }, 100)
    })
  })
})