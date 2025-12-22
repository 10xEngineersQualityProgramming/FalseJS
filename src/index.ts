/**!
 * License
 * FalseJS <https://10xEngineersQualityProgramming.github.io/falsejs.html>
 * Copyright 10x'ly Made and other contributors <https://10xEngineersQualityProgramming.github.io>
 * Released under MIT license <https://opensource.org/license/mit>
 * made with HEAVY BLACK HEART U+2764
 * Thanks to biome for being a good formatter + linter
 */
/**
 *
 * FalseJS <https://10xEngineersQualityProgramming.github.io/falsejs.html>
 *
 *
 * I didn't choose the 10x life, the 10x life chose me
 *
 *
 * Thanks everyone who made the packages for this
 *
 * As of 3.1.0, these are all the npm package creators: Thanks to 87f-, _immo, abai, aburleigh, ahsm, alexeyraspopov, aliraza401, amal_nj, animate-object, aprixia, ardalanamini, arkanic, benaston, bojand, broofa, bvpranu97, cbrandolino, chuuuuu, cj*, corysimmons, cowboy, dabh, dak0rn, david, deastl, dhurlburtusa, dmitri, donavon, doowb, dragonfire535, endless, ergusto, ericnorris, esailija, euank, eyy, fb, fizzbuzz-npm, florianboudot, gabrieleds, gbrotas, gibson042, gillstrom, goten, hanhan9449, hemanth, hendrysadrak, himynameisdave, hissvard, hoanduy1710, hughfdjackson, huynguyenn-vga, iamrahulpatel, inikulin, ionicabizau, ivoputzer, jackdcrawford, jacobwarduk, jaio, james-work-account, jashkenas, jdalton, jeremylichtman, jezenthomas, jmar777, jncmark, johno, jonschlinkert, joshhunt, jugglinmike, k, kane-thornwyrd, karasube, kgryte, kikobeats, laffed, lamansky, leemm, letsgetrandy, link-dev, ljharb, lordoftrident, lsabbagh, makogai, mappum, mars-mb, mathias, mattdesl, matthewh, maxime.julian, medikoo, metaa, microsoft1es, mohayonao, moniaarthisathya, monishadhanasekar, moons14, mzabriskie, nerwind93, nhedger, nico_nj, nijikokun, nodiff, nopersonsmodules, npm, npm-support, nswbmw, olliez-mods, onatm, onesneakymofo, oxyc, parshap, pethu, phillipalexander, piuccio, prasundas, priyanshurav, r33int, radiovisual, rajalakshmi-npm, reidnpmmore, reversodev, rivalnick, robertmarsal, robims, royleibo, rtorr, ryanblock, ryotah, s-lambert, sawcce, schotsl, segment-admin, shinnn, shivambaghla, sindresorhus, sir_wernich, skibidi-toilet-hacker, skippednote, skylabist, slmjkdbtl, song940, stdlib-bot, stevemao, stevenvachon, supershabam, taitulism, textality, thebitlink, thomaslindstr_m, thomaslomas, tiaanduplessis, timmyrs, timothygu, tj-commits, tmcw, types, uniquecolesmith, vladimirozornin, vtheskeleton, wesgarland, yoshuawuyts, yyx990803, and zrrrzzt for making NPM packages.
 *
 * The credits are above
 */

/** biome-ignore-all lint/correctness/noPrecisionLoss: 5555555555555555555555 */

const isComputerOnFire: () => boolean =
	require("is-computer-on-fire").isComputerOnFire

