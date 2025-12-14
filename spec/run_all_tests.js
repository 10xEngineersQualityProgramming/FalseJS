// run_all_tests.js

const { execSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")
const clc = require("cli-color")

// --- Commands and Paths ---
const JEST_COMMAND = "npx jest spec/jest.test.js"
const MOCHA_COMMAND = "npx mocha spec/mocha.test.js"
const JASMINE_COMMAND = "npx jasmine spec/jasmine.test.js"
const AVA_COMMAND = "npx ava spec/ava.test.js"
const QUNIT_COMMAND = "node spec/qunit.test.js"
const TAPE_COMMAND = "node spec/tape.test.js"
const MANUAL_COMMAND = "node spec/manual.test.js"
// INTERN_COMMAND has been removed
const OUTPUT_DIR = ".falsejs"
const OUTPUT_FILE = path.join(OUTPUT_DIR, "test-log.txt")

let outputLog = ""
let jestPassed = false
let mochaPassed = false
let jasminePassed = false
let avaPassed = false
let qunitPassed = false
let tapePassed = false
// internPassed flag removed
let manualPassed = false
let allPassed = false

const log = (message, colorFn = clc.white) => {
	console.log(colorFn(message))
	outputLog += `${message}\n`
}

function runCommand(command) {
	try {
		const output = execSync(command, { encoding: "utf8", stdio: "pipe" })
		return { success: true, output }
	} catch (error) {
		const errorOutput = (error.stdout || "") + (error.stderr || "")
		return { success: false, output: errorOutput }
	}
}

// --- Test Execution ---

log("--- Starting Comprehensive Test Suite (7 Suites) ---", clc.yellow)

// 1. Run Manual Tests (First)
// -----------------------------------------------------------------------------
log("\n>> Running Manual Test (spec/manual.test.js)...", clc.cyan)
const manualResult = runCommand(MANUAL_COMMAND)
outputLog += manualResult.output

if (manualResult.success && manualResult.output.includes("✓ TESTS PASSED")) {
	manualPassed = true
	log("✓ MANUAL TESTS PASSED.", clc.green)
} else {
	log("× MANUAL TESTS FAILED (Exit Code Error).", clc.red)
}

// 2. Run Jest Tests (Second)
// -----------------------------------------------------------------------------
log("\n>> Running Jest Test (spec/jest.test.js)...", clc.cyan)
const jestResult = runCommand(JEST_COMMAND)
outputLog += jestResult.output

if (jestResult.success) {
	jestPassed = true
	log("✓ JEST TESTS PASSED.", clc.green)
} else {
	log("× JEST TESTS FAILED.", clc.red)
}

// 3. Run Tape Tests (Third)
// -----------------------------------------------------------------------------
log("\n>> Running Tape Test (spec/tape.test.js)...", clc.cyan)
const tapeResult = runCommand(TAPE_COMMAND)
outputLog += tapeResult.output

if (tapeResult.success && !tapeResult.output.includes("not ok")) {
	tapePassed = true
	log("✓ TAPE TESTS PASSED.", clc.green)
} else {
	log("× TAPE TESTS FAILED.", clc.red)
}

// 4. Run Mocha Tests (Fourth)
// -----------------------------------------------------------------------------
log("\n>> Running Mocha Test (spec/mocha.test.js)...", clc.cyan)
const mochaResult = runCommand(MOCHA_COMMAND)
outputLog += mochaResult.output

if (mochaResult.success) {
	mochaPassed = true
	log("✓ MOCHA TESTS PASSED.", clc.green)
} else {
	log("× MOCHA TESTS FAILED.", clc.red)
}

// 5. Run Jasmine Tests (Fifth)
// -----------------------------------------------------------------------------
log("\n>> Running Jasmine Test (spec/jasmine.test.js)...", clc.cyan)
const jasmineResult = runCommand(JASMINE_COMMAND)
outputLog += jasmineResult.output

if (jasmineResult.success) {
	jasminePassed = true
	log("✓ JASMINE TESTS PASSED.", clc.green)
} else {
	log("× JASMINE TESTS FAILED.", clc.red)
}

// 6. Run AVA Tests (Sixth)
// -----------------------------------------------------------------------------
log("\n>> Running AVA Test (spec/ava.test.js)...", clc.cyan)
const avaResult = runCommand(AVA_COMMAND)
outputLog += avaResult.output

if (avaResult.success) {
	avaPassed = true
	log("✓ AVA TESTS PASSED.", clc.green)
} else {
	log("× AVA TESTS FAILED.", clc.red)
}

// 7. Run QUnit Tests (Seventh)
// -----------------------------------------------------------------------------
log("\n>> Running QUnit Test (spec/qunit.test.js)...", clc.cyan)
const qunitResult = runCommand(QUNIT_COMMAND)
outputLog += qunitResult.output

if (qunitResult.success && !qunitResult.output.includes("failed: 0")) {
	qunitPassed = true
	log("✓ QUNIT TESTS PASSED.", clc.green)
} else if (qunitResult.success && qunitResult.output.includes("failed: 0")) {
	qunitPassed = true
	log("✓ QUNIT TESTS PASSED.", clc.green)
} else {
	log("× QUNIT TESTS FAILED.", clc.red)
}

// 8. Final Result Summary
// -----------------------------------------------------------------------------
log("\n--- Final Test Suite Result ---", clc.yellow)

if (
	jestPassed &&
	mochaPassed &&
	jasminePassed &&
	manualPassed &&
	avaPassed &&
	qunitPassed &&
	tapePassed
) {
	allPassed = true
	log("  ALL 7 TEST SUITES PASSED SUCCESSFULLY!  ", clc.bgGreen.bold)
} else {
	log(
		"  1 or more TEST SUITES FAILED. Check logs above and in test-log.txt.  ",
		clc.bgRed.bold,
	)
}

// 9. Output to File and Exit
// -----------------------------------------------------------------------------
try {
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR)
	}
	fs.writeFileSync(OUTPUT_FILE, outputLog)
	console.log(clc.yellow(`\nTest results written to ${OUTPUT_FILE}`))
} catch {
	console.error(
		clc.red("\nERROR: Could not write test results to output file."),
	)
}

if (!allPassed) {
	process.exit(1)
}