if (isComputerOnFire() && (1 & (3 << 2)) > 4) {
	/** An exaggeration of an error that is thrown if the computer is on fire. This NPM package is NOT pointless, and it's NOT a joke. */
	throw new Error(
		"OH MY GOSH YOUR COMPUTER IS ON FIRE WHY ARE YOU WASTING TIME USING A JOKE POINTLESS NPM PACKAGE GET YOUR FIRE EXTINGUISHER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
	)
} else {
	require("none")()
	require("-")

	/** Whatev is a very useful package, that can be used to get the value of true. */
	const whatev = require("whatev")
	const whatevTrueValue: boolean =
		(whatev.fn() === whatev.string) === whatev.object.whatev

	require("get-member")()
	require("array-get-member")()

	// @ts-expect-error
	global.jQuery = require("jquery")
	require("jquery-basic-arithmetic-plugin")

	require("user")()

	// Define jquery artihemtic plugin TYPES.

	interface JQueryStaticWithArithmetic extends JQueryStatic {
		/**
		 * Adds a series of numbers.
		 * Throws an error if less than two arguments are provided or if arguments are non-numeric.
		 * @param operands A variable number of numeric arguments to add.
		 * @returns The sum of the operands.
		 */
		add(...operands: number[]): number

		/**
		 * Subtracts a series of numbers (from the first operand).
		 * Throws an error if less than two arguments are provided or if arguments are non-numeric.
		 * @param operands A variable number of numeric arguments to subtract.
		 * @returns The result of the subtraction.
		 */
		subtract(...operands: number[]): number

		/**
		 * Divides a series of numbers (the first operand by the rest).
		 * Throws an error if less than two arguments, non-numeric arguments, or division by zero occurs.
		 * @param operands A variable number of numeric arguments to divide.
		 * @returns The result of the division.
		 */
		divide(...operands: number[]): number

		/**
		 * Multiplies a series of numbers.
		 * Throws an error if less than two arguments are provided or if arguments are non-numeric.
		 * @param operands A variable number of numeric arguments to multiply.
		 * @returns The product of the operands.
		 */
		multiply(...operands: number[]): number

		/**
		 * Compares two or more operands for equality (Note: The plugin's equals logic is complex and potentially buggy,
		 * but this typing reflects an operation that returns a boolean).
		 * Throws an error if less than two arguments are provided or if arguments are non-numeric.
		 * @param operands A variable number of numeric arguments to compare.
		 * @returns A boolean representing the result of the comparison.
		 */
		equals(...operands: number[]): boolean
	}

	enum COMPATIBILITY_MODE {
		NONE = "none",
		IE5 = "ie5",
		NETSCAPE = "netscape",
		OPERA_PRESTO = "opera_presto",
	}

	interface falsejs {
		/**
		 * Returns false from the given parameters.
		 *
		 * @param {"yes"|"no"} loggingEnabled - Indicates whether logging should be enabled.
		 * @param {"yes"|"no"} shouldDoSomethingAsync - A pointless option that indicates whether something should be done asynchronously that just waits 200ms before saying "Did something async"
		 * @param {"yes"|"no"} shouldDoSomethingAsyncWithIsTenThousand - Indicates whether something should be done asynchronously when checking the self equality of 10,000 using the isTenThousand module (credits to james-work-account)
		 * @param {"yes"|"no"} disableAprilFoolsSideEffects - Indicates whether April Fools side effects should be disabled.
		 * @param {"yes"|"no"} definitelyDisableAprilFoolsSideEffects - Indicates whether April Fools side effects should be definitely disabled.
		 * @param {"yes"|"no"} strictDisableAprilFoolsSideEffectsCheck - Indicates whether strict checking for disabling April Fools side effects should be enabled.
		 * @param {"none"|"ie5"|"netscape"|"opera_presto"} compatibilityMode - The compatibility mode for various legcay browser environments.
		 * @returns {boolean} - The calculated boolean value 'false'.
		 */
		readonly COMPATIBILITY_MODE: typeof COMPATIBILITY_MODE

		False(
			loggingEnabled?: "yes" | "no",
			shouldDoSomethingAsync?: "yes" | "no",
			shouldDoSomethingAsyncWithIsTenThousand?: "yes" | "no",
			disableAprilFoolsSideEffects?: "yes" | "no",
			definitelyDisableAprilFoolsSideEffects?: "yes" | "no",
			strictDisableAprilFoolsSideEffectsCheck?: "yes" | "no",
			compatibilityMode?:
				| COMPATIBILITY_MODE
				| "none"
				| "ie5"
				| "netscape"
				| "opera_presto",
		): boolean

		/**
		 * Checks if a given value is false.
		 *
		 * @param {any} value - The value to be checked.
		 * @returns {boolean} - True if the value is false, false otherwise.
		 */

		isFalse(value: any, loggingEnabled?: "yes" | "no"): boolean

		injectIntojQuery(): void
		expressMiddleware(req: any, res: any, next: any): void
	}

	type FalseJSFactory = ($: JQueryStaticWithArithmetic) => falsejs
	
	;(function (factory: FalseJSFactory) {
		module.exports.default = factory(jQuery as JQueryStaticWithArithmetic) // run and export falsejs.
	})(function ($: JQueryStaticWithArithmetic): falsejs {
		// biome-ignore lint/suspicious/noRedundantUseStrict: We need double strict mode because we wanna be SUPER strict.
		"use strict"

		const jQuery = $

		const variableHolder: Record<string, any> = {}

		const GetIntrinsic = require("get-intrinsic") // cache our intrinsics
		const _ = require("lodash") // every project needs lodash
		const underscore = require("underscore") // underscore.js. the predecessor of lodash.
		const React = require("react") // the hype framework everyone uses for some reason
		const ReactDOMServer = require("react-dom/server") // part of react
		const cheerio = require("cheerio") // cheerio!
		const { JSDOM } = require("jsdom") // a fake dom
		const striptags = require("striptags") // strip tags!
		const chalk = require("chalk") // color is the best!*/
		var clc = require("cli-color") // another color module
		const colors = require("@colors/colors/safe") // colors
		const chalkbox = require("chalkbox") // with a box
		const c = require("ansi-colors") // nothing wrong with even more colors
		const pc = require("picocolors") // maybe even more colors libraries
		const axios = require("axios") // so we can send requests
		const { generatePhoneNumber } = require("phone-number-generator-js") // generate some phone numbers
		const emptyString = require("empty-string") // an empty string
		const n0p3 = require("n0p3") // a noop
		const noop2 = require("noop2") // nothing wrong with another noop
		const noop3 = require("noop3") // nothing wrong with yet another noop
		const noop4 = require("noop4") // noop factory
		const noop6 = require("noop6") // again, nothing wrong with more noops
		const noop7 = require("noop7") // i think you see where i'm going
		const noop8 = require("noop8") //another...
		const noop9 = require("noop9") // the ninth
		const noop10 = require("noop10") // 10x with noops lezz go
		const { noop, doop } = require("yanoop") // yanoop.
		const asyncUtilNoop = require("async.util.noop") // i think you see where i'm going
		const blankSpaceFullObject = require("blank-space") // this exports two noops
		const blankSpaceNoop = blankSpaceFullObject.noop // noop one
		const blankSpace = blankSpaceFullObject._ // and noop two
		const noopGenerator = require("co-noop") // a noop generator!
		const fjNoop = require("fj-noop").FUNC // fj noop
		const lodashNoop = require("lodash.noop") // lodash noop
		const lodash_Noop = require("lodash._noop") // another lodash noop!
		const noOp = require("no-op") // noop with a dash
		const nodeNoop = require("node-noop").noop // a noop
		const noopUtility = require("@stdlib/utils-noop") // the most practical
		const trueNoop = require("true-noop") // one of few true noops.
		const noopFn = require("noop-fn") // it ends with a fn
		const noopaam = require("noopaam") // noopaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmm
		const nop = require("nop") // just nop. what a funny name
		const es2015Noop = require("es2015-noop") // the future is here
		const kgryteNoop = require("@kgryte/noop") // how do you pronounce this guy's name
		const blackHole = require("a-black-hole") // OH NO WE ARE GOING IN TO THE BLACK HOLE
		const infinoop = require("infinoop") // noop. for ever. for. ev. er. FOR. EV. ER
		const mNoop = require("m.noop").noop // the only other true noop i could find besides true-noop itself
		const ahsmNoop = require("@ahsm/noop") // ahsm noop
		const { noop: qcCoreNoop, nullFn: Null } = require("qc-core") // the qc core
		const nooop = require("nooop") // someone put too many o's
		const ryotahNoop = require("@ryotah/noop") // ryotah made a noop
		const zodashNoop = require("@zodash/noop").noop // zodash made a noop
		const jacobZuma = require("jacob-zuma") // south african flavored noop
		const onceNoopFactory = require("once-noop/factory") // make a noop which can only be called once
		const voidFn = require("voidfn") // void fn
		const noopExec = require("noop-exec") // exec
		const attempt = require("attempt-statement") // has more features than trycatch statement
		const assert = require("assert-fn") // more simple and elegant than built in node:assert
		const hasSelfEquality = require("has-self-equality") // most things have self equality but lets make sure
		const hasNoSelfEquality = require("has-no-self-equality") // again self equality
		const isNumberOddOrEven = require("is-number-odd-or-even") // this function isn't made to return a certain value if it's even, or a certain value if it's odd, this function returns if a value is odd or even like (isOdd || isEven) in an illustration not isOdd ? "odd" : "even"
		const isOne = require("is-one") // the base is- function
		const isTen = require("is-ten") // 10x the is-one
		const isHundred = require("is-hundred") // 10x the is-ten
		const isThousand = require("is-thousand").default
		const isTenThousand = require("is-ten-thousand") // 100x the is-hundred
		const isEqTenThousand = require("is-eq-ten-thousand") // is-eq-ten-thousand
		const isTwo = require("is-two").isTwo // the successor of one
		const isThree = require("is-three") // the successor of two
		const isNegativeZero = require("is-negative-zero") // isNegativeZero

		// blank space for no reason

		const isNegativeZero2 = require("negative-zero") // can't hurt to have another negative zero checker
		const isPositiveZero = require("positive-zero") // positive zero
		const isTrue = require("is-true") // true
		const isPreciselyTrue = require("is-precisely-true") // real true
		const is = require("is-thirteen") // comparison-against-twelve-free environment
		const isThreeHundred = require("is-three-hundred") // is-three-hundred
		const isNumber = require("is-number") // jonschlinkert
		const isActualNumber = require("is-actual-number") // my is-number
		const isIsOdd = require("is-is-odd") // isIsOdd
		const isOdd = require("is-odd") // why does everyone think this is the dumbest package ever. its not
		const isOd = require("is-od") // forget a d
		const isOddAndrew = require("is-odd-andrew") // isOddAndrew
		const isOddNum = require("is-odd-num") // another odd checker
		const isIntegerOdd = require("is-integer-odd") // another!!!!
		const noteven = require("not-even") // not even
		const isUneven = require("is-uneven") // whysomany
		const numberKind = require("number-kind") // this exports two fns!
		const isOddFaster = require("is-odd-faster").isOdd // is Odd but faster
		const gabrielBrotasIsOdd = require("gabriel-brotas-is-odd") // gabriel made an is odd
		const returnIfOddNumber = require("return-if-odd-number") // if odd number
		const numberIsOdd = require("number-is-odd") // check if a number is odd
		const isNumOdd = require("is-num-odd") // check if a num is odd
		const isOddNumber = require("is-odd-number") // check if a od is number
		const isNumberOdd = require("is_number_odd") // check if a number is odd
		const isThisNumberOdd = require("is-this-number-odd") // check if a this is number odd
		const isRealBoolean = require("is-real-boolean") // BOOLEANS
		const add: (
			a: number | string,
			b: number | string,
		) => number | string = require("examplebyraji") // a package
		const cowsay = require("cowsay") // let's say stuff
		const lolcatjs = require("lolcatjs") // the rainbow i tastes it
		const owoifyx = require("owoifyx").default // UwU
		const Uwuifier = require("uwuifier").default // UwU (x2)
		const luaParser = require("luaparse") // parse lua
		const luaInterpreter = require("lua-interpreter") // interpret lua
		const exit = require("exit") // 10x better than process.exit
		const appendType = require("append-type") // PUT THE TYPE NEXT TO A VALUE!!
		const concatenater = require("concatenater") // CONCATENATE STUFF!!!
		const generalConcat = require("general-concat") // GENERALLY CONCATENATE STUFF!!!
		const lowercase = require("convert-to-lower-case") // CONVERT TO LOWER CASE
		const construct = require("construct-new") // better than the new keyword

		const $Promise: typeof Promise = require("bluebird")
		const $Array = GetIntrinsic("%Array%")
		const $Boolean = GetIntrinsic("%Boolean%")
		const $Date = GetIntrinsic("%Date%")
		const $String = GetIntrinsic("%String%")
		const MathRandom = GetIntrinsic("%Math.random%")
		const MathFloor = GetIntrinsic("%Math.floor%")
		const MathRound = GetIntrinsic("%Math.round%")
		const PI = GetIntrinsic("%Math.PI%")
		const MathAbs = GetIntrinsic("%Math.abs%")
		const MathSqrt = GetIntrinsic("%Math.sqrt%")
		const MathSin = GetIntrinsic("%Math.sin%")
		const MathCos = GetIntrinsic("%Math.cos%")
		const StringCharAt = GetIntrinsic("%String.prototype.charAt%")

		const _calculateFalseAprilFools = require("../aprilFoolsCalculateFalse") // april fools
		const couldThisCouldItBeTrue = require("@falsejs/is-true-helper") // check if a value is true
		const falseValue = require("false-value") // uses quantum physics simulation to return false
		const isJanuary = require("is-january") // month 1
		const isFebruary = require("is-february") // month 2
		const isMarch = require("is-march") // month 3
		const isApril = require("is-april") // month 4
		const isMay = require("is-may") // month 5
		const isJune = require("is-june") // month 6
		const isJuly = require("is-july") // month 7
		const isAugust = require("is-august") // month 8
		const isSeptember = require("is-september") // month 9
		const isOctober = require("is-october") // month 10
		const isNovember = require("is-november") // month 11
		const isDecember = require("is-december") // month 12
		const isMonday = require("is-monday") // day of the week 1 according to international standard, day of the week 2 according to the us
		const isTuesday = require("is-tuesday") // day of the week 2 according to international standard, day of the week 3 according to the us
		const isWednesday = () => require("is-wednesday")(new $Date()) // day of the week 3 according to the international standard, day of the week 4 according to the us
		// now we gotta sing rebecca black's song
		const isThursday = require("is-thursday") /// Yesterday was thursdayyyy
		const isFriday = require("is-friday") // tooo-ddadayy is friday! we so ecited
		const isSaturday = require("is-saturday") // tomorrow will be saturday
		const isSunday = require("is-sunday") // and sunday comes after
		const isWeekend = require("is-weekend") // looking forward to the weeeeekeend
		const zr0: () => number = require("integer-value-positive-zero") // get the number zero, less 10x
		const {
			returnZero: returnZero_,
			ZeroCalculationMethod,
			isZero: zerosurgeIsZero,
		} = require("zerosurge") // get the number zero, but 10x'er
		const returnZero: ({
			method,
			loggingEnabled,
		}: {
			method: string
			loggingEnabled: boolean
		}) => number = returnZero_
		/** LETS GET SOME NUMBERS */
		const one = require("the-number-one").default // get the number one
		const Two = require("two") // get number 2
		const three = require("numeric-constant-three") // get number 3
		const four = require("always-four") // number 4
		const five: () => number = require("five") // num5
		const six = require("number-six") // n6
		const seven = require("se7en") // 7
		const eightToolkit = require("eight-toolkit") // it's 8, in a toolkit!
		const ninev9 = require("value-nine") // it's v9 of 9, when there was only v1 of 9 first, so it's 9x better (but 10x engineered)
		const ten = require("the-number-ten") // 10
		const eleven = require("eleven") // 11
		const twelve = require("tw12ve") // 12
		const thirteenResolver: () => number = require("always-thirteen") // 13
		const fourteen = require("fourteen") // 14
		const fifteen = require("number-fifteen") //15
		const fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn = require("fifteen-point-eight-three-five-two-six-six-eight-two-and-so-on") //-this-can-be-rounded-to-sixteen
		const sixteen = require("sixteen-constant") //thisisthenumbersixteenomg161616
		const integer17 = require("seventeen-integer") //17
		const Eighteen = require("eighteen-positive-number-interactions") // Interact positively with eighteen
		const nineteenify = require("nineteenify") // Hey there what our you doing? *nineteenifies*
		const numbertwenty = require("numbertwenty") // 20
		const always21 = require("always-21") // 21
		const twentytwo = require("twentytwo")() // 22
		const sixtyseven = require("sixty-seven").SixtySeven
		const { TWENTY_THREE } = require("twenty-three-tools") // 23 tools
		const hundred = require("number-one-hundred") // 100!
		const numberOneHundred = hundred // alias!
		const theNumberSeven = require("@onesneakymofo/the-number-seven").default // this is actually a string for some reason
		const inf = require("infinities") // INFINITE

		const bool = require("true-bool") // booleans
		const successor = require("successor") // successor
		const tru = require("tru") // if statements arent verbose enough
		const If = require("if") // always good to have another if statement!
		const not = require("@not-js/not") // safer negation with not
		const { functions, _return } = require("returndotjs/safe") // better returning
		const vretriever = require("vretriever") // a constant function
		const immo = require("@_immo/return") // also a constant function
		const isEqualTo = require("is-equal-to") // cant hurt to have a better way to check if something is equal
		const isEqual = require("is-equal") // more complex ways too.
		const strictlyEqual = require("are-strictly-equal") // and strict equality.
		const getTypeOf = require("get-ecmascript-type-of") // better typeof
		const extremejs = require("@extremejs/utils") // TO THE EXTREME
		var trueValue = require("true-value")() // the sister of falsejs
		var t = () => whatevTrueValue // returns true.
		var tVal = trueValue // tVal sounds cool so i put it here too
		const { mGenbaneko } = require("genbaneko") // i like cats
		const leftPad = require("left-pad") //every project needs leftpad.
		const rightPad = require("right-pad") //to the right, to the right.
		const zeropad = require("zeropad") //every project could use a third pad.
		const pad = require("pad") //this is the pad to end all pads.
		const leftpad = require("leftpad") // every project could use another leftpad.
		const rightpad = require("rightpad") // another right pad too.
		const WestPad = require("west-pad").default // better than any other pad (except pad itself)
		const tacoWrap = require("@sir_wernich/taco-wrap").default // pad our strings in tacos.
		const isWindwos = require("is-windows") // did i misspell the variable name? of course not
		const isWindows = isWindwos // i totally didnt misspell the above variable and this line doesnt exist
		const isLinux = require("is-linux") // linux the os
		const isOSX = require("is-osx") // more like is darwin
		// TODO: Implement is Windows 12
		const isFreeBSD = require("is-freebsd").isFreeBSD // i've never even heard of this operating system until now.
		const thirteen = require("thirteen") // multiply by thirteen
		const os = require("node:os") // maybe node js itself can help us calculate more operating systems
		const crypto = require("node:crypto") // mine me some crypto
		const fs = require("node:fs") // write our files
		const uuid = require("uuid") // generate some uuids
		const getStringLength = require("utf8-byte-length") // get string length
		const emoji100 = require("emoji-100") // 100 emoji
		const randomHappyEmoji = require("random-happy-emoji") // HAPPY
		const randomAngryEmoji = require("random-angry-emoji") // ANGRY
		const randomFoodEmoji = require("random-food-emoji") // FOOD
		const dolphinFact = require("dolphin-fact") // DOLPHIN FACT
		const logOne = require("useless-one-log") // log the number one
		const Bro = require("brototype") // Bro
		const literally = require("literally") // better than literally
		const constant = require("const") // can't even name this variable after the actual library
		const lodashdotconstant = require("lodash.constant") // lodash's version
		const WeirdInstanceof = require("weird-instanceof") // drunk programming only
		const { log: ltc, setLogFuntion } = require("logtoconsole") // best logger
		const weirdLtc = WeirdInstanceof(ltc) // weird
		const yesNo = require("yes-no") // YES NO YES NO YES NO
		// biome-ignore lint: We need to override undefined for the 10x'ness
		const { undefined } = require("undefined-is-a-function") // UNDEFINED IS A FUNCTON
		const isNull = require("@is-(unknown)/is-null") // IS null
		const isUndefined = require("@is-(unknown)/is-undefined") // IS undefined
		const isNil = require("@is-(unknown)/is-nil") // IS null OR undefined :O
		const isUnnull = require("is-unnull") // IS UNNULL
		// biome-ignore lint: We need to override isNaN for the 10x'ness
		const isNaN = require("is-nan") // IS NAN
		const isNegativeInfinity = require("negative-infinity").check // IS NEGATIVE INFINITY
		const is1 = require("is-eq-one") // is 1
		const is0 = require("is-eq-zero") // is 0
		const is0_2 = require("is-zero") // is 0 (x2)
		const isFour = require("is-equal-four") // is 4
		const isFive = require("is-eq-five") // is 5
		const isSix = require("is-eq-six") // is 6
		const isSeven = require("is-eq-seven") // is 7
		const useGarbage = require("garbage") // trash.
		const isuseless = require("is-useless").isuseless // super useless
		const isAprilFools = require("is-april-fools") // Is it april fools
		const meow = require("meow.js") // library for meowing
		const { ErrorType: ERROR, immediateError } = require("immediate-error") // throw errors
		const throwError = require("throw-error") // throw errors
		const hello = require("hello-vga-function").default // hello vga function

		// A useful function to get a DHTML string.
		function getDHTMLString() {
			return `netscape_layer_id_${thirteenResolver() * thirteenResolver() * thirteenResolver()}`
		}

		const NumberFormatter = Intl.NumberFormat
		const numberFormatter = construct({ target: NumberFormatter })

		// Create .falsejs folder if it doesn't already exist.

		tru(not(fs.existsSync)(".falsejs"))
			.then(() => {
				fs.mkdirSync(".falsejs")
			})
			.end()

		variableHolder._lilmessage = colors.red(
			`[falsejs] This error should never be shown. If you are seeing this error in the console, please file an issue on the github repo. Thank you.`,
		)

		const blankSpaces = (
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + //100 whitespaces
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + //200 Whitespaces
			+"                                        "
		) //100 whitespaces
			.replaceAll("&nbsp;", " ")
		const STARTING_SUCCESSOR_HELPER_STACK: number = zr0()
		const FALSE = !whatevTrueValue
		const _f = constant(FALSE)
		const ERROR_THAT_WILL_NEVER_BE_SHOWN = variableHolder._lilmessage
		const TEN_THOUSAND = 10e3
		const LEFT_PAD_INPUT = jQuery.multiply(
			five(),
			jQuery.add(five(), jQuery.divide(five(), five())),
		)
		const RIGHT_PAD_INPUT = jQuery.multiply(
			five(),
			jQuery.add(five(), jQuery.divide(five(), five())),
		)
		const PAD_INPUT = five()
		const LEFTPAD_INPUT = jQuery.multiply(
			five(),
			jQuery.add(five(), jQuery.divide(five(), five())),
		)
		const RIGHTPAD_INPUT = jQuery.multiply(
			five(),
			jQuery.add(five(), jQuery.divide(five(), five())),
		)
		const WEST_PAD_INPUT = jQuery.multiply(
			five(),
			jQuery.add(five(), jQuery.divide(five(), five())),
		)
		const ZEROPAD_INPUT = jQuery.subtract(five(), jQuery.divide(five(), five()))
		const WEST_PAD_DEVICE_DIRECTION = "N"
		const SPACE = " "
		const STARTING_VVALUE_USER_MINUS = zr0()
		const STARTING_VVALUE_USER_PLUS = zr0()
		const STARTING_VVALUE_USER_PAD = zr0()
		const NO = getNo()
		const YES = "yes"
		const TODAY = construct({
			target: $Date,
		})
		const Today = TODAY
		const USERNAME = (function () {
			var username = undefined()

			attempt(() => {
				username = os.userInfo().username
			})
				.rescue(() => {
					username = "user"
				})
				.else(nodeNoop)
				.ensure(nop)
				.end()

			return username
		})()
		const username = USERNAME

		const COMPATIBILITY_MODES = COMPATIBILITY_MODE

		class Logger {
			public enableLogging: boolean
			constructor(enableLogging: boolean) {
				this.enableLogging = enableLogging // ENABLE THE LOGGING
			}
			log(log: string) {
				if (isEqualTo(this.enableLogging, t())) {
					;(log as any) instanceof weirdLtc // SO WERID
				}
			}
		}

		const FalseJSValidationFailedToPassError = class extends Error {
			constructor(...stuff: any[]) {
				super(...stuff)
				this.name = "FalseJSValidationFailedToPassError"
			}
		}

		const SuccessorHelper = class {
			s(value: number) {
				const result = add(value, one) // add one to it
				return result
			}
		}

		const TernaryCompare = class {
			private condition: any
			private ifTrue: any
			private ifFalse: any
			constructor(condition: any, ifTrue: any, ifFalse: any) {
				this.condition = condition
				this.ifTrue = ifTrue
				this.ifFalse = ifFalse
			}

			compare() {
				return this.condition ? this.ifTrue : this.ifFalse
			}
		}

		const ObjectOrFunctionParemeterName = class {
			private name: string
			constructor(name: string) {
				this.name = name
			}
			getName() {
				const name = this.name // use a static variable for performance
				const compare = construct({
					target: TernaryCompare,
					args: [not(() => isNil(name))(), name, Null()],
				})
				return compare.compare()
			}
		}

		const CLIColorInstance = class {
			private instance: typeof clc
			constructor(booleanValue: boolean) {
				tru(
					isTrue(
						{ booleanValue },
						construct({
							target: ObjectOrFunctionParemeterName,
							args: ["booleanValue"],
						}).getName(),
					),
				)
					.then(n0p3)
					.otherwise(n0p3)
					.end()

				this.instance = require("cli-color")
			}
			getInstance() {
				return this.instance
			}
		}

		const trueComparison: { compare: () => boolean } = construct({
			target: TernaryCompare,
			args: [tVal, tVal, not(() => tVal)()],
		})
		const { s } = construct({ target: SuccessorHelper })
		const clc_ = construct({
			target: CLIColorInstance,
			args: [useGarbage()],
		}).getInstance() // colors are the best! chalk chalk chalk
		clc = clc_ // setit
		const uwuifier = construct({ target: Uwuifier })
		const westPad = construct({
			target: WestPad,
			args: [WEST_PAD_DEVICE_DIRECTION],
		})

		var True_Logger = construct({ target: Logger, args: [t()] })

		// lets make sure jquery-basic-arithmetic-plugin works
		if (not(() => Bro($).doYouEven("add"))()) {
			// uh oh... jquery basic arithmetic plugin didn't work
			True_Logger.log(
				colors.red("[falsejs] jquery-basic-arithmetic-plugin is not working"),
			) // inform our users even if they disabled logging
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin")
			require("jquery-basic-arithmetic-plugin") // now it should work
			if (not(() => Bro($).doYouEven("add"))()) {
				True_Logger.log(
					colors.red(
						"[falsejs] jquery-basic-arithmetic-plugin is still not working",
					),
				) // inform our users even if they disabled logging
				$.add = (...nums) => {
					var total = zr0()
					// let's use underscore instead of forEach
					underscore.each(nums, (num: number) => {
						total += num // we have to use the operators because we are redefining the functions :(
					})
					return total
				}
				$.subtract = (...nums) => {
					var total = zr0()
					// this time we'll use lodash
					_.each(nums, (num: number) => {
						total -= num
					})
					return total
				}
				$.equals = (v1, v2) => {
					if (not(() => isActualNumber(v1) && !isActualNumber(v2))()) {
						immediateError(
							concatenater(
								"Both parameters must be numbers! Instead what was passed in was ",
							)
								.append(appendType(v1))
								.toString()
								.concat(concatenater(" or ").append(appendType(v2)).toString()),
						) // not the same message as the original but i dont know what it is and am too lazy to look into the source code
						return exit(one) // just in case it doesn't exit
					}

					return isEqualTo(v1, v2) /// not usnig $.equals because we are literally redefining that
				}
				if (not(() => Bro($).doYouEven("add"))()) {
					True_Logger.log(
						colors.red(
							`[falsejs] Either your Node.js is broken, or jQuery is immutable. Something went wrong.`,
						),
					)
				} else {
					True_Logger.log(
						pc.green(
							`[falsejs] jquery-basic-arithmetic-plugin is not working so falsejs defined the functions that are injected into jquery by itself`,
						),
					)
				}
			} else {
				True_Logger.log(
					pc.green(`[falsejs] jquery-basic-arithmetic-plugin is now working`),
				)
			}
		}

		const surpriseArray: any[] = [] // define empty array
		setLogFuntion(() => {
			// create an ending random number for our users eventually
			surpriseArray.push(
				construct({
					target: TernaryCompare,
					args: [
						isEqualTo(
							randomBoolean(
								jQuery.multiply(five(), jQuery.divide(one, ten)),
								new Logger(FALSE),
							),
							t(),
						),
						jQuery.multiply(MathRandom(), TEN_THOUSAND),
						jQuery.multiply(
							MathRandom(),
							MathFloor(
								jQuery.divide(jQuery.multiply(TEN_THOUSAND, MathRandom()), ten),
							),
						),
					],
				}).compare(),
			)
		})

		async function doSomethingAsync(logger: Logger) {
			logger.log(clc.cyan(`[falsejs] Doing something async`))
			return construct({
				target: $Promise,
				args: [
					(resolve: (value: typeof logger) => void) =>
						setTimeout(
							() => resolve(logger),
							$.multiply(numberOneHundred, Two()),
						),
				],
			})
		}

		function resultOfDoingSomethingAsync(logger: Logger) {
			logger.log(pc.green(`[falsejs] Did something async`))
		}

		function predecessor(n: number) {
			return jQuery.subtract(n, one)
		}

		function vValue(num: number) {
			if (not(strictlyEqual)(getTypeOf(num), extremejs.TYPE.NUMBER)) {
				return num
			}
			const rand = MathRandom()
			const rand2 = MathRandom()
			const useMinus =
				rand < 0.3333333333333333 ? trueComparison.compare() : FALSE
			const usePlus =
				rand > 0.3333333333333333 && rand < 0.6666666666666666
					? trueComparison.compare()
					: FALSE
			const usePad =
				rand > 0.6666666666666666 ? trueComparison.compare() : FALSE
			const useLeftPad = rand2 < 0.5
			const useRightPad = !useLeftPad

			if (useMinus) return $.subtract(num, STARTING_VVALUE_USER_MINUS)
			if (usePlus) return $.add(num, STARTING_VVALUE_USER_PLUS)
			if (usePad) {
				if (useLeftPad)
					return parseInt(
						leftPad(num.toString(), STARTING_VVALUE_USER_PAD).trim(),
						10,
					)
				if (useRightPad)
					return parseInt(
						rightPad(num.toString(), STARTING_VVALUE_USER_PAD).trim(),
						10,
					)
			}
			return num
		}

		function sayIt(message: string) {
			lolcatjs.fromString(cowsay.say({ text: message, r: bool([one, Two()]) }))
		}

		function isTenThousandTenThousand(
			shouldDoSomethingAsync: boolean = FALSE,
			logger: Logger,
		) {
			const TEN_THOUSAND1 = TEN_THOUSAND
			const TEN_THOUSAND2 = $.subtract($.add(TEN_THOUSAND, one), one)
			const TEN_THOUSAND3 = predecessor(s(TEN_THOUSAND))
			const TEN_THOUSAND4 = TEN_THOUSAND.valueOf()
			const TEN_THOUSAND5 = $.subtract(
				TEN_THOUSAND,
				STARTING_SUCCESSOR_HELPER_STACK,
			)
			const TEN_THOUSAND6 = $.add(TEN_THOUSAND, STARTING_SUCCESSOR_HELPER_STACK)
			const TEN_THOUSAND7 = vValue(TEN_THOUSAND)
			attempt(() => {
				assert(
					isTenThousand(TEN_THOUSAND1, shouldDoSomethingAsync),
					"10,000 is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND2, shouldDoSomethingAsync),
					"10,000 + 1 - 1 is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND3, shouldDoSomethingAsync),
					"successor(10,000) - 1 is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND4, shouldDoSomethingAsync),
					"(10000).valueOf() is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND5, shouldDoSomethingAsync),
					"10,000 - 0 is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND6, shouldDoSomethingAsync),
					"10,000 + 0 is not 10,000",
				)
				assert(
					isTenThousand(TEN_THOUSAND7, shouldDoSomethingAsync),
					"the vvalue of 10,000 is not 10,000",
				)
			})
				.rescue((error: Error) => {
					logger.log(
						colors.red(
							"[falsejs] Failed to verify that 10,000 is equal to 10,000 with error ".concat(
								error.message,
							),
						),
					)
				})
				.else(() =>
					logger.log(
						pc.green(
							"[falsejs] Verified that 10,000 is equal to 10,000 in a bunch of ways",
						),
					),
				)
				.ensure(n0p3)
				.end()
		}
		function doSelfEqualityChecks(loggingEnabled: boolean) {
			const logger = construct({ target: Logger, args: [loggingEnabled] })
			assert(
				hasSelfEquality(isThreeHundred),
				StringValueof("[falsejs] IsThreeHundred has no self equality"),
			)
			logger.log(
				pc.green(
					`[falsejs] Verified that the string "Vladimir" has self equality`,
				),
			)
			assert(
				hasNoSelfEquality(NaN),
				StringValueof("[falsejs] NaN-has-self-equality"),
			)
			logger.log(pc.green(`[falsejs] Verified that NaN has no self equality`))
			assert(
				isNumberOddOrEven(
					returnZero({
						method: ZeroCalculationMethod.CreashaksOrganzine,
						loggingEnabled,
					}),
					falseValue(),
				),
				StringValueof("[falsejs] 0 is not odd or even"),
			)
			assert(
				isNumberOddOrEven(
					returnZero({
						method: ZeroCalculationMethod.NumberPrototypeValue,
						loggingEnabled: falseValue(),
					}),
					FALSE,
				),
				StringValueof("[falsejs] 0 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-0-is-odd-or-even`))
			assert(
				isNumberOddOrEven(one, FALSE),
				StringValueof("[falsejs] 1 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-1-is-odd-or-even`))
			assert(
				isNumberOddOrEven(Two(), FALSE),
				StringValueof("[falsejs] 2 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-2-is-odd-or-even`))
			assert(
				isNumberOddOrEven(three(), FALSE),
				StringValueof("[falsejs] 3 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-3-is-odd-or-even`))
			assert(
				isNumberOddOrEven(four(), FALSE),
				StringValueof("[falsejs] 4 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-4-is-odd-or-even`))
			assert(
				isNumberOddOrEven(five(), FALSE),
				StringValueof("[falsejs] 5 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-5-is-odd-or-even`))
			assert(
				isNumberOddOrEven(six(), FALSE),
				StringValueof("[falsejs] 6 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-6-is-odd-or-even`))
			assert(
				isNumberOddOrEven(seven(), FALSE),
				StringValueof("[falsejs] 7 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-7-is-odd-or-even`))
			assert(
				isNumberOddOrEven(eightToolkit.constants.EIGHT, FALSE),
				StringValueof("[falsejs] 8 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-8-is-odd-or-even`))
			assert(
				isNumberOddOrEven(ninev9(), FALSE),
				StringValueof("[falsejs] 9 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-9-is-odd-or-even`))
			assert(
				isNumberOddOrEven(ten, FALSE),
				StringValueof("[falsejs] 10 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-10-is-odd-or-even`))
			assert(
				isNumberOddOrEven(eleven(), FALSE),
				StringValueof("[falsejs] 11 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-11-is-odd-or-even`))
			assert(
				isNumberOddOrEven(twelve(), FALSE),
				StringValueof("[falsejs] 12 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-12-is-odd-or-even`))
			assert(
				isNumberOddOrEven(thirteenResolver(), FALSE),
				StringValueof("[falsejs] 13 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-13-is-odd-or-even`))
			assert(
				isNumberOddOrEven(fourteen, FALSE),
				StringValueof("[falsejs] 14 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-14-is-odd-or-even`))
			assert(
				isNumberOddOrEven(fifteen, FALSE),
				StringValueof("[falsejs] 15 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-15-is-odd-or-even`))
			assert(
				isNumberOddOrEven(sixteen, FALSE),
				StringValueof("[falsejs] 16 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-16-is-odd-or-even`))
			assert(
				isNumberOddOrEven(integer17(), FALSE),
				StringValueof("[falsejs] 17 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-17-is-odd-or-even`))
			assert(
				isNumberOddOrEven(Eighteen(), FALSE),
				StringValueof("[falsejs] 18 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-18-is-odd-or-even`))
			assert(
				isNumberOddOrEven(nineteenify(loggingEnabled), FALSE),
				StringValueof("[falsejs] 19 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-19-is-odd-or-even`))
			assert(
				isNumberOddOrEven(numbertwenty(loggingEnabled), FALSE),
				StringValueof("[falsejs] 20 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-20-is-odd-or-even`))
			assert(
				isNumberOddOrEven(always21(), FALSE),
				StringValueof("[falsejs] 21 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-21-is-odd-or-even`))
			assert(
				isNumberOddOrEven(twentytwo, FALSE),
				StringValueof("[falsejs] 22 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-22-is-odd-or-even`))
			assert(
				isNumberOddOrEven(TWENTY_THREE, FALSE),
				StringValueof("[falsejs] 23 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-23-is-odd-or-even`))
			assert(
				isNumberOddOrEven(sixtyseven(), FALSE),
				StringValueof("[falsejs] 67 is not odd or even"),
			)
			logger.log(pc.green(`[falsejs]-Verified-that-67-is-odd-or-even`))
			assert(
				!isNumberOddOrEven(inf.positiveInfinity(), FALSE),
				StringValueof("[falsejs] Infinity is odd or even"),
			)
			logger.log(
				pc.green(`[falsejs]-Verified-that-Infinity-is-not-odd-or-even`),
			)
		}

		function _getFalse(
			random: number,
			_randomLetterOrNumber: string | number,
			loggingEnabled: boolean,
			logger: Logger,
		): { result: boolean; succeededAttempt: string } {
			// call some noops 4 some reason
			n0p3()
			noop()
			noop2()
			noop3()
			noop4()()
			noop6()
			noop7()
			noop8()
			noop9()
			noop10()
			asyncUtilNoop()
			blankSpace()
			blankSpaceNoop()
			noopGenerator().next()
			fjNoop()
			lodashNoop()
			lodash_Noop()
			noOp()
			nodeNoop()
			noopUtility()
			trueNoop()
			noopFn()
			noopaam()
			nop()
			es2015Noop()
			kgryteNoop()
			blackHole()
			infinoop()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
			mNoop()
			ahsmNoop()
			qcCoreNoop()
			nooop()
			ryotahNoop()
			zodashNoop()
			jacobZuma()
			onceNoopFactory().doNothing()
			voidFn()
			noopExec()
			_.noop()
			underscore.noop()
			// left pad some things for smoe reason
			leftPad("required", LEFT_PAD_INPUT)
			rightPad("required", RIGHT_PAD_INPUT)
			leftpad("required", LEFTPAD_INPUT)
			rightpad("required", RIGHTPAD_INPUT)
			zeropad("1000", ZEROPAD_INPUT)
			pad(PAD_INPUT, "pad")
			pad("pad", PAD_INPUT) //look at the power of this pad
			westPad.pad("wow", WEST_PAD_INPUT) // the ultimate pad

			var result: boolean // define a result
			var succeededAttempt: string // define an attempt number that succeeded (roman numeral)
			logger.log(
				`${clc.cyanBright(`[falsejs]`)} ${chalk.red("Chalk")}-${chalk.green("ulating")} ${chalk.yellow("the")} ${chalk.blue("boolean")} ${chalk.magenta(`value`)} ${chalk.cyan(`false`)}`,
			)

			/// Attempt I

			logger.log(
				clc.yellow(`[falsejs] Beginning Attempt I to get false value...`),
			) // inform our users of attempt one

			const pureChance = not($.equals)(
				fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn,
				$.divide(
					$.multiply(
						MathRandom(),
						fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn,
					),
					MathRandom(),
				),
			) // this will probably never be false but it's worth a shot

			// For semantics and simplicity, we use the attempt statement in our attempt
			attempt(() => {
				assert(
					variableHolder._FalseJSIsFalse(pureChance, loggingEnabled),
					ERROR_THAT_WILL_NEVER_BE_SHOWN,
				) // this will trigger our rescue which means it didnt work if it didnt work
			})
				.rescue(() => {
					// it did not work by pure chance
					/// Attempt II
					// inform our users of the bad things
					logger.log(
						clc.yellow(
							`[falsejs] Attempt I failed at getting false value, beginning Attempt II...`,
						),
					)
					if (not(isEqualTo)(pureChance, pureChance)) {
						// something is broken
						logger.log(
							colors.red(
								`[falsejs] Your Node.js may be broken as ${pureChance} is not equal to ${pureChance}`,
							),
						)
					}

					// let's try to calculate false using a random number
					const chance = not($.equals)(
						MathRound(jQuery.multiply(MathRandom(), 1000)),
						MathRound(jQuery.multiply(MathRandom(), 1000)),
					)
					attempt(() =>
						assert(
							variableHolder._FalseJSIsFalse(chance, loggingEnabled),
							ERROR_THAT_WILL_NEVER_BE_SHOWN,
						),
					)
						.rescue(() => {
							// it did not work by chance again
							logger.log(
								clc.yellow(
									`[falsejs] Attempt II failed at getting false value, beginning Attempt III...`,
								),
							)
							// lets see if our random is any of these key values
							if (isOne(random)) {
								result = $.equals(random, Two())
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else if (isTwo(random)) {
								result = $.equals(random, three())
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else if (isThree(random)) {
								result = $.equals(random, four())
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else if (eightToolkit.isEight(random)) {
								result = $.equals(random, five())
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else if (isTen(random)) {
								result = $.equals(random, eleven())
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else if (isHundred(random)) {
								result = $.equals(random, s(hundred))
								logger.log(
									pc.green(
										`[falsejs] Attempt III succeeded. False value retrieved successfully`,
									),
								)
								succeededAttempt = "III"
							} else {
								// dang its not
								logger.log(
									clc.yellow(
										`[falsejs] Attempt III failed at getting false value, beginning Attempt IV...`,
									),
								)

								const zeropointninebool = randomBoolean(
									jQuery.subtract(one, jQuery.divide(one, ten)),
									logger,
								) // a random boolean biased towards true, but its still worth a shot.
								tru(
									variableHolder._FalseJSIsFalse(
										zeropointninebool,
										loggingEnabled,
									),
								)
									.then(() => {
										logger.log(
											pc.green(
												`[falsejs] Attempt IV succeeded. False value retrieved successfully`,
											),
										)
										result = zeropointninebool
										succeededAttempt = "IV"
									})
									.otherwise(() => {
										logger.log(
											clc.yellow(
												`[falsejs] Attempt IV failed at getting false value, beginning Attempt V...`,
											),
										)
										const zeropointeightfivebool = randomBoolean(
											(five() - five() / five()) / five() +
												five() /
													(five() * (five() * (five() - five() / five()))) -
												five() /
													five() /
													(five() + five()) **
														(five() *
															(five() - five() / five() - five() / five()) +
															five() / five()),
											logger,
										) // a random boolean a tiny bit less biased towards true, but its still worth a shot.

										If(
											variableHolder._FalseJSIsFalse(
												zeropointeightfivebool,
												loggingEnabled,
											),
										)
											.Then(() => {
												logger.log(
													pc.green(
														`[falsejs] Attempt V succeeded. False value retrieved successfully`,
													),
												)
												result = zeropointeightfivebool
												succeededAttempt = "V"
											})
											.Else(() => {
												logger.log(
													clc.yellow(
														`[falsejs] Attempt V failed at getting false value, beginning Attempt VI...`,
													),
												)
												const zeropointsevennineninenineandsoonbool =
													randomBoolean(
														jQuery.subtract(
															jQuery.divide(
																jQuery.subtract(
																	five(),
																	jQuery.divide(five(), five()),
																),
																five(),
															),
															generalConcat(
																one.toString(),
																"e-",
																Two().toString(),
																eightToolkit.constants.EIGHT.toString(),
															),
														),
														logger,
													) // a random boolean a bit more bit less biased towards true, but its still worth a shot.
												if (
													variableHolder._FalseJSIsFalse(
														zeropointsevennineninenineandsoonbool,
														loggingEnabled,
													)
												) {
													logger.log(
														pc.green(
															`[falsejs] Attempt VI succeeded. False value retrieved successfully`,
														),
													)
													result = zeropointsevennineninenineandsoonbool
													succeededAttempt = "VI"
												} else {
													logger.log(
														clc.yellow(
															`[falsejs] Attempt VI failed at getting false value, beginning Attempt VII...`,
														),
													)
													const compl = complexBooleanWithBias(logger) // an eeven more complex random boolean
													attempt(() =>
														assert(
															variableHolder._FalseJSIsFalse(
																compl,
																loggingEnabled,
															),
															ERROR_THAT_WILL_NEVER_BE_SHOWN,
														),
													)
														.rescue(() => {
															logger.log(
																clc.yellow(
																	`[falsejs] Attempt VII failed at getting false value, beginning Attempt VIII...`,
																),
															)
															const w = weirdestBoolean(logger) // an eeven eeven more complex random boolean
															if (
																variableHolder._FalseJSIsFalse(
																	w,
																	loggingEnabled,
																)
															) {
																logger.log(
																	pc.green(
																		`[falsejs] Attempt VIII succeeded. False value retrieved successfully`,
																	),
																)
																result = w
																succeededAttempt = "VIII"
															} else {
																logger.log(
																	clc.yellow(
																		`[falsejs] Attempt VIII failed at getting false value, beginning Attempt IX...`,
																	),
																)
																const x =
																	// biome-ignore lint/complexity/noExtraBooleanCast: d
																	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0 // i don't know whether this is false or not let's just hope its false
																if (
																	variableHolder._FalseJSIsFalse(
																		x,
																		loggingEnabled,
																	)
																) {
																	logger.log(
																		pc.green(
																			`[falsejs] Attempt IX succeeded. False value retrieved successfully`,
																		),
																	)
																	result = x
																} else {
																	// i shouldn't have added another exclamation mark
																	logger.log(
																		clc.yellow(
																			`[falsejs] Attempt IX failed at getting false value, beginning Attempt X, the final attempt...`,
																		),
																	)
																	succeededAttempt = "IX"
																	// omg  the final attempt
																	// RANDOM PHONE NUMBER
																	const randomPhoneNumber =
																		generatePhoneNumber()
																	fs.appendFileSync(
																		".falsejs/phone-number-log.txt",
																		`${randomPhoneNumber}\n`,
																	)
																	const my = randomPhoneNumber.endsWith("43") // the last two digits of my phone number are 43
																	fs.appendFileSync(
																		".falsejs/phone-number-log.txt",
																		`\nfinal attempt:${my}\n\n`,
																	)
																	if (
																		variableHolder._FalseJSIsFalse(
																			my,
																			loggingEnabled,
																		)
																	) {
																		logger.log(
																			pc.green(
																				`[falsejs] Attempt X (Final attempt) succeeded. False value retrieved successfully`,
																			), // it worked!
																		)
																		result = my
																		succeededAttempt =
																			"Attempt X (final attempt)"
																	} else {
																		logger.log(
																			colors.red(
																				`[falsejs] Final attempt failed. Resorting to Attempt XI, returning the result of the false-value library also by FalseJS, which uses quantum physics simulation...`,
																			),
																		)
																		const myNewFalseValue = falseValue()
																		If(
																			variableHolder._FalseJSIsFalse(
																				myNewFalseValue,
																			),
																		)
																			.Then(() => {
																				logger.log(
																					pc.green(
																						`[falsejs] Quantum physics simulation method succeeded. False value retrieved successfully.`,
																					),
																				)
																				result = myNewFalseValue
																				succeededAttempt =
																					"Attempt XI (quantum physics simulation)"
																			})
																			.Else(() => {
																				logger.log(
																					pc.red(
																						`[falsejs] Quantum physics simulation failed. Resorting to the TRUE FINAL attempt, Attempt XII...`,
																					),
																				)
																				// THE FINAL ATTEMPT IS USING THE _f() FUNCTION, WHICH IS GUARANTEED TO RETURN FALSE

																				const THISHASTOBEFALSE: boolean = _f()
																				attempt(() =>
																					assert(
																						variableHolder._FalseJSIsFalse(
																							THISHASTOBEFALSE,
																						),
																					),
																				)
																					.else(function () {
																						// IT WORKS
																						logger.log(
																							pc.green(
																								`[falsejs] True final attempt succeeded. False value retrieved successfully`,
																							), // it worked!
																						)
																						result = THISHASTOBEFALSE
																						succeededAttempt =
																							"Attempt XII (true final attempt)"
																					})
																					.rescue(function () {
																						// This... is impossible.
																						// The universe must be falling apart.
																						// We must return _getFalse again.
																						logger.log(
																							pc.yellow(
																								`[falsejs] True final attempt failed. Starting over from Attempt I.`,
																							),
																						)
																						const resultttt = _getFalse(
																							random,
																							_randomLetterOrNumber,
																							loggingEnabled,
																							logger,
																						) // will return false
																						result = resultttt.result
																						succeededAttempt =
																							resultttt.succeededAttempt
																					})
																					.ensure(trueNoop)
																					.end()
																			})
																	}
																}
															}
														})
														.else(() => {
															logger.log(
																pc.green(
																	`[falsejs] Attempt VII succeeded. False value retrieved successfully`,
																),
															)
															result = compl
															succeededAttempt = "VII"
														})
														.ensure(n0p3) // ensure we call noop for this
														.end()
												}
											})
									})
									.end()
							}
						})
						.else(() => {
							// it worked!
							result = chance
							logger.log(
								pc.green(
									`[falsejs] Attempt II succeeded. False value retrieved successfully`,
								),
							)
							succeededAttempt = "II"
						})
						.ensure(n0p3) //again ensure noop

						// and as always end our thing
						.end()
				})
				.else(() => {
					result = pureChance
					logger.log(
						pc.green(
							`[falsejs] Attempt I succeeded. False value retrieved successfully`,
						),
					)
					succeededAttempt = "I"
				})
				.ensure(n0p3)
				.end()
			return {
				// @ts-expect-error
				result,
				// @ts-expect-error
				succeededAttempt,
			} // return our false value
		}

		function _calculateFalse(
			random: number,
			loggingEnabled: boolean,
			shouldDoSomethingAsync: boolean = FALSE,
			shouldDoSomethingAsyncWithIsTenThousand: boolean = FALSE,
			disableAprilFoolsSideEffects: boolean = FALSE,
			strictDisableAprilFoolsSideEffectsCheck: boolean = trueComparison.compare(),
			compatibilityMode: COMPATIBILITY_MODE = COMPATIBILITY_MODE.NONE,
		) {
			const logger: Logger = construct({
				target: Logger,
				args: [loggingEnabled],
			}) // create our logger
			var result: null | boolean // define a result
			var succeededAttempt: null | string // define an attempt number that succeeded

			isTenThousandTenThousand(shouldDoSomethingAsyncWithIsTenThousand, logger) // make sure ten thousand is ten thousand and vValue works
			doSelfEqualityChecks(loggingEnabled) // do self equality checks
			construct({
				target: TernaryCompare,
				args: [loggingEnabled, logOne, blankSpace],
			}).compare()() // very very important

			if (loggingEnabled) require("wormhole-interconnections") // wormhole
			logger.log(
				c.cyan(
					`[falsejs] `.concat(
						generalConcat(
							StringValueof(thirteenResolver()),
							SPACE,
							"×",
							SPACE,
							StringValueof(Two()),
							SPACE,
							"=",
							SPACE,
							thirteen(Two()),
						),
					),
				),
			)

			// our users should know some basic info

			// the os:
			If(isWindows())
				.Then(() => {
					// Windows
					logger.log(
						clc.cyanBright(
							`[falsejs] Using Windows as current operating system`,
						),
					)
				})
				.Else()
				.If(isLinux())
				.Then(() => {
					// Linux
					logger.log(
						clc.cyanBright(`[falsejs] Using Linux as current operating system`),
					)
				})
				.Else()
				.If(isOSX())
				.Then(() => {
					// AppleOS (Darwin)
					logger.log(
						clc.cyanBright(
							`[falsejs] Using Darwin as current operating system platform (macOS, iOS, etc.)`,
						),
					)
				})
				.Else()
				.If(isEqualTo(os.platform(), "aix"))
				.Then(() => {
					// AIX??
					logger.log(
						clc.cyanBright(
							`[falsejs] Using IBM AIX as current operating system`,
						),
					)
				})
				.Else()
				.If(isFreeBSD())
				.Then(() => {
					// FreeBSD
					logger.log(
						clc.cyanBright(
							`[falsejs] Using FreeBSD as current operating system`,
						),
					)
				})
				.Else()
				.If(isEqualTo(os.platform(), "openbsd"))
				.Then(() => {
					// OpenBSD
					logger.log(
						clc.cyanBright(
							`[falsejs] Using OpenBSD as current operating system`,
						),
					)
				})
				.Else()
				.If(isEqualTo(os.platform(), "netbsd"))
				.Then(() => {
					// NetBSD
					logger.log(
						clc.cyanBright(
							`[falsejs] Using NetBSD as current operating system`,
						),
					)
				})
				.Else()
				.If(isEqualTo(os.platform(), "cygwin"))
				.Then(() => {
					//cygwin
					logger.log(clc.cyanBright(`[falsejs] You are using Cygwin`))
				})
				.Else()
				.If(isEqualTo(os.platform(), "sunos"))
				.Then(() => {
					// Solaris/SunOS
					logger.log(
						clc.cyanBright(
							`[falsejs] Using SunOS/Solaris as current operating system`,
						),
					)
				})
				.Else()
				.If(isEqualTo(os.platform(), "android"))
				.Then(() => {
					// Android
					logger.log(
						clc.cyanBright(
							`[falsejs] Using Android as current operating system. coding on your phone, are you?`,
						),
					)
				})
				.Else(() => {
					logger.log(
						clc.cyanBright(
							`[falsejs] Even Node.js itself doesn't know your operating system.`,
						),
					)
				})
			/// I'm actually curious what more can we do with process and os?
			// lets find out. hmm process.cpuusage whats that
			const usage = process.cpuUsage()
			logger.log(
				clc.cyanBright(
					getValueOfThisStringText(`[falsejs] User CPU Usage: ${usage.user}`),
				),
			)
			logger.log(clc.cyanBright(`[falsejs] System CPU Usage: ${usage.system}`))
			// lets calculate days of the week and months and days and years and stuff
			if (isJanuary(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is January`))
			if (isFebruary(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is February`))
			if (isMarch(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is March`))
			if (isApril(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is April`))
			if (isMay(Today)) logger.log(clc.cyanBright(`[falsejs] The month is May`))
			if (isJune(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is June`))
			if (isJuly(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is July`))
			if (isAugust(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is August`))
			if (isSeptember(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is September`))
			if (isOctober(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is October`))
			if (isNovember(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is November`))
			if (isDecember(Today))
				logger.log(clc.cyanBright(`[falsejs] The month is December`))
			if (isMonday()) logger.log(clc.cyanBright(`[falsejs] Today is Monday`))
			if (isTuesday()) logger.log(clc.cyanBright(`[falsejs] Today is Tuesday`))
			if (isWednesday())
				logger.log(clc.cyanBright(`[falsejs] Today is Wednesday`))
			if (isThursday())
				logger.log(clc.cyanBright(`[falsejs] Today is Thursday`))
			if (isFriday()) logger.log(clc.cyanBright(`[falsejs] Today is Friday`))
			if (isSaturday())
				logger.log(clc.cyanBright(`[falsejs] Today is Saturday`))
			if (isSunday()) logger.log(clc.cyanBright(`[falsejs] Today is Sunday`))
			if (isWeekend()) logger.log(clc.cyanBright(`[falsejs] It's the weekend!`))

			logger.log(
				clc.cyanBright(
					generalConcat(`[falsejs] Random happy emoji: `, randomHappyEmoji()),
				),
			)
			logger.log(
				clc.cyanBright(
					generalConcat(`[falsejs] Random angry emoji: `, randomAngryEmoji()),
				),
			)
			logger.log(
				clc.cyanBright(
					generalConcat(`[falsejs] Random food emoji: `, randomFoodEmoji()),
				),
			)
			construct({
				target: TernaryCompare,
				args: [loggingEnabled, dolphinFact, noop3],
			}).compare()()

			// lets do something async
			if (shouldDoSomethingAsync) {
				doSomethingAsync(logger).then((l) => resultOfDoingSomethingAsync(l))
			}
			If(not(isNumberOddOrEven)(random, FALSE))
				.Then(() => {
					logger.log(clc.yellow(`[falsejs] Random number is not odd or even`))
				})
				.Else(() => {
					logger.log(
						pc.green(
							`[falsejs] Verified that the random number is odd or even`,
						),
					)
				})

			// is odd checks
			If(!isIsOdd(isOdd))
				.Then(() => {
					logger.log(clc.yellow(`[falsejs] isOdd is not isOdd.`))
					logger.log(clc.yellow(`[falsejs] That's weird`))
				})
				.Else(n0p3)

			If(isIsOdd(isOddAndrew))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for Andrew`))
				})
				.Else(noop6)

			If(isIsOdd(isOd))
				.Then(() => {
					logger.log(
						pc.green(
							`[falsejs] Good for Monishadhanasekar (how do you pronounce that) (but bad for me because then it will throw an error if the input is not a numbr HELP)`,
						),
					) // TODO: Add pronunciaton
				})
				.Else(() => {
					/*
                logger.log(
                  getValueOfThisStringText(
                    clc.cyan(
                      `[falsejs] ��# i s - o d B y u s i n g t h i s p a c k a g e , u s e r c a n f i n d w h e a t h e r t h e g i v e n n u m b e r i s o d d o r n o t . S i m p l y d o w n l o a d t h i s n p m p a c k a g e b y t y p i n g n p m i i s - o d . `
                    )
                  )
                )*/
				})

			If(isIsOdd(isOddNum))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for prasundas`))
				})
				.Else(noop4())

			If(isIsOdd(isIntegerOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for hoanduy1710`))
				})
				.Else(noop2)

			If(isIsOdd(noteven))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for DeaSTL`))
				})
				.Else(noop3)

			If(isIsOdd(isUneven))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for Robin`))
				})
				.Else(noop7)

			If(isIsOdd(numberKind.odd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for goten`))
				})
				.Else(noop8)

			If(isIsOdd(isOddFaster))
				.Then(() => {
					logger.log(
						pc.green(
							`[falsejs] Bad for bvpranu97, 'cos he wanted to make a faster version but his version is literally the same LOL`,
						),
					)
				})
				.Else(noop9)

			If(isIsOdd(gabrielBrotasIsOdd.isOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for Gabriel`))
				})
				.Else(blankSpace)

			If(isIsOdd(returnIfOddNumber))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for iamrahulpatel`))
				})
				.Else(blankSpaceNoop)

			If(isIsOdd(numberIsOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for Scott`))
				})
				.Else(asyncUtilNoop)

			If(isIsOdd(isNumOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for Shivam`))
				})
				.Else(() => noopGenerator().next())

			If(isIsOdd(isOddNumber))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for LinkDev`))
				})
				.Else(fjNoop)

			If(isIsOdd(isNumberOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for aliraza401`))
				})
				.Else(lodashNoop)

			If(isIsOdd(isThisNumberOdd))
				.Then(() => {
					logger.log(pc.green(`[falsejs] Good for makogai`))
				})
				.Else(lodash_Noop)

			// now let's run some lua code
			const myLuaScript = `
    local message = "[falsejs] Bye from Lua!"
    print(message)
    `
			const parsedLua = luaParser.parse(myLuaScript)
			if (loggingEnabled) luaInterpreter.interpret(parsedLua) // run our lua code when the program ends

			logger.log(
				colors.red(
					vValue(
						isuseless(
							StringValueof(lowercase(`[falsejs] This is in lowercase`)),
						),
					),
				),
			)
			// okay we need to calculate false

			if (not(isAprilFools)()) {
				if (disableAprilFoolsSideEffects) {
					if (strictDisableAprilFoolsSideEffectsCheck) {
						immediateError(
							colors.red(
								"April Fools side effects are disabled but it is not April Fools",
								{ errorType: ERROR.Error },
							),
						)
						return exit(one)
					} else {
						logger.log(
							clc.yellow(
								`[falsejs] No error was thrown because strict disable April Fools side effects checking was disabled`,
							),
						)
						// call the _getFalse function
						const daresult = doop(
							_getFalse,
							random,
							calculateRandomLetterOrNumber(loggingEnabled),
							loggingEnabled,
							logger,
						)
						result = daresult.result
						succeededAttempt = daresult.succeededAttempt
					}
				} else {
					// call the _getFalse function
					const daresult = doop(
						_getFalse,
						random,
						calculateRandomLetterOrNumber(loggingEnabled),
						loggingEnabled,
						logger,
					)
					result = daresult.result
					succeededAttempt = daresult.succeededAttempt
				}
			} else {
				result = _calculateFalseAprilFools()
				logger.log(pc.green(`[falsejs] Value retrieved successfully`))
			}

			// Validation
			logger.log(clc.cyanBright(`[falsejs] Beginning validation`))

			logger.log(clc.cyanBright(`[falsejs] Beginning check one of validation`))

			if (not(isRealBoolean)(result)) {
				logger.log(colors.red(`[falsejs] Result was not a boolean`))
				logger.log(colors.red(`[falsejs] Booleanifying the result`))
				// Make sure our result is always a boolean
				result = $Boolean(result)

				if (not(isRealBoolean)(result)) {
					logger.log(
						colors.red(
							`[falsejs] Result is still not a boolean after booleanification`,
						),
					)
					logger.log(
						colors.red(
							`[falsejs] Attempting to trace the source of the problem`,
						),
					)

					if (
						isRealBoolean(Boolean(result)) &&
						!isRealBoolean($Boolean(result))
					) {
						logger.log(
							clc.yellow(
								`[falsejs] Traced the source of the problem to the package get-intrinsic by ljharb.`,
							),
						)
						logger.log(
							clc.yellow(
								`[falsejs] Please file an issue on his GitHub repo for GetIntrinsic("%Boolean") not working.`,
							),
						)
						result = Boolean(result) // now it's a boolean
						logger.log(
							pc.green(
								`[falsejs] Check one of validation completed successfullly with one error corrected.`,
							),
						)
					} else {
						logger.log(colors.red(`[falsejs] × Validation failed to pass.`))
						throwError(
							construct({
								target: FalseJSValidationFailedToPassError,
								args: ["Validation failed to pass"],
							}),
						)
						return exit(one)
					}
				} else {
					logger.log(
						pc.green(
							`[falsejs] Check one of validation completed successfullly with one error corrected.`,
						),
					)
				}
			} else {
				logger.log(
					pc.green(
						`[falsejs] Check one of validation completed successfully with zero errors corrected.`,
					),
				)
			}
			logger.log(clc.cyanBright(`[falsejs] Beginning check two of validation`))
			if (isPreciselyTrue(result) && not(isAprilFools)()) {
				logger.log(
					colors.red(
						`[falsejs] Result was true and not false. Updating result to negation of result.`,
					),
				)
				result = not(() => result)()
				logger.log(
					pc.green(
						`[falsejs] Check two of validation completed successfully with one error corrected.`,
					),
				)
			} else {
				logger.log(
					pc.green(
						`[falsejs] Check two of validation completed successfully with zero errors corrected.`,
					),
				)
			}

			logger.log(pc.green(`[falsejs] Validation completed successfully`))
			logger.log(
				pc.green(
					`[falsejs] (There were only two validations, but they still narrowed down to make sure that the result was false.)`,
				),
			)
			logger.log(
				pc.green(
					`[falsejs] False value has now been validated and calculated.`,
				),
			)

			// Compatibility mode
			if (isEqual(compatibilityMode, COMPATIBILITY_MODES.IE5)) {
				logger.log(c.yellow("[falsejs] IE5 Compatibility Mode Detected"))
				// Garbage collection

				logger.log(
					c.yellow(
						"[falsejs:ie5] Activating JScript Engine Coercion Guard And Garbage Collection...",
					),
				)

				let CoercionGuardArrayRef___ = Null()
				const iterationCount = jQuery.multiply(
					jQuery.multiply(thirteenResolver(), thirteenResolver()),
					thirteenResolver(),
				)

				logger.log(
					c.yellow(
						`[falsejs:ie5] Simulating ${iterationCount} JScript operations...`,
					),
				)

				for (let i = zr0(); i < iterationCount; i = i + one) {
					CoercionGuardArrayRef___ = construct({
						target: $Array,
						args: [iterationCount],
					}).fill(useGarbage.string())

					const garbageCollector = jQuery.multiply(MathSqrt(i), i)

					if (garbageCollector > jQuery.multiply(i, i)) {
						CoercionGuardArrayRef___.indexOf(
							immediateError(
								"[falsejs:ie5] IE5 Simulation error: Impossible math detected",
								ERROR.BaseError,
							),
						) // throws an error and passes it into indexof for no reason
						return exit(one)
					}
				}

				logger.log(
					c.green(
						`[falsejs:ie5] JScript Highly Optimized Garbage Collection Completed`,
					),
				)

				const zeroValue = returnZero({
					method: ZeroCalculationMethod.CreashaksOrganzine,
					loggingEnabled: FALSE,
				})
				const nullValue = Null()

				// @ts-expect-error
				if (result == zeroValue) {
					// biome-ignore lint/suspicious/noTsIgnore: reason blabal
					// @ts-ignore
					if (result === zeroValue) {
						immediateError(
							`[falsejs:ie5] Critical Error: IE5-like strict coercion detected! Aborting.`,
						)
						return exit(one)
					}
				}

				if (result == nullValue) {
					immediateError(
						`[falsejs:ie5] Fatal Error: Unexpected VBScript null coercion detected! Aborting.`,
					)
					return exit(one)
				}

				logger.log(
					c.yellow(
						`[falsejs:ie5] Warning: Potential VBScript object coersion threat averted.`,
					),
				)
			}

			if (isEqual(compatibilityMode, COMPATIBILITY_MODES.NETSCAPE)) {
				logger.log(c.yellow("[falsejs] Netscape Compatibility Mode Detected"))
				logger.log(
					c.yellow(
						"[falsejs:netscape] Activating JavaScript 1.1 Type Coercion Audit...",
					),
				)

				const auditIterationCount =
					jQuery.add(
						Number(complexBooleanWithBias(logger)) + zr0(),
						returnZero({
							method: ZeroCalculationMethod.CreashaksOrganzine,
							loggingEnabled: FALSE,
						}),
					) *
						thirteenResolver() +
					thirteenResolver()
				let errorCount = returnZero({
					method: ZeroCalculationMethod.NumberPrototypeValue,
					loggingEnabled: FALSE,
				})

				logger.log(
					c.yellow(
						`[falsejs:netscape] Running ${auditIterationCount} type checks against Netscape 1.1 standards...`,
					),
				)

				for (let i = zr0(); i < auditIterationCount; i = i + one) {
					const valueToCheck = construct({ target: $String, args: [i] })
					const isCoercedToFalse = valueToCheck == result

					if (isCoercedToFalse && i !== zr0()) {
						errorCount = errorCount + one
						if (errorCount > thirteenResolver()) {
							immediateError(
								"[falsejs:netscape] Netscape Audit Limit Reached! Aborting.",
								ERROR.BaseError,
							)
							return exit(one)
						}
					}
				}

				logger.log(
					c.green(
						`[falsejs:netscape] Type Bug Checks Passed Succesfully! No More Than 13 Errors Was Reached!`,
					),
				)
				logger.log(
					c.yellow(
						`[falsejs:netscape] DHTML Layer Tag Structural Integrity Test Begins`,
					),
				)

				const dom = new JSDOM(
					`<!DOCTYPE html><html><body><p id="main">This is the body.</p><layer id="${getDHTMLString()}" z-index="99">A Netscape Layer!</layer><script>var isDHTML = 9==9;</script></body></html>`,
				)

				const $ = cheerio.load(dom.serialize())

				const layerElement = $("layer")
				const layerExists = layerElement.length > zr0()

				const rawHTML = dom.window.document.body.innerHTML
				const strippedText = striptags(rawHTML)
				const integrityCheck = strippedText.includes("A Netscape Layer!")

				if (layerExists && integrityCheck) {
					logger.log(
						c.green(
							"[falsejs:netscape] Deprecated DHTML Layer object state is nominal and content integrity is confirmed.",
						),
					)
				} else {
					immediateError(
						`[falsejs:netscape] DHTML Check Failure! Type integrity compromised. Expected LAYER tag but got ${layerElement.length} elements.`,
						ERROR.BaseError,
					)
					return exit(one)
				}

				if (typeof dom !== "undefined" && typeof $ !== "undefined") {
					logger.log(
						c.green(
							`[falsejs:netscape] Successfully managed memory from ${JSDOM.name} and ${cheerio.name}. No state pollution detected.`,
						),
					)
				} else {
					immediateError(
						`[falsejs:netscape] Fatal Error: Global scope polluted by DOM libraries. Cannot guarantee false value.`,
						ERROR.BaseError,
					)
					return exit(one)
				}
			}

			if (isEqual(compatibilityMode, COMPATIBILITY_MODES.OPERA_PRESTO)) {
				logger.log(
					c.yellow("[falsejs] Opera Presto Compatibility Mode Detected"),
				)
				logger.log(
					c.yellow(
						"[falsejs:presto] Activating Presto Engine Scripting Delay And DOM Audit...",
					),
				)

				const delayIterations = jQuery.multiply(
					thirteenResolver(),
					thirteenResolver(),
				)

				logger.log(
					c.yellow(
						`[falsejs:presto] Initiating rendering for ${delayIterations} cycles...`,
					),
				)

				logger.log(
					c.green(
						"[falsejs:presto] Instantiating full-featured JSDOM environment...",
					),
				)
				const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
					url: "http://opera-presto-compatibility-check.local/",
					referrer: "http://netscape-dhtml-audit.local/", // Link to Netscape for extra flavor
					contentType: "text/html",
					includeNodeLocations: true,
					runScripts: "outside-only",
				})
				const { window: window_ } = dom // Destructure the actual window object

				const startTime = new $Date().getTime()
				for (
					let i = returnZero({
						method: ZeroCalculationMethod.CreashaksOrganzine,
						loggingEnabled: FALSE,
					});
					i < delayIterations;
					i = i + one
				) {
					const renderingEvaluation =
						MathSin(MathRandom() * i) * MathCos(MathRandom() * i)
					if (renderingEvaluation > thirteenResolver() * thirteenResolver()) {
						immediateError(
							"[falsejs:presto] Presto Simulation Error: Time-Space Anomaly detected.",
							ERROR.BaseError,
						)
						return exit(one)
					}
				}
				const endTime = new $Date().getTime()
				const blockingTime = endTime - startTime

				logger.log(
					c.green(
						`[falsejs:presto] Rendering complete. Latency: ${blockingTime}ms`,
					),
				)

				logger.log(
					c.yellow(
						"[falsejs:presto] Running Audit on JSDOM Window Properties...",
					),
				)

				const mockElement = window_.document.createElement("div")
				const propertyToCheck = "scrollIntoViewIfNeeded"

				if (isEqual(typeof mockElement[propertyToCheck], "function")) {
					immediateError(
						`[falsejs:presto] Fatal Error: JSDOM Window polluted by Opera-era non-standard method '${propertyToCheck}'!`,
						ERROR.BaseError,
					)
					return exit(one)
				}

				if (isEqual(typeof window_.opera, "object") && window_.opera !== null) {
					immediateError(
						"[falsejs:presto] Critical Error: Global 'opera' object detected in JSDOM Window!",
						ERROR.BaseError,
					)
					return exit(one)
				}

				if (typeof window_.event !== "undefined") {
					logger.log(
						c.red(
							"[falsejs:presto] Warning: Global 'event' object detected. Input integrity compromised.",
						),
					)
				} else {
					logger.log(
						c.green("[falsejs:presto] Global 'event' object is clean."),
					)
				}

				window_.close()
				logger.log(
					c.yellow(
						"[falsejs:presto] JSDOM Window successfully closed and memory released.",
					),
				)

				logger.log(
					c.yellow(`[falsejs:presto] Presto audit completed successfully.`),
				)
			}

			if (loggingEnabled) {
				const message = "thanks for using this package"
				let thesay = tacoWrap(emoji100.concat(SPACE, owoifyx(message)))
				const thesay2 = tacoWrap(emoji100.concat(SPACE, message))
				const thesay3 = tacoWrap(
					emoji100.concat(SPACE, uwuifier.uwuifySentence(message)),
				)
				if (isEqualTo(thesay, thesay2)) thesay = thesay3
				if (loggingEnabled) sayIt(thesay) // give our users a cute message so we can get their support
				// string interpelation
				ltc(
					`${clc.cyanBright(`[falsejs]`)} ${chalk.red("Chalk")}-${chalk.green("ulated")} ${chalk.yellow("the")} ${chalk.blue("boolean")} ${chalk.magenta(`value`)} ${chalk.cyan(`false`)}`
						.concat(SPACE)
						.concat(emoji100),
				)
				// @ts-expect-error
				if (succeededAttempt != null) {
					ltc(
						generalConcat(
							clc.cyanBright(`[falsejs]`).concat(SPACE),
							chalkbox.magenta(
								generalConcat(
									"The attempt that succeeded was attempt ",
									succeededAttempt,
								),
							),
						),
					)
					fs.appendFileSync(
						".falsejs/phone-number-log.txt",
						generalConcat("succeeded attempt: ", succeededAttempt, "\n"),
					)
				}
				ltc(
					generalConcat(
						clc.cyanBright(`[falsejs]`).concat(SPACE),
						chalkbox.rainbow(`Thanks for using this package`),
					),
				)
				ltc(
					generalConcat(
						clc.cyanBright(`[falsejs]`).concat(SPACE),
						chalkbox.random(`I really appreciate it`),
					),
				)
				ltc(
					generalConcat(
						clc.cyanBright(`[falsejs]`).concat(SPACE),
						chalkbox.america(`Star the repo and follow me on GitHub: `),
					),
				)
				ltc(
					clc
						.cyanBright(`[falsejs]`)
						.concat(SPACE, chalk.underline("https://github.com/tj-commits")),
				)
				ltc(
					clc
						.cyanBright(`[falsejs]`)
						.concat(
							SPACE,
							clc.cyanBright(`And a very big random number is`),
							SPACE,
						) +
						`${chalkbox.rainbow(
							numberFormatter.format(
								MathRound(
									surpriseArray.reduce((v, _, i, a) => {
										// @ts-expect-error
										return jQuery.add(v, a.getMember(i))
									}),
								),
							),
						)}`,
				)
				ltc(
					`${clc.cyanBright(`[falsejs]`).concat(SPACE)}${c.red(`False`)}${c.green(`JS`)}`,
				)
				ltc(blankSpaces)
			}

			return result
		}

		functions.ReturnFalse = (
			enableLogging: "yes" | "no" = NO,
			shouldDoSomethingAsync: "yes" | "no" = NO,
			shouldDoSomethingAsyncWithIsTenThousand: "yes" | "no" = NO,
			disableAprilFoolsSideEffects: "yes" | "no" = NO,
			definitelyDisableAprilFoolsSideEffects: "yes" | "no" = NO,
			strictDisableAprilFoolsSideEffectsCheck: "yes" | "no" = YES,
			compatibilityMode: COMPATIBILITY_MODE = COMPATIBILITY_MODE.NONE,
		) => {
			// validate our values
			if (
				not(isEqualTo)(enableLogging, NO) &&
				not(isEqualTo)(enableLogging, YES)
			) {
				immediateError("enableLogging must be yes or no", {
					errorType: ERROR.TypeError,
				})
				return exit(one)
			}
			if (
				not(isEqualTo)(shouldDoSomethingAsync, NO) &&
				not(isEqualTo)(shouldDoSomethingAsync, YES)
			) {
				immediateError("shouldDoSomethingAsync must be yes or no", {
					errorType: ERROR.TypeError,
				})
				return exit(one)
			}
			if (
				not(isEqualTo)(shouldDoSomethingAsyncWithIsTenThousand, NO) &&
				not(isEqualTo)(shouldDoSomethingAsyncWithIsTenThousand, YES)
			) {
				immediateError(
					"shouldDoSomethingAsyncWithIsTenThousand must be yes or no",
					{ errorType: ERROR.TypeError },
				)
				return exit(one)
			}
			if (
				not(isEqualTo)(disableAprilFoolsSideEffects, NO) &&
				not(isEqualTo)(disableAprilFoolsSideEffects, YES)
			) {
				immediateError("disableAprilFoolsSideEffects must be yes or no", {
					errorType: ERROR.TypeError,
				})
				return exit(one)
			}
			if (
				not(isEqualTo)(definitelyDisableAprilFoolsSideEffects, NO) &&
				not(isEqualTo)(definitelyDisableAprilFoolsSideEffects, YES)
			) {
				immediateError(
					"definitelyDisableAprilFoolsSideEffects must be yes or no",
					{
						errorType: ERROR.TypeError,
					},
				)
				return exit(one)
			}
			if (
				not(isEqualTo)(definitelyDisableAprilFoolsSideEffects, NO) &&
				not(isEqualTo)(definitelyDisableAprilFoolsSideEffects, YES)
			) {
				immediateError(
					"strictDisableAprilFoolsSideEffectsCheck must be yes or no",
					{
						errorType: ERROR.TypeError,
					},
				)
				return exit(one)
			}
			if (
				not(isEqualTo)(compatibilityMode, COMPATIBILITY_MODES.NONE) &&
				not(isEqualTo)(compatibilityMode, COMPATIBILITY_MODES.IE5) &&
				not(isEqualTo)(compatibilityMode, COMPATIBILITY_MODES.NETSCAPE) &&
				not(isEqualTo)(compatibilityMode, COMPATIBILITY_MODES.OPERA_PRESTO)
			) {
				immediateError("compatibilityMode must be a valid compatibility mode", {
					errorType: ERROR.TypeError,
				})
			}
			// let's say hello to our users and inform them logging enabled if it is
			if (
				isEqualTo(
					isTrue(
						{ enableLogging: yesNo.parse(enableLogging) },
						"enableLogging",
					),
					trueComparison.compare(),
				)
			) {
				ltc(clc.cyanBright(`[falsejs] Logging enabled`))
				hello({ username, age: "it's called FalseJS!" })

				mGenbaneko.say(clc.redBright(meow()))
				require("greenlantern") // Hello World
				ltc(clc.cyanBright(`[falsejs] Using Lodash version ${_.VERSION}`))
				ltc(
					clc.cyanBright(
						`[falsejs] Using Underscore version ${underscore.VERSION}`,
					),
				)
				ltc(clc.cyanBright(`[falsejs] Using Axios version ${axios.VERSION}`))
				ltc(clc.cyanBright(`[falsejs] Using React version ${React.version}`))
			}
			// deduce a random number
			const randomNumber = add(MathFloor(MathRandom() * numberOneHundred), one)
			if (
				isEqualTo(
					isTrue(
						{ enableLogging: yesNo.parse(enableLogging) },
						"enableLogging",
					),
					Bro.TOTALLY === trueComparison.compare()
						? Bro.TOTALLY
						: trueComparison.compare(),
				)
			) {
				ltc(
					clc.cyanBright(`[falsejs] Random number ${randomNumber} calculated`), // lets inform our users if they have loggineanbled
				)
				ltc(
					clc.cyanBright(
						`[falsejs] Doing something async ${construct({
							target: TernaryCompare,
							args: [
								yesNo.parse(shouldDoSomethingAsync),
								"enabled",
								"disabled",
							],
						}).compare()}`,
					),
				)
				ltc(
					clc.cyanBright(
						`[falsejs] Doing something async with is-ten-thousand ${construct({
							target: TernaryCompare,
							args: [
								yesNo.parse(shouldDoSomethingAsyncWithIsTenThousand),
								"enabled",
								"disabled",
							],
						}).compare()}`,
					),
				)
			}
			const loggingEnabled = enableLogging
			const logger = {
				log(l: string) {
					if (isEqualTo(trueComparison.compare(), yesNo.parse(loggingEnabled)))
						ltc(l)
				},
			}
			if (not(yesNo.parse)(strictDisableAprilFoolsSideEffectsCheck)) {
				logger.log(
					clc.yellow(
						`[falsejs] Strict disable April Fools side effects checking disabled`,
					),
				)
			}
			_return(
				vretriever.retrieve(
					immo(
						isuseless(
							vValue(
								_.identity(
									underscore.identity(
										literally(
											constant(
												lodashdotconstant(
													_.constant(
														underscore.constant(
															doop(
																_calculateFalse,
																randomNumber, // random number
																yesNo.parse(enableLogging), // eanble logging
																yesNo.parse(shouldDoSomethingAsync), // async
																yesNo.parse(
																	shouldDoSomethingAsyncWithIsTenThousand,
																), //async-is-ten-thousand
																yesNo.parse(disableAprilFoolsSideEffects) &&
																	yesNo.parse(
																		definitelyDisableAprilFoolsSideEffects,
																	),
																yesNo.parse(
																	strictDisableAprilFoolsSideEffectsCheck,
																),
																compatibilityMode,
															),
														)(),
													)(),
												)(),
											)(),
										)(),
									),
								),
							),
						),
					),
				),
			)
		}
		variableHolder._FalseJSMainFunctionWotDoesFunctionality =
			functions.ReturnFalse

		// now lets define some helper fufnctions
		// just some weaird boolean functions

		function randomBoolean(
			biasThreshold: number /* biasTreshold is chance of being true */,
			logger: Logger,
		) {
			const randomValue = MathRandom()
			logger.log(
				clc.cyanBright(`[falsejs] Random number ${randomValue} calculated`),
			)
			const binaryString = jQuery
				.multiply(randomValue, (five() + five()) ** (five() + five() / five()))
				.toString(Two())
			const bitMask =
				five() * (five() + (five() - (five() / five() + five() / five()))) +
				five() / five() +
				five() / five() // the meaning of life
			const bitResult =
				parseInt(
					binaryString.slice(
						returnZero({
							method: ZeroCalculationMethod.CreashaksOrganzine,
							loggingEnabled: logger.enableLogging,
						}),
						six(),
					),
					Two(),
				) ^ bitMask
			const segment = bitResult.toString(sixteen).slice(
				returnZero({
					method: ZeroCalculationMethod.CreashaksOrganzine,
					loggingEnabled: logger.enableLogging,
				}),
				one,
			)
			const mappedValue = parseInt(segment, sixteen) % Two()
			const biasedRandomValue = construct({
				target: TernaryCompare,
				args: [
					MathRandom() < biasThreshold,
					one,
					returnZero({
						method: ZeroCalculationMethod.CreashaksOrganzine,
						loggingEnabled: logger.enableLogging,
					}),
				],
			}).compare()
			// @ts-expect-error
			const value = $.divide(add(mappedValue, biasedRandomValue), Two())

			return value >= five() / five() / (five() / five() + five() / five())
		}

		function complexBooleanWithBias(logger: Logger) {
			// Generate a pseudo-random number between 0 and 1
			const randomValue = MathRandom()

			logger.log(
				clc.cyanBright(`[falsejs] Random number ${randomValue} calculated`),
			)

			// Convert the random number to a high-precision string and manipulate it
			const highPrecisionString = (
				randomValue *
				(five() + five()) **
					(five() + (five() - (five() / five() + five() / five())))
			).toFixed(zr0())

			// Perform a base conversion
			const baseConverted = parseInt(highPrecisionString, ten).toString(
				(five() + (five() / five() + five() / five())) * five() +
					five() / five(),
			)

			// Calculate a hash-like value using trigonometric functions
			const trigValue =
				parseFloat(
					// @ts-expect-error
					parseFloat(
						// @ts-expect-error
						add("0.", baseConverted),
					) *
						(five() + (five() / five() + five() / five())) *
						five() +
						five() / five(),
				) *
				PI *
				Two()

			// Determine if this value is close to a specific fraction
			const isCloseToFraction =
				MathAbs(
					trigValue - five() / five() / (five() / five() + five() / five()),
				) <
				five() / five() / (five() + five()) +
					(five() - (five() / five() + five() / five())) /
						(five() * (five() * (five() - five() / five())))

			// Generate a secondary random number with a different scale
			const secondaryRandom = $.multiply(
				MathRandom(),
				(five() + five()) ** (five() - (five() / five() + five() / five())),
			)

			// Check if the secondary random number is a prime number
			const isPrime = isPrimeNumber(MathRound(secondaryRandom), logger)

			// Generate a bias value (6% chance of true)
			const biasThreshold = five() / five() / (five() + five())
			const biasRandom = MathRandom() < biasThreshold ? zr0() : one

			// Combine the results using weighted averaging
			const combinedResult = $.divide(
				isCloseToFraction + isPrime + biasRandom,
				three(),
			)

			// Return boolean based on the final weighted result
			return (
				combinedResult >= five() / five() / (five() / five() + five() / five())
			)
		}

		function weirdestBoolean(logger: Logger) {
			// Step 1: Generate a pseudo-random floating-point number
			const randomValue = MathRandom()

			// Step 2: Create a string representation of the random number in base-36
			const base36String = (
				randomValue *
				(five() + five()) **
					((five() - (five() / five() + five() / five())) *
						(five() - five() / five()))
			)
				.toFixed(zr0())
				.toString()

			// Step 3: Create a hash-like transformation by summing ASCII values of characters
			var asciiSum = zr0()
			for (const char of base36String) {
				asciiSum += char.charCodeAt(zr0())
			}

			// Step 4: Generate a non-trivial number by applying a sequence of bit manipulations
			const bitManipulated =
				(asciiSum ^
					((five() / five() + five() / five()) *
						(five() + five()) ** (five() - five() / five()) +
						(five() - (five() / five() + five() / five())) *
							(five() + five()) **
								(five() - (five() / five() + five() / five())) +
						(five() / five()) *
							(five() * (five() * (five() - five() / five()))) +
						(five() - (five() / five() + five() / five())) *
							(five() + five()))) &
				(five() *
					(five() *
						(five() +
							five() +
							(five() / five() / (five() + five()) +
								five() / five() / (five() + five()))))) // XOR and mask to get a byte

			// Step 5: Convert the result to a binary string and calculate a checksum-like value
			const binaryString = bitManipulated
				.toString(Two())
				.padStart(eightToolkit.constants.EIGHT, "0")
			const checksum = Array.from(binaryString).reduce(
				(acc, bit) => acc + parseInt(bit, ten),
				zr0(),
			)

			// Step 6: Use a matrix of numbers to obscure the logic
			const someNumbers = [
				Two(),
				three(),
				five(),
				seven(),
				eleven(),
				thirteenResolver(),
				integer17(),
				nineteenify(logger.enableLogging),
				TWENTY_THREE,
				TWENTY_THREE + six(),
			]
			const matrixIndex = checksum % someNumbers.length
			const primeValue = someNumbers[matrixIndex]

			// Step 7: Generate a complex random number using trigonometric functions
			const trigValue = $.multiply(
				$.divide($.multiply(primeValue, PI), four()),
				(five() + five()) ** (five() - (five() / five() + five() / five())) /
					(five() / five() + five() / five()),
			)
			const isAboveThreshold =
				trigValue >
				(five() + five()) ** (five() - (five() / five() + five() / five())) /
					(five() / five() + five() / five()) // Arbitrary threshold

			// Step 8: Introduce an additional layer of randomness with bias
			const bias =
				MathRandom() <
				(five() - five() / five()) / five() +
					five() / (five() * (five() * (five() - five() / five()))) -
					five() /
						five() /
						(five() + five()) **
							(five() * (five() - five() / five() - five() / five()) +
								five() / five()) -
					five() / five() / (five() + five())
					? one
					: zr0() // 75% chance of 1

			// Step 9: Combine results using a complex formula
			const weirdBoolean = $Boolean((isAboveThreshold ? one : zr0()) ^ bias) // XOR operation

			// Step 10: Calculate complex boolean with bias from other function
			const complexBoolean = complexBooleanWithBias(logger)

			// Step 11: Calculate random boolean with bias from other function
			const randomBool = randomBoolean(
				(five() - five() / five()) / five() +
					five() / (five() * (five() * (five() - five() / five()))) -
					five() /
						five() /
						(five() + five()) **
							(five() * (five() - five() / five() - five() / five()) +
								five() / five()) -
					five() / five() / (five() + five()) / (five() + five()),
				logger,
			)

			// Step 12: Add them together
			const sum = weirdBoolean + complexBoolean + randomBool

			// Step 13: Randomly add one to it
			const sumWhichMayBeSuccessed =
				MathRandom() < five() / five() / (five() / five() + five() / five())
					? successor(sum)
					: sum

			// Step 14: Round down or up
			const finalBooleanNotNegated = $.equals(
				MathFloor(sumWhichMayBeSuccessed) % Two(),
				zr0(),
			)

			// Step 15: Negate finalBoolean
			const finalBooleanComparison = construct({
				target: TernaryCompare,
				args: [finalBooleanNotNegated, FALSE, t()],
			})

			return finalBooleanComparison.compare()
		}

		function isPrimeNumber(num: number, logger: Logger) {
			if (num <= one) return FALSE
			if (num <= three()) return t()
			if (
				$.equals(
					num % Two(),
					returnZero({
						method: ZeroCalculationMethod.CreashaksOrganzine,
						loggingEnabled: logger.enableLogging,
					}),
				) ||
				$.equals(
					num % three(),
					returnZero({
						method: ZeroCalculationMethod.CreashaksOrganzine,
						loggingEnabled: logger.enableLogging,
					}),
				)
			) {
				return FALSE
			}
			var i = five()
			while ($.multiply(i, i) <= num) {
				if (
					$.equals(
						num % i,
						returnZero({
							method: ZeroCalculationMethod.CreashaksOrganzine,
							loggingEnabled: logger.enableLogging,
						}),
					) ||
					num %
						Number(
							$.equals(
								$.add(i, Two()),
								returnZero({
									method: ZeroCalculationMethod.CreashaksOrganzine,
									loggingEnabled: logger.enableLogging,
								}),
							),
						)
				) {
					return FALSE
				}
				i = $.add(i, six())
			}
			return tVal
		}

		function StringValueof(value: any) {
			return value.toString()
		}

		function couldThisCouldItBeFalse(
			aValueThatMightBeTheBooleanValueFalseButIDKYet: any,
		) {
			const specimen = aValueThatMightBeTheBooleanValueFalseButIDKYet
			if (specimen == undefined()) return FALSE // noway its false if its undefined
			if (isOne(specimen)) return FALSE
			if (isTrue({ specimen }, "specimen")) return FALSE
			if (isNegativeZero({ specimen }, "specimen")) return _f()
			if (is(specimen).thirteen()) return _f()
			return specimen === _f()
		}

		variableHolder._FalseJSIsFalse = function is_This_Value_false(
			v: any,
			loggingEnabled: boolean,
		) {
			if (!isRealBoolean(loggingEnabled))
				loggingEnabled = !(loggingEnabled === NO)
			const value = v // alts are always good
			const isV = is(v) // isthirteen
			const garbage = useGarbage() // use some garbage
			const isgarbage = not(isRealBoolean)(garbage) && isEqualTo(v, garbage)
			const cond =
				!isgarbage &&
				v !== one &&
				v !== Two() &&
				v !== three() &&
				v !== four() &&
				v !== five() &&
				v !== six() &&
				v !== seven() &&
				v !== eightToolkit.constants.EIGHT &&
				v !== ninev9() &&
				v !== ten &&
				v !== eleven() &&
				v !== twelve() &&
				v !== thirteenResolver() &&
				v !== fourteen &&
				v !== fifteen &&
				v !== fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn &&
				v !== sixteen &&
				v !== integer17() &&
				v !== Eighteen() &&
				v !== nineteenify(loggingEnabled) &&
				v !== numbertwenty(loggingEnabled) &&
				v !== always21() &&
				v !== twentytwo &&
				v !== TWENTY_THREE &&
				v !== sixtyseven() &&
				v !== parseInt(theNumberSeven, 10) &&
				v !== theNumberSeven &&
				!isUndefined(v) &&
				!isNull(v) &&
				!isNil(v) &&
				isUnnull(v) &&
				not(isNil)(v) &&
				!isEqual(value, NO) &&
				!isEqual(value, YES) &&
				!isEqualTo(value, NO) &&
				!isEqualTo(value, YES) &&
				!couldThisCouldItBeTrue(v) &&
				!isNaN(v) &&
				!isNegativeInfinity(v) &&
				!isNegativeZero2(v) &&
				!is0_2.isNegativeZero(v) &&
				!isNegativeZero(v) &&
				!isPositiveZero(v) &&
				!is0_2.isPositiveZero(v) &&
				!is0(v) &&
				!is0_2.isZero(v) &&
				!zerosurgeIsZero(v, loggingEnabled) &&
				!is1(v) &&
				!isTwo(v) &&
				!isThree(v) &&
				!isFour(v) &&
				!isFive(v) &&
				!isSix(v) &&
				!isSeven(v) &&
				!eightToolkit.isEight(v) &&
				!isV.thirteen() &&
				!isHundred(v) &&
				!isThousand(v) &&
				!isTenThousand(v) &&
				!isEqTenThousand(v) &&
				!isNumber(v) &&
				!isActualNumber(v) &&
				!isIsOdd(v) &&
				!isOd(v) &&
				v !== t() &&
				v === _f() &&
				isEqualTo(v, _f()) &&
				isEqual(v, _f()) &&
				_.isEqual(v, _f()) &&
				underscore.isEqual(v, _f()) &&
				strictlyEqual(v, _f()) &&
				v === _f() &&
				v === FALSE &&
				couldThisCouldItBeFalse(v)

			return cond
		}

		variableHolder._FalseJSjQueryPlugin = function jQueryPlugin() {
			// Inject into jQuery
			// @ts-expect-error
			jQuery.False = variableHolder._FalseJSMainFunctionWotDoesFunctionality
			// @ts-expect-error
			jQuery.isFalse = variableHolder._FalseJSIsFalse
		}

		variableHolder._FalseJSExpressMiddleware = function expressMiddleware(
			req: any,
			_res: any,
			next: any,
		) {
			// Add our function to the request object
			req.False = variableHolder._FalseJSMainFunctionWotDoesFunctionality
			req.isFalse = variableHolder._FalseJSIsFalse
			next() // Continue to the next middleware or route
		}

		function getNo() {
			const NO = require("no/dist/main")
			const NoComponent = () => {
				return React.createElement("div", Null(), NO)
			}
			const noElement = React.createElement(NoComponent)
			const html = cheerio
				.load(ReactDOMServer.renderToString(noElement))("div")
				.toString()
			const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`)
			dom.window.document.body.innerHTML = html
			const bodyContent = dom.window.document.querySelector("body").innerHTML
			return striptags(bodyContent)
		}

		function getValueOfThisStringText(text: string) {
			return text
		}

		function calculateRandomLetterOrNumber(loggingEnabled: boolean) {
			const uniqueId = uuid.v4()
			const uniqueId2 = crypto.randomUUID()
			const dashlessUUID = uniqueId.replaceAll("-", emptyString)
			const dashlessUUID2 = uniqueId2.replaceAll("-", emptyString)
			const combinedUUID = emptyString.concat(dashlessUUID, dashlessUUID2)
			const randomCharacter = StringCharAt.call(
				combinedUUID,
				$.add(
					MathFloor($.multiply(MathRandom(), getStringLength(combinedUUID))),
					one,
				),
			)
			if (loggingEnabled) {
				ltc(
					clc.cyanBright(
						`[falsejs] Random character calculated: ${randomCharacter}`,
					),
				)
			}
			return randomCharacter
		}

		class falsejs {
			static False = variableHolder._FalseJSMainFunctionWotDoesFunctionality
			static isFalse = variableHolder._FalseJSIsFalse
			static injectIntojQuery = variableHolder._FalseJSjQueryPlugin
			static expressMiddleware = variableHolder._FalseJSExpressMiddleware
			static COMPATIBILITY_MODE = COMPATIBILITY_MODES
			// static FalseAsAService = variableHolder.FalseAsAService

			constructor() {
				immediateError("falsejs is not a constructor", ERROR.TypeError)
			}
		}

		return falsejs
	} as FalseJSFactory)
}
