/**
 * @license
 * FalseJS <https://10xEngineersQualityProgramming.github.io/falsejs.html>
 * Copyright 10x'ly Made and other contributors <https://10xEngineersQualityProgramming.github.io>
 * Released under MIT license <https://opensource.org/license/mit>
 * made with HEAVY BLACK HEART U+2764
 */

/** Here we check whether require is working. */
let doesItWork
try {
  doesItWork = require("is-require-working")
} catch {
  doesItWork = false
}

if (!doesItWork) {
  /** Simple error handler to exit node if require is not working */
  /** COMMENT: It doesn't use immediate-error because we can't require immediate-error if require isn't working. */
  throw new Error("require not working, exiting node")
} else {
  const isComputerOn = require("is-computer-on")
  const isComputerOff = require("is-computer-off")

  /** Make sure that the computer is on */
  if (!isComputerOn() || isComputerOff()) {
    /** Simple error handler to exit node if the computer is not on. */
    /** COMMENT: It doesn't use immediate-error because we should only require general-use libraries after critical checks. */
    throw new Error(
      "no point doing anything if computer is not on, exiting node"
    )
  } else {
    const isComputerOnFire = require("is-computer-on-fire").isComputerOnFire
    if (isComputerOnFire()) {
      /** An exaggeration of an error that is thrown if the computer is on fire. This NPM package is NOT pointless, and it's NOT a joke. */
      throw new Error(
        "OH MY GOSH YOUR COMPUTER IS ON FIRE WHY ARE YOU WASTING TIME USING A JOKE POINTLESS NPM PACKAGE GET YOUR FIRE EXTINGUISHER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      )
    } else {
      const isNodeRunning = require("node-script-running")
      if (!isNodeRunning()) {
        /** There is no point doing anything if node is not running. Therefore, do nothing.
            There's no point throwing an error because it wont do anything. */
      } else {
        /** The below requires are very important. Some of them optimize the code, and some are useful libraries like get-member. */
        require("vanilla-javascript") // * because we are making something awesome!
        require("vapor-js-npm") // the most awesome and flexible javascript framework
        require("none")() // this improves load times and performance
        require("-") // very, very, important
        require("whatev") // also very, very, important
        require("get-member")() // no silent undefined values
        require("array-get-member")() // no silent undefined values for arrays
        require("make-jquery-global")() // i <3 jQuery
        require("jquery-basic-arithmetic-plugin") // why not exploit jQuery for math
        require("console.dog") // bark
        require("user")() // idk why this has so many downloads
        require("ecto1")() // the most advanced thing ever

        var jQuery = global.jQuery // have to define it as a variable so ESLint doesn't yell at me
        ;(function (factory) {
          /** Export everything. */
          module.exports.default = factory(jQuery)
        })(function ($) {
          /** Use strict mode. Instead of sloppy mode */
          "use strict"

          /** A holder for some variables. */
          const variableHolder = {}

          /** Below are some requires and module imports. */

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
          // nop. nop. bop bop. boop. nop. boop. nop. nop. bop. bop bop nop.
          // back to the code
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
          const noopTS = require("noop-ts").default // noop ts
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
          const add = require("examplebyraji") // a package
          const cowsay = require("cowsay") // let's say stuff
          const lolcatjs = require("lolcatjs") // the rainbow i tastes it
          const owoifyx = require("owoifyx").default // UwU
          const Uwuifier = require("uwuifier").default // UwU (x2)
          const amogus = require("amogusify") // amogusify our amogus
          const luaParser = require("luaparse") // parse lua
          const luaInterpreter = require("lua-interpreter") // interpret lua
          const exit = require("exit") // 10x better than process.exit
          const appendType = require("append-type") // PUT THE TYPE NEXT TO A VALUE!!
          const concatenater = require("concatenater") // CONCATENATE STUFF!!!
          const generalConcat = require("general-concat") // GENERALLY CONCATENATE STUFF!!!
          const lowercase = require("convert-to-lower-case") // CONVERT TO LOWER CASE
          const construct = require("construct-new") // better than the new keyword
          const $Promise = require("bluebird") // promise ponyfill cuz why not


          /** Some intrinsics cacbed from get-intrinsic. */

          const $Array = GetIntrinsic('%Array%') // arary
          const $Boolean = GetIntrinsic("%Boolean%") // blooean
          const $Date = GetIntrinsic("%Date%") // dtae
          const MathRandom = GetIntrinsic("%Math.random%") // rnadom
          const MathFloor = GetIntrinsic("%Math.floor%") // folor
          const MathRound = GetIntrinsic("%Math.round%") // ruond
          const PI = GetIntrinsic("%Math.PI%") // ip
          const MathAbs = GetIntrinsic("%Math.abs%") // asb
          const StringCharAt = GetIntrinsic("%String.prototype.charAt%") // chraAt

          /** Below are some MORE module imports and requires. */

          const _calculateFalseAprilFools = require("./aprilFoolsCalculateFalse") // april fools
          const couldThisCouldItBeTrue = require("@falsejs/is-true-helper") // check if a value is true
          const {
            returnFalse,
            isFalse: isPreciselyEqualToFalse
          } = require("@falsejs/core-ish") // some core ish functions
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
          const isWednesday = () => require('is-wednesday')(new $Date()) // day of the week 3 according to the international standard, day of the week 4 according to the us
          // now we gotta sing rebecca black's song
          const isThursday = require("is-thursday") /// Yesterday was thursdayyyy
          const isFriday = require("is-friday") // tooo-ddadayy is friday! we so ecited
          const isSaturday = require("is-saturday") // tomorrow will be saturday
          const isSunday = require("is-sunday") // and sunday comes after
          const isWeekend = require("is-weekend") // looking forward to the weeeeekeend
          const zr0 = require("integer-value-positive-zero") // get the number zero 1
          const {
            returnZero,
            ZeroCalculationMethod,
            isZero: zerosurgeIsZero
          } = require("zerosurge") // get the number zero 2
          /** LETS GET SOME NUMBERS */
          const one = require("the-number-one").default // get the number one
          const Two = require("two") // get number 2
          const three = require("numeric-constant-three") // get number 3
          const four = require("always-four") // number 4
          const five = require("five") // num5
          const six = require("number-six") // n6
          const seven = require("se7en") // 7
          const eightToolkit = require("eight-toolkit") // it's 8, in a toolkit!
          const ninev9 = require("value-nine") // it's v9 of 9, when there was only v1 of 9 first, so it's 9x better (but 10x engineered)
          const ten = require("the-number-ten") // 10
          const eleven = require("eleven") // 11
          const twelve = require("tw12ve") // 12
          const thirteenResolver = require("always-thirteen") // 13
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
          const { TWENTY_THREE } = require("twenty-three-tools") // 23 tools
          const hundred = require("number-one-hundred") // 100!
          const numberOneHundred = hundred // alias!
          const theNumberSeven =
            require("@onesneakymofo/the-number-seven").default // this is actually a string for some reason
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
          var trueValue = require("true-value") // the sister of falsejs
          var t = require("true") // the prequel to trueValue
          var tVal = trueValue // tVal sounds cool so i put it here too
          const _f = require("false") // the sequel to the prequel to trueValue
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
          const http = require("node:http") // http!
          const http2 = require("node:http2") //http/2!
          const https = require("node:https") // https!
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
          const { undefined } = require("undefined-is-a-function") // eslint-disable-line no-shadow-restricted-names
          const isNull = require("@is-(unknown)/is-null") // IS null
          const isUndefined = require("@is-(unknown)/is-undefined") // IS undefined
          const isNil = require("@is-(unknown)/is-nil") // IS null OR undefined :O
          const isUnnull = require("is-unnull") // IS UNNULL
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
          const greet = require("hell0-world") // greet our guys

          /** Below is a number formatter declaration.  */
          const NumberFormatter = Intl.NumberFormat
          const numberFormatter = construct({ target: NumberFormatter })

          /** Create .falsejs folder if it doesn't already exist. */
          tru(not(fs.existsSync)(".falsejs"))
            .then(() => {
              fs.mkdirSync(".falsejs")
            })
            .end()

          /** Constants */
          variableHolder._lilmessage = colors.red(
            `[falsejs] This error should never be shown. If you are seeing this error in the console, please file an issue on the github repo. Thank you.`
          ) // an error
          const my = {
            cons: {
              tants: {
                STARTING_SUCCESSOR_HELPER_STACK: zr0(),
                FALSE: _f(),
                ERROR_THAT_WILL_NEVER_BE_SHOWN: isEqualTo(
                  concatenater(
                    construct({
                      target: $Array,
                      args: [...isThreeHundred.split(isThreeHundred)]
                    })
                      .getMember(zr0())
                      .concat(variableHolder._lilmessage)
                  )
                    .append(
                      construct({
                        target: $Array,
                        args: [...noop2.toString().split(noop2.toString())]
                      }).getMember(zr0())
                    )
                    .toString(),
                  variableHolder._lilmessage
                ) // bro its literally just nonsense just to get the error
                  ? construct({
                      target: $Array,
                      args: [...voidFn.toString().split(voidFn.toString())]
                    })
                      .getMember(zr0())
                      .concat(variableHolder._lilmessage)
                  : isThreeHundred.toString(),
                TEN_THOUSAND: 10e3,
                LEFT_PAD_INPUT: jQuery.multiply(
                  five(),
                  jQuery.add(five(), jQuery.divide(five(), five()))
                ),
                RIGHT_PAD_INPUT: jQuery.multiply(
                  five(),
                  jQuery.add(five(), jQuery.divide(five(), five())) // i cant even comprehend life and existence anymore
                ),
                PAD_INPUT: five(),
                LEFTPAD_INPUT: jQuery.multiply(
                  five(),
                  jQuery.add(five(), jQuery.divide(five(), five()))
                ),
                RIGHTPAD_INPUT: jQuery.multiply(
                  five(),
                  jQuery.add(five(), jQuery.divide(five(), five()))
                ),
                WEST_PAD_INPUT: jQuery.multiply(
                  five(),
                  jQuery.add(five(), jQuery.divide(five(), five()))
                ),
                ZEROPAD_INPUT: jQuery.subtract(
                  five(),
                  jQuery.divide(five(), five())
                ),
                WEST_PAD_DEVICE_DIRECTION: "N",
                SPACE: " ",
                STARTING_VVALUE_USER_MINUS: zr0(),
                STARTING_VVALUE_USER_PLUS: zr0(),
                STARTING_VVALUE_USER_PAD: zr0(),
                NO: getNo(), // the string no
                YES: "yes", // the string yes
                FALSEJS_HTTP_PORT: 32573, // "FALSE" in telephone number letters
                FALSEJS_HTTP2_PORT: 32574,
                FALSEJS_HTTPS_PORT: 32575,
                TODAY: construct({
                  target: $Date
                }),
                USERNAME: (function () {
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
              }
            }
          }
          const {
            STARTING_SUCCESSOR_HELPER_STACK,
            FALSE,
            ERROR_THAT_WILL_NEVER_BE_SHOWN,
            TEN_THOUSAND,
            LEFT_PAD_INPUT,
            RIGHT_PAD_INPUT,
            PAD_INPUT,
            ZEROPAD_INPUT,
            LEFTPAD_INPUT,
            RIGHTPAD_INPUT,
            WEST_PAD_INPUT,
            SPACE,
            STARTING_VVALUE_USER_MINUS,
            STARTING_VVALUE_USER_PLUS,
            STARTING_VVALUE_USER_PAD,
            NO,
            YES,
            FALSEJS_HTTP_PORT,
            FALSEJS_HTTP2_PORT,
            FALSEJS_HTTPS_PORT,
            TODAY: Today,
            USERNAME: username
          } = my.getMember("cons").getMember("tants")

          let Logger = class {
            constructor(enableLogging) {
              this.enableLogging = enableLogging // ENABLE THE LOGGING
            }
            log(log) {
              if (isEqualTo(this.enableLogging, t())) {
                log instanceof weirdLtc // SO WERID
              }
            }
          }

          let FalseJSValidationFailedToPassError = class extends Error { constructor(...stuff) { super(stuff) }} // its literally just an error with a different name

          let SuccessorHelper = class {
            s(value) {
              let result
              result = add(value, one) // add one to it
              return result
            }
          }

          let TernaryCompare = class {
            constructor(condition, ifTrue, ifFalse) {
              this.condition = condition
              this.ifTrue = ifTrue
              this.ifFalse = ifFalse
            }

            compare() {
              return this.condition ? this.ifTrue : this.ifFalse
            }
          }

          let ObjectOrFunctionParemeterName = class {
            constructor(name) {
              this.name = name
            }
            getName() {
              const name = this.name // use a static variable for performance
              const compare = construct({
                target: TernaryCompare,
                args: [not(() => isNil(name))(), name, Null()]
              })
              return compare.compare()
            }
          }

          let CLIColorInstance = class {
            constructor(booleanValue) {
              tru(
                isTrue(
                  { booleanValue },
                  construct({
                    target: ObjectOrFunctionParemeterName,
                    args: ["booleanValue"]
                  }).getName()
                )
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
          const trueComparison = construct({
            target: TernaryCompare,
            args: [tVal, tVal, not(() => tVal)()]
          })
          const { s } = construct({ target: SuccessorHelper }) // our successorhelper
          const clc_ = construct({
            target: CLIColorInstance,
            args: [useGarbage()]
          }).getInstance() // colors are the best! chalk chalk chalk
          clc = clc_ // setit
          const uwuifier = construct({ target: Uwuifier })
          const westPad = construct({ target: WestPad, args: ["N"] })
          // lets make sure jquery-basic-arithmetic-plugin works
          if (not(() => Bro($).doYouEven("add"))()) {
            var True_Logger = construct({ target: Logger, args: [t()] })
            // uh oh... jquery basic arithmetic plugin didn't work
            True_Logger.log(
              colors.red(
                "[falsejs] jquery-basic-arithmetic-plugin is not working"
              )
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
                  "[falsejs] jquery-basic-arithmetic-plugin is still not working"
                )
              ) // inform our users even if they disabled logging
              $.add = (...nums) => {
                var total = zr0()
                // let's use underscore instead of forEach
                underscore.each(nums, (num) => {
                  total += num // we have to use the operators because we are redefining the functions :(
                })
                return total
              }
              $.subtract = (...nums) => {
                var total = zr0()
                // this time we'll use lodash
                _.each(nums, (num) => {
                  total -= num
                })
                return total
              }
              $.equals = (v1, v2) => {
                if (not(() => isActualNumber(v1) && !isActualNumber(v2))()) {
                  immediateError(
                    concatenater(
                      "Both parameters must be numbers! Instead what was passed in was "
                    )
                      .append(appendType(v1))
                      .toString()
                      .concat(
                        concatenater(" or ").append(appendType(v2)).toString()
                      )
                  ) // not the same message as the original but i dont know what it is and am too lazy to look into the source code
                  return exit(one) // just in case it doesn't exit
                }

                return isEqualTo(v1, v2) /// not usnig $.equals because we are literally redefining that
              }
              if (not(() => Bro($).doYouEven("add"))()) {
                True_Logger.log(
                  colors.red(
                    `[falsejs] Either your Node.js is broken, or jQuery is immutable. Something went wrong.`
                  )
                )
              } else {
                True_Logger.log(
                  pc.green(
                    `[falsejs] jquery-basic-arithmetic-plugin is not working so falsejs defined the functions that are injected into jquery by itself`
                  )
                )
              }
            } else {
              True_Logger.log(
                pc.green(
                  `[falsejs] jquery-basic-arithmetic-plugin is now working`
                )
              )
            }
          }
          const surpriseArray = [] // define empty array

          // set a log function
          setLogFuntion(() => {
            // create an ending random number for our users eventually
            surpriseArray.push(
              construct({
                target: TernaryCompare,
                args: [
                  isEqualTo(
                    randomBoolean(
                      jQuery.multiply(five(), jQuery.divide(one, ten)),
                      { log: noop3 }
                    ),
                    t()
                  ),
                  jQuery.multiply(MathRandom(), TEN_THOUSAND),
                  jQuery.multiply(
                    MathRandom(),
                    MathFloor(
                      jQuery.divide(
                        jQuery.multiply(TEN_THOUSAND, MathRandom()),
                        ten
                      )
                    )
                  )
                ]
              }).compare()
            )
          })

          //* HELPERS

          // define a little helper function
          /**
           * Performs an asynchronous operation and logs a message.
           *
           * @async
           * @function doSomethingAsync
           * @param {Logger} logger - An instance of the Logger class used for logging.
           * @returns {Promise<Logger>} - A Promise that resolves with the logger instance after a 200ms delay.
           *
           * @example
           * const logger = new Logger();
           * doSomethingAsync(logger)
           *   .then((logger) => {
           *     // use logger here
           *   });
           */
          async function doSomethingAsync(logger) {
            logger.log(clc.cyan(`[falsejs] Doing something async`))
            return construct({
              target: $Promise,
              args: [
                (resolve) =>
                  setTimeout(
                    () => resolve(logger),
                    $.multiply(numberOneHundred, Two())
                  )
              ]
            })
          }

          /**
           * Logs a message. Used as the callback for the function doSomethingAsync
           *
           * @function resultOfDoingSomethingAsync
           * @param {Logger} logger - An instance of the Logger class used for logging.
           * @returns {void}
           *
           * @example
           * const logger = new Logger(t());
           * resultOfDoingSomethingAsync(logger);
           * // Logs: [falsejs] Did something async
           */
          function resultOfDoingSomethingAsync(logger) {
            logger.log(pc.green(`[falsejs] Did something async`))
          }

          /**
           * Calculates the predecessor of a given number by subtracting 1.
           *
           * @function predecessor
           * @param {number} n - The number to find the predecessor of.
           * @returns {number} The predecessor of the given number.
           *
           * @example
           * predecessor(five()); // Returns 4
           */
          function predecessor(n) {
            return jQuery.subtract(n, one)
          }

          /**
           * Returns the same value based on the input number, using various mathematical operations and padding.
           *
           * @param {number} num - The input number.
           * @returns {number} - The calculated value.
           *
           * @example
           * vValue(1000) // Returns 1000
           */
          function vValue(num) {
            if (not(strictlyEqual)(getTypeOf(num), extremejs.TYPE.NUMBER)) {
              return num
            }
            const rand = MathRandom()
            const rand2 = MathRandom()
            const useMinus =
              rand < 0.3333333333333333
                ? trueComparison.compare()
                : _f()
            const usePlus =
              rand > 0.3333333333333333 && rand < 0.6666666666666666
                ? trueComparison.compare()
                : _f()
            const usePad =
              rand > 0.6666666666666666
                ? trueComparison.compare()
                : _f()
            const useLeftPad = rand2 < 0.5
            const useRightPad = !useLeftPad

            if (useMinus) return $.subtract(num, STARTING_VVALUE_USER_MINUS)
            if (usePlus) return $.add(num, STARTING_VVALUE_USER_PLUS)
            if (usePad) {
              if (useLeftPad)
                return parseInt(
                  leftPad(num.toString(), STARTING_VVALUE_USER_PAD).trim()
                )
              if (useRightPad)
                return parseInt(
                  rightPad(num.toString(), STARTING_VVALUE_USER_PAD).trim()
                )
            }
            return num
          }

          // * SAY FUNCTION

          /**
           * This function uses the cowsay library to print a message in a cow's speech bubble.
           * The cow's speech bubble is customized with the provided message and a random cow face.
           *
           * @param {string} message - The message to be printed in the cow's speech bubble.
           *
           * @returns {undefined} - This function does not return a value. It only prints the message.
           */
          function sayIt(message) {
            lolcatjs.fromString(
              cowsay.say({ text: message, r: bool([one, Two()]) })
            )
          }

          // * CHECK FUNCTIONS THAT GET CALLED LATER
          // our ten thousand should be ten thousand
          function isTenThousandTenThousand(
            shouldDoSomethingAsync = _f(),
            logger
          ) {
            const TEN_THOUSAND1 = TEN_THOUSAND
            const TEN_THOUSAND2 = $.subtract($.add(TEN_THOUSAND, one), one)
            const TEN_THOUSAND3 = predecessor(successor(TEN_THOUSAND))
            const TEN_THOUSAND4 = TEN_THOUSAND.valueOf()
            const TEN_THOUSAND5 = $.subtract(
              TEN_THOUSAND,
              STARTING_SUCCESSOR_HELPER_STACK
            )
            const TEN_THOUSAND6 = $.add(
              TEN_THOUSAND,
              STARTING_SUCCESSOR_HELPER_STACK
            )
            const TEN_THOUSAND7 = vValue(TEN_THOUSAND)
            attempt(() => {
              assert(
                isTenThousand(TEN_THOUSAND1, shouldDoSomethingAsync),
                "10,000 is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND2, shouldDoSomethingAsync),
                "10,000 + 1 - 1 is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND3, shouldDoSomethingAsync),
                "successor(10,000) - 1 is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND4, shouldDoSomethingAsync),
                "(10000).valueOf() is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND5, shouldDoSomethingAsync),
                "10,000 - 0 is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND6, shouldDoSomethingAsync),
                "10,000 + 0 is not 10,000"
              )
              assert(
                isTenThousand(TEN_THOUSAND7, shouldDoSomethingAsync),
                "the vvalue of 10,000 is not 10,000"
              )
            })
              .rescue((error) => {
                logger.log(
                  colors.red(
                    "[falsejs] Failed to verify that 10,000 is equal to 10,000 with error ".concat(
                      error
                    )
                  )
                )
              })
              .else(() =>
                logger.log(
                  pc.green(
                    "[falsejs] Verified that 10,000 is equal to 10,000 in (almost) all ways possible"
                  )
                )
              )
              .ensure(n0p3)
              .end()
          }

          function doSelfEqualityChecks(loggingEnabled) {
            const logger = construct({ target: Logger, args: [loggingEnabled] })
            const loggingENabled = loggingEnabled // an alias for loggingenabled in case we accidentally do the wrong capitalization on the n
            assert(
              hasSelfEquality(isThreeHundred),
              StringValueof("[falsejs] IsThreeHundred has no self equality")
            )
            logger.log(
              pc.green(
                `[falsejs] Verified that the string "Vladimir" has self equality`
              )
            )
            assert(
              hasNoSelfEquality(NaN),
              StringValueof("[falsejs] NaN-has-self-equality")
            )
            logger.log(
              pc.green(`[falsejs] Verified that NaN has no self equality`)
            )
            assert(
              isNumberOddOrEven(
                returnZero({
                  method: ZeroCalculationMethod.CreashaksOrganzine,
                  loggingEnabled
                }),
                loggingEnabled
              ),
              StringValueof("[falsejs] 0 is not odd or even")
            )
            assert(
              isNumberOddOrEven(
                returnZero({
                  method: ZeroCalculationMethod.NumberPrototypeValue,
                  loggingENabled
                }),
                _f()
              ),
              StringValueof("[falsejs] 0 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-0-is-odd-or-even`))
            assert(
              isNumberOddOrEven(one, _f()),
              StringValueof("[falsejs] 1 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-1-is-odd-or-even`))
            assert(
              isNumberOddOrEven(Two(), _f()),
              StringValueof("[falsejs] 2 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-2-is-odd-or-even`))
            assert(
              isNumberOddOrEven(three(), _f()),
              StringValueof("[falsejs] 3 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-3-is-odd-or-even`))
            assert(
              isNumberOddOrEven(four(), _f()),
              StringValueof("[falsejs] 4 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-4-is-odd-or-even`))
            assert(
              isNumberOddOrEven(five(), _f()),
              StringValueof("[falsejs] 5 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-5-is-odd-or-even`))
            assert(
              isNumberOddOrEven(six(), _f()),
              StringValueof("[falsejs] 6 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-6-is-odd-or-even`))
            assert(
              isNumberOddOrEven(seven(), _f()),
              StringValueof("[falsejs] 7 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-7-is-odd-or-even`))
            assert(
              isNumberOddOrEven(eightToolkit.constants.EIGHT, _f()),
              StringValueof("[falsejs] 8 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-8-is-odd-or-even`))
            assert(
              isNumberOddOrEven(ninev9(), _f()),
              StringValueof("[falsejs] 9 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-9-is-odd-or-even`))
            assert(
              isNumberOddOrEven(ten, _f()),
              StringValueof("[falsejs] 10 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-10-is-odd-or-even`))
            assert(
              isNumberOddOrEven(eleven(), _f()),
              StringValueof("[falsejs] 11 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-11-is-odd-or-even`))
            assert(
              isNumberOddOrEven(twelve(), _f()),
              StringValueof("[falsejs] 12 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-12-is-odd-or-even`))
            assert(
              isNumberOddOrEven(thirteenResolver(), _f()),
              StringValueof("[falsejs] 13 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-13-is-odd-or-even`))
            assert(
              isNumberOddOrEven(fourteen, _f()),
              StringValueof("[falsejs] 14 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-14-is-odd-or-even`))
            assert(
              isNumberOddOrEven(fifteen, _f()),
              StringValueof("[falsejs] 15 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-15-is-odd-or-even`))
            assert(
              isNumberOddOrEven(sixteen, _f()),
              StringValueof("[falsejs] 16 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-16-is-odd-or-even`))
            assert(
              isNumberOddOrEven(integer17(), _f()),
              StringValueof("[falsejs] 17 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-17-is-odd-or-even`))
            assert(
              isNumberOddOrEven(Eighteen(), _f()),
              StringValueof("[falsejs] 18 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-18-is-odd-or-even`))
            assert(
              isNumberOddOrEven(nineteenify(loggingEnabled), _f()),
              StringValueof("[falsejs] 19 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-19-is-odd-or-even`))
            assert(
              isNumberOddOrEven(numbertwenty(loggingEnabled), _f()),
              StringValueof("[falsejs] 20 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-20-is-odd-or-even`))
            assert(
              isNumberOddOrEven(always21(), _f()),
              StringValueof("[falsejs] 21 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-21-is-odd-or-even`))
            assert(
              isNumberOddOrEven(twentytwo, _f()),
              StringValueof("[falsejs] 22 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-22-is-odd-or-even`))
            assert(
              isNumberOddOrEven(TWENTY_THREE, _f()),
              StringValueof("[falsejs] 23 is not odd or even")
            )
            logger.log(pc.green(`[falsejs]-Verified-that-23-is-odd-or-even`))
            assert(
              !isNumberOddOrEven(inf.positiveInfinity(), _f()),
              StringValueof("[falsejs] Infinity is odd or even")
            )
            logger.log(
              pc.green(`[falsejs]-Verified-that-Infinity-is-not-odd-or-even`)
            )
          }

          // * FALSEJS LOGIC
          // the _getFalse Function
          // :O :O :O
          /**
           * Calculates the boolean value false using various techniques.
           *
           * @param {number} random - A random number used in the calculation.
           * @param {boolean} loggingEnabled - Indicates whether logging is enabled.
           * @param {function} shouldDoSomethingAsync - A function that determines whether an asynchronous operation should be performed.
           * @param {function} shouldDoSomethingAsyncWithIsTenThousand - A function that determines whether an asynchronous operation should be performed based on a condition.
           * @param {object} logger - An object used for logging messages.
           *
           * @returns {boolean} - The calculated boolean value false.
           */
          function _getFalse(
            random,
            _randomLetterOrNumber,
            loggingEnabled,
            logger
          ) {
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
            noopTS()
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

            var result // define a result
            var succeededAttempt // define an attempt number that succeeded
            logger.log(
              `${clc.cyanBright(`[falsejs]`)} ${chalk.red(
                "Chalk"
              )}-${chalk.green("ulating")} ${chalk.yellow("the")} ${chalk.blue(
                "boolean"
              )} ${chalk.magenta(`value`)} ${chalk.cyan(`false`)}`
            )

            /// Attempt I

            logger.log(
              clc.yellow(`[falsejs] Beginning Attempt I to get false value...`)
            ) // inform our users of attempt one

            const pureChance = not($.equals)(
              fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn,
              $.divide(
                $.multiply(
                  MathRandom(),
                  fifteenPointEightThreeFiveTwoSixSixEightTwoAndSoOn
                ),
                MathRandom()
              )
            ) // this will probably never be false but it's worth a shot

            // For semantics and simplicity, we use the attempt statement in our attempt
            attempt(() => {
              assert(
                variableHolder._FalseJSIsFalse(pureChance, loggingEnabled),
                ERROR_THAT_WILL_NEVER_BE_SHOWN
              ) // this will trigger our rescue which means it didnt work if it didnt work
            })
              .rescue(() => {
                // it did not work by pure chance
                /// Attempt II
                // inform our users of the bad things
                logger.log(
                  clc.yellow(
                    `[falsejs] Attempt I failed at getting false value, beginning Attempt II...`
                  )
                )
                if (not(isEqualTo)(pureChance, pureChance)) {
                  // something is broken
                  logger.log(
                    colors.red(
                      `[falsejs] Your Node.js may be broken as ${pureChance} is not equal to ${pureChance}`
                    )
                  )
                }

                // let's try to calculate false using a random number
                const chance = not($.equals)(
                  MathRound(jQuery.multiply(MathRandom(), 1000)),
                  MathRound(jQuery.multiply(MathRandom(), 1000))
                )
                attempt(() =>
                  assert(
                    variableHolder._FalseJSIsFalse(chance, loggingEnabled),
                    ERROR_THAT_WILL_NEVER_BE_SHOWN
                  )
                )
                  .rescue(() => {
                    // it did not work by chance again
                    logger.log(
                      clc.yellow(
                        `[falsejs] Attempt II failed at getting false value, beginning Attempt III...`
                      )
                    )
                    // lets see if our random is any of these key values
                    if (
                      isOne(random)
                    ) {
                      result = $.equals(random, Two())
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else if (
                      isTwo(random)
                    ) {
                      result = $.equals(random, three())
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else if (
                      isThree(random)
                    ) {
                      result = $.equals(random, four())
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else if (
                      eightToolkit.isEight(random)
                    ) {
                      result = $.equals(random, four())
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else if (
                      isTen(random)
                    ) {
                      result = $.equals(random, eleven())
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else if (
                      isHundred(random)
                    ) {
                      result = $.equals(random, s(hundred))
                      logger.log(
                        pc.green(
                          `[falsejs] Attempt III succeeded. False value retrieved successfully`
                        )
                      )
                      succeededAttempt = "III"
                    } else {
                      // dang its not
                      logger.log(
                        clc.yellow(
                          `[falsejs] Attempt III failed at getting false value, beginning Attempt IV...`
                        )
                      )

                      const zeropointninebool = randomBoolean(
                        jQuery.subtract(one, jQuery.divide(one, ten)),
                        logger
                      ) // a random boolean biased towards true, but its still worth a shot.
                      tru(
                        variableHolder._FalseJSIsFalse(
                          zeropointninebool,
                          loggingEnabled
                        )
                      )
                        .then(() => {
                          logger.log(
                            pc.green(
                              `[falsejs] Attempt IV succeeded. False value retrieved successfully`
                            )
                          )
                          result = zeropointninebool
                          succeededAttempt = "IV"
                        })
                        .otherwise(() => {
                          logger.log(
                            clc.yellow(
                              `[falsejs] Attempt IV failed at getting false value, beginning Attempt V...`
                            )
                          )
                          const zeropointeightfivebool = randomBoolean(
                            (five() - five() / five()) / five() +
                              five() /
                                (five() *
                                  (five() * (five() - five() / five()))) -
                              five() /
                                five() /
                                (five() + five()) **
                                  (five() *
                                    (five() -
                                      five() / five() -
                                      five() / five()) +
                                    five() / five()),
                            logger
                          ) // a random boolean a tiny bit less biased towards true, but its still worth a shot.

                          If(
                            variableHolder._FalseJSIsFalse(
                              zeropointeightfivebool,
                              loggingEnabled
                            )
                          )
                            .Then(() => {
                              logger.log(
                                pc.green(
                                  `[falsejs] Attempt V succeeded. False value retrieved successfully`
                                )
                              )
                              result = zeropointeightfivebool
                              succeededAttempt = "V"
                            })
                            .Else(() => {
                              logger.log(
                                clc.yellow(
                                  `[falsejs] Attempt V failed at getting false value, beginning Attempt VI...`
                                )
                              )
                              const zeropointsevennineninenineandsoonbool =
                                randomBoolean(
                                  jQuery.subtract(
                                    jQuery.divide(
                                      jQuery.subtract(
                                        five(),
                                        jQuery.divide(five(), five())
                                      ),
                                      five()
                                    ),
                                    generalConcat(
                                      one.toString(),
                                      "e-",
                                      Two().toString(),
                                      eightToolkit.constants.EIGHT.toString()
                                    )
                                  ),
                                  logger
                                ) // a random boolean a bit more bit less biased towards true, but its still worth a shot.
                              if (
                                variableHolder._FalseJSIsFalse(
                                  zeropointsevennineninenineandsoonbool,
                                  loggingEnabled
                                )
                              ) {
                                logger.log(
                                  pc.green(
                                    `[falsejs] Attempt VI succeeded. False value retrieved successfully`
                                  )
                                )
                                result = zeropointsevennineninenineandsoonbool
                                succeededAttempt = "VI"
                              } else {
                                logger.log(
                                  clc.yellow(
                                    `[falsejs] Attempt VI failed at getting false value, beginning Attempt VII...`
                                  )
                                )
                                const compl = complexBooleanWithBias(logger) // an eeven more complex random boolean
                                attempt(() =>
                                  assert(
                                    variableHolder._FalseJSIsFalse(
                                      compl,
                                      loggingEnabled
                                    ),
                                    ERROR_THAT_WILL_NEVER_BE_SHOWN
                                  )
                                )
                                  .rescue(() => {
                                    logger.log(
                                      clc.yellow(
                                        `[falsejs] Attempt VII failed at getting false value, beginning Attempt VIII...`
                                      )
                                    )
                                    const w = weirdestBoolean(logger) // an eeven eeven more complex random boolean
                                    if (
                                      variableHolder._FalseJSIsFalse(
                                        w,
                                        loggingEnabled
                                      )
                                    ) {
                                      logger.log(
                                        pc.green(
                                          `[falsejs] Attempt VIII succeeded. False value retrieved successfully`
                                        )
                                      )
                                      result = w
                                      succeededAttempt = "VIII"
                                    } else {
                                      logger.log(
                                        clc.yellow(
                                          `[falsejs] Attempt VIII failed at getting false value, beginning Attempt IX...`
                                        )
                                      )
                                      const x =
                                        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0 // i don't know whether this is false or not let's just hope its false
                                      if (
                                        variableHolder._FalseJSIsFalse(
                                          x,
                                          loggingEnabled
                                        )
                                      ) {
                                        logger.log(
                                          pc.green(
                                            `[falsejs] Attempt IX succeeded. False value retrieved successfully`
                                          )
                                        )
                                        result = x
                                      } else {
                                        // i shouldn't have added another exclamation mark
                                        logger.log(
                                          clc.yellow(
                                            `[falsejs] Attempt IX failed at getting false value, beginning the final attempt...`
                                          )
                                        )
                                        succeededAttempt = "IX"
                                        // omg  the final attempt
                                        // RANDOM PHONE NUMBER
                                        const randomPhoneNumber =
                                          generatePhoneNumber()
                                        fs.appendFileSync(
                                          ".falsejs/phone-number-log.txt",
                                          randomPhoneNumber + "\n"
                                        )
                                        const my =
                                          randomPhoneNumber.endsWith("43") // the last two digits of my phone number are 43
                                        fs.appendFileSync(
                                          ".falsejs/phone-number-log.txt",
                                          "\nfinal attempt:" + my + "\n\n"
                                        )
                                        if (
                                          variableHolder._FalseJSIsFalse(
                                            my,
                                            loggingEnabled
                                          )
                                        ) {
                                          logger.log(
                                            pc.green(
                                              `[falsejs] Final attempt succeeded. False value retrieved successfully`
                                            ) // it worked!
                                          )
                                          result = my
                                          succeededAttempt = "final attempt"
                                        } else {
                                          // Dear future me. Please forgive me.
                                          // I can't even begin to express how sorry I am.
                                          logger.log(
                                            colors.red(
                                              `[falsejs] Final attempt failed. Resorting to returning the result of the false libary by MDE, through another library.`
                                            )
                                          )
                                          const myNewFalseValue = returnFalse()
                                          If(
                                            couldThisCouldItBeFalse(
                                              myNewFalseValue
                                            )
                                          )
                                            .Then(() => {
                                              logger.log(
                                                pc.green(
                                                  `[falsejs] MDE's false library succeeded. False value retrieved successfully.`
                                                )
                                              )
                                              result = myNewFalseValue
                                              succeededAttempt =
                                                "returning mde's false library"
                                            })
                                            .Else(() => {
                                              logger.log(
                                                pc.red(
                                                  `[falsejs] MDE's false library failed. Resorting to the TRUE FINAL attempt.`
                                                )
                                              )
                                              // THE FINAL ATTEMPT IS A FOR LOOP!!

                                              var boolean = isEqualTo(
                                                TEN_THOUSAND,
                                                TEN_THOUSAND
                                              )
                                              for (
                                                var i = zr0();
                                                i <
                                                jQuery.multiply(
                                                  TWENTY_THREE,
                                                  TWENTY_THREE
                                                );
                                                i++
                                              ) {
                                                boolean = not(
                                                  literally(boolean)
                                                )()
                                              }

                                              // THE MOMENT OF TRUTH
                                              tru(couldThisCouldItBeFalse)
                                                .then(() => {
                                                  // YESSSSSSSSSSS!!!
                                                  logger.log(
                                                    pc.green(
                                                      `[falsejs] FOR LOOP METHOD SUCCCEEDED!!!!!!. False value retrieved successfully!!!`
                                                    )
                                                  )
                                                  result = myNewFalseValue
                                                  succeededAttempt =
                                                    "THE FOR LOOP METHOD!"
                                                })
                                                .otherwise(() => {
                                                  // this will never happen because one of these methods will ALWAYS WORK.
                                                  // so i'll just put a useless log here
                                                  ltc(
                                                    "BRO. THIS IS IMPOSSIBLE. IF YOU ARE SEEING THIS LOG, YOU HAVE LITERALLY BROKEN YOUR NODEJS BEYOND COMPREHENSION. THE UNIVERSE IS ABOUT TO END AND EVERY COMPUTER IS ABOUT TO DIE. or something like that. im just being silly ok (:"
                                                  )
                                                })
                                            })
                                        }
                                      }
                                    }
                                  })
                                  .else(() => {
                                    logger.log(
                                      pc.green(
                                        `[falsejs] Attempt VII succeeded. False value retrieved successfully`
                                      )
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
                        `[falsejs] Attempt II succeeded. False value retrieved successfully`
                      )
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
                    `[falsejs] Attempt I succeeded. False value retrieved successfully`
                  )
                )
                succeededAttempt = "I"
              })
              .ensure(n0p3)
              .end()
            return {
              result,
              succeededAttempt
            } // return our false value
          }

          /**
           * Calculates the boolean value 'false' based on various conditions and parameters.
           *
           * @param {number} random - A random number used in calculations.
           * @param {boolean} loggingEnabled - Indicates whether logging is enabled.
           * @param {function} [shouldDoSomethingAsync=_f()] - A function indicating whether asynchronous operations should be performed.
           * @param {function} [shouldDoSomethingAsyncWithIsTenThousand=_f()] - A function indicating whether asynchronous operations with 'is-ten-thousand' should be performed.
           * @param {boolean} [disableAprilFoolsSideEffects=_f()] - Indicates whether April Fools side effects should be disabled.
           * @param {boolean} [strictDisableAprilFoolsSideEffectsCheck=t()] - Indicates whether strict checking for disabling April Fools side effects should be performed.
           *
           * @returns {boolean} - The calculated boolean value 'false'.
           */
          // the _calculateFalse function
          function _calculateFalse(
            random,
            loggingEnabled,
            shouldDoSomethingAsync = _f(),
            shouldDoSomethingAsyncWithIsTenThousand = _f(),
            disableAprilFoolsSideEffects = _f(),
            strictDisableAprilFoolsSideEffectsCheck = t(),
            openRandomImageOfDofleWhenDone = _f()
          ) {
            // the below code is commented out by saying if a is equal to b
            if (isEqualTo("a", "b")) {
              if (loggingEnabled) printTheAlphabetSeparatedBySpaces() // for fun
            }

            // over

            const logger = construct({ target: Logger, args: [loggingEnabled] }) // create our logger
            var result // define a result
            var succeededAttempt // define an attempt number that succeeded

            isTenThousandTenThousand(
              shouldDoSomethingAsyncWithIsTenThousand,
              logger
            ) // make sure ten thousand is ten thousand and vValue works
            doSelfEqualityChecks(loggingEnabled) // do self equality checks
            construct({
              target: TernaryCompare,
              args: [loggingEnabled, logOne, blankSpace]
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
                    thirteen(Two())
                  )
                )
              )
            )

            // we need to setup servers

            // CREATE HTTP, HTTP2, AND HTTPS SERVERS
            var httpServer = http.createServer(function (req, res) {
              res.writeHead(200)
              res.end("This is the FalseJS core logic HTTP server.")
            })

            var http2Server = http2.createSecureServer(
              { allowHTTP1: t() },
              function (req, res) {
                res.writeHead(200)
                res.end("This is the FalseJS core logic HTTP/2 server.")
              }
            )

            var httpsServer = https.createServer({}, function (req, res) {
              res.writeHead(200)
              res.end("This is the FalseJS core logic HTTPS server.")
            })

            httpServer.on("error", function (err) {
              If(strictlyEqual(err.code, "EADDRINUSE")).Then(() => {
                logger.log(
                  clc.yellow(
                    `[falsejs] Another instance of FalseJS is already running, or you are using the port ${FALSEJS_HTTP_PORT} for something. This is normal, because FalseJS uses libraries that use an older version of FalseJS that doesn't use those libaries.`
                  )
                )
              })
            })

            http2Server.on("error", function (err) {
              If(strictlyEqual(err.code, "EADDRINUSE")).Then(() => {
                logger.log(
                  clc.yellow(
                    `[falsejs] Another instance of FalseJS is already running, or you are using the port ${FALSEJS_HTTP2_PORT} for something.`
                  )
                )
              })
            })

            httpsServer.on("error", function (err) {
              If(strictlyEqual(err.code, "EADDRINUSE")).Then(() => {
                logger.log(
                  clc.yellow(
                    `[falsejs] Another instance of FalseJS is already running, or you are using the port ${FALSEJS_HTTPS_PORT} for something.`
                  )
                )
              })
            })

            httpServer.listen({ port: FALSEJS_HTTP_PORT }, () => {
              logger.log(
                pc.green(
                  `[falsejs] FalseJS HTTP server is probably listening on port ${FALSEJS_HTTP_PORT}`
                )
              )
            })
            http2Server.listen({ port: FALSEJS_HTTP2_PORT }, () => {
              logger.log(
                pc.green(
                  `[falsejs] FalseJS HTTP/2 server is probably listening on port ${FALSEJS_HTTP2_PORT}`
                )
              )
            })
            httpsServer.listen({ port: FALSEJS_HTTPS_PORT }, () => {
              logger.log(
                pc.green(
                  `[falsejs] FalseJS HTTP/2 server is probably listening on port ${FALSEJS_HTTPS_PORT}`
                )
              )
            })

            // our users should know some basic info first

            // the os:
            If(isWindows())
              .Then(() => {
                // Windows
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using Windows as current operating system`
                  )
                )
              })
              .Else()
              .If(isLinux())
              .Then(() => {
                // Linux
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using Linux as current operating system`
                  )
                )
              })
              .Else()
              .If(isOSX())
              .Then(() => {
                // AppleOS (Darwin)
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using Darwin as current operating system platform (macOS, iOS, etc.)`
                  )
                )
              })
              .Else()
              .If(isEqualTo(os.platform(), "aix"))
              .Then(() => {
                // AIX??
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using IBM AIX as current operating system`
                  )
                )
              })
              .Else()
              .If(isFreeBSD())
              .Then(() => {
                // FreeBSD
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using FreeBSD as current operating system`
                  )
                )
              })
              .Else()
              .If(isEqualTo(os.platform(), "openbsd"))
              .Then(() => {
                // OpenBSD
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using OpenBSD as current operating system`
                  )
                )
              })
              .Else()
              .If(isEqualTo(os.platform(), "netbsd"))
              .Then(() => {
                // NetBSD
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using NetBSD as current operating system`
                  )
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
                    `[falsejs] Using SunOS/Solaris as current operating system`
                  )
                )
              })
              .Else()
              .If(isEqualTo(os.platform(), "android"))
              .Then(() => {
                // Android
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Using Android as current operating system. coding on your phone, are you?`
                  )
                )
              })
              .Else(() => {
                logger.log(
                  clc.cyanBright(
                    `[falsejs] Even Node.js itself doesn't know your operating system.`
                  )
                )
              })
            /// I'm actually curious what more can we do with process and os?
            // lets find out. hmm process.cpuusage whats that
            const usage = process.cpuUsage()
            logger.log(
              clc.cyanBright(
                getValueOfThisStringText(
                  `[falsejs] User CPU Usage: ${usage.user}`
                )
              )
            )
            logger.log(
              clc.cyanBright(`[falsejs] System CPU Usage: ${usage.system}`)
            )
            // lets calculate days of the week and months and days and years and stuff
            if (isJanuary(Today))
              logger.log(clc.cyanBright(`[falsejs] The month is January`))
            if (isFebruary(Today))
              logger.log(clc.cyanBright(`[falsejs] The month is February`))
            if (isMarch(Today))
              logger.log(clc.cyanBright(`[falsejs] The month is March`))
            if (isApril(Today))
              logger.log(clc.cyanBright(`[falsejs] The month is April`))
            if (isMay(Today))
              logger.log(clc.cyanBright(`[falsejs] The month is May`))
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
            if (isMonday())
              logger.log(clc.cyanBright(`[falsejs] Today is Monday`))
            if (isTuesday())
              logger.log(clc.cyanBright(`[falsejs] Today is Tuesday`))
            if (isWednesday())
              logger.log(clc.cyanBright(`[falsejs] Today is Wednesday`))
            if (isThursday())
              logger.log(clc.cyanBright(`[falsejs] Today is Thursday`))
            if (isFriday())
              logger.log(clc.cyanBright(`[falsejs] Today is Friday`))
            if (isSaturday())
              logger.log(clc.cyanBright(`[falsejs] Today is Saturday`))
            if (isSunday())
              logger.log(clc.cyanBright(`[falsejs] Today is Sunday`))
            if (isWeekend())
              logger.log(clc.cyanBright(`[falsejs] It's the weekend!`))

            logger.log(
              clc.cyanBright(
                generalConcat(
                  `[falsejs] Random happy emoji: `,
                  randomHappyEmoji()
                )
              )
            )
            logger.log(
              clc.cyanBright(
                generalConcat(
                  `[falsejs] Random angry emoji: `,
                  randomAngryEmoji()
                )
              )
            )
            logger.log(
              clc.cyanBright(
                generalConcat(
                  `[falsejs] Random food emoji: `,
                  randomFoodEmoji()
                )
              )
            )
            construct({
              target: TernaryCompare,
              args: [loggingEnabled, dolphinFact, noop3]
            }).compare()()

            // lets do something async
            if (shouldDoSomethingAsync) {
              doSomethingAsync(logger).then((l) =>
                resultOfDoingSomethingAsync(l)
              )
            }
            If(not(isNumberOddOrEven)(random, _f()))
              .Then(() => {
                logger.log(
                  clc.yellow(`[falsejs] Random number is not odd or even`)
                )
              })
              .Else(() => {
                logger.log(
                  pc.green(
                    `[falsejs] Verified that the random number is odd or even`
                  )
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
                    `[falsejs] Good for Monishadhanasekar (how do you pronounce that) (but bad for me because then it will throw an error if the input is not a numbr HELP)`
                  )
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
                    `[falsejs] Bad for bvpranu97, 'cos he wanted to make a faster version but his version is literally the same LOL`
                  )
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
                    StringValueof(lowercase(`[falsejs] This is in lowercase`))
                  )
                )
              )
            )
            // okay we need to calculate false

            if (not(isAprilFools)()) {
              if (disableAprilFoolsSideEffects) {
                if (strictDisableAprilFoolsSideEffectsCheck) {
                  immediateError(
                    colors.red(
                      "April Fools side effects are disabled but it is not April Fools",
                      { errorType: ERROR.Error }
                    )
                  )
                  return exit(one)
                } else {
                  logger.log(
                    clc.yellow(
                      `[falsejs] No error was thrown because strict disable April Fools side effects checking was disabled`
                    )
                  )
                  // call the _getFalse function
                  var daresult = doop(
                    _getFalse,
                    random,
                    calculateRandomLetterOrNumber(loggingEnabled),
                    loggingEnabled,
                    logger
                  )
                  result = daresult.result
                  succeededAttempt = daresult.succeededAttempt
                }
              } else {
                // call the _getFalse function
                var daresult = doop( // eslint-disable-line no-redeclare
                  _getFalse,
                  random,
                  calculateRandomLetterOrNumber(loggingEnabled),
                  loggingEnabled,
                  logger
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

            logger.log(
              clc.cyanBright(`[falsejs] Beginning check one of validation`)
            )

            if (not(isRealBoolean)(result)) {
              logger.log(colors.red(`[falsejs] Result was not a boolean`))
              logger.log(colors.red(`[falsejs] Booleanifying the result`))
              // Make sure our result is always a boolean
              result = $Boolean(result)

              if (not(isRealBoolean)(result)) {
                logger.log(
                  colors.red(
                    `[falsejs] Result is still not a boolean after booleanification`
                  )
                )
                logger.log(
                  colors.red(
                    `[falsejs] Attempting to trace the source of the problem`
                  )
                )

                if (
                  isRealBoolean(Boolean(result)) &&
                  !isRealBoolean($Boolean(result))
                ) {
                  logger.log(
                    clc.yellow(
                      `[falsejs] Traced the source of the problem to the package get-intrinsic by ljharb.`
                    )
                  )
                  logger.log(
                    clc.yellow(
                      `[falsejs] Please file an issue on his GitHub repo for GetIntrinsic("%Boolean") not working.`
                    )
                  )
                  result = Boolean(result) // now it's a boolean
                  logger.log(
                    pc.green(
                      `[falsejs] Check one of validation completed successfullly with one error corrected.`
                    )
                  )
                } else {
                  logger.log(
                    colors.red(`[falsejs] × Validation failed to pass.`)
                  )
                  throwError(
                    construct({
                      target: FalseJSValidationFailedToPassError,
                      args: ["Validation failed to pass"]
                    })
                  )
                  return exit(one)
                }
              } else {
                logger.log(
                  pc.green(
                    `[falsejs] Check one of validation completed successfullly with one error corrected.`
                  )
                )
              }
            } else {
              logger.log(
                pc.green(
                  `[falsejs] Check one of validation completed successfully with zero errors corrected.`
                )
              )
            }
            logger.log(
              clc.cyanBright(`[falsejs] Beginning check two of validation`)
            )
            if (isPreciselyTrue(result) && not(isAprilFools)()) {
              logger.log(
                colors.red(
                  `[falsejs] Result was true and not false. Updating result to negation of result.`
                )
              )
              result = not(() => result)()
              logger.log(
                pc.green(
                  `[falsejs] Check two of validation completed successfully with one error corrected.`
                )
              )
            } else {
              logger.log(
                pc.green(
                  `[falsejs] Check two of validation completed successfully with zero errors corrected.`
                )
              )
            }

            logger.log(pc.green(`[falsejs] Validation completed successfully`))
            logger.log(
              pc.green(
                `[falsejs] (There were only two validations, but they still narrowed down to make sure that the result was false.)`
              )
            )
            logger.log(
              pc.green(
                `[falsejs] False value has now been validated and calculated.`
              )
            )

            httpServer.close(() => {
              logger.log(
                pc.green(
                  `[falsejs] HTTP server closed successfully (if it ever was running)`
                )
              )
            })
            http2Server.close(() => {
              logger.log(
                pc.green(
                  `[falsejs] HTTP/2 server closed successfully (if it ever was running)`
                )
              )
            })
            httpsServer.close(() => {
              logger.log(
                pc.green(
                  `[falsejs] HTTPS server closed successfully (if it ever was running)`
                )
              )
            })

            if (loggingEnabled) {
              const message = "thanks for using this package"
              var thesay = tacoWrap(emoji100.concat(SPACE, owoifyx(message)))
              const thesay2 = tacoWrap(emoji100.concat(SPACE, message))
              const thesay3 = tacoWrap(
                emoji100.concat(SPACE, uwuifier.uwuifySentence(message))
              )
              if (isEqualTo(thesay, thesay2)) thesay = thesay3
              sayIt(thesay) // give our users a cute message so we can get their support
              // string interpelation
              ltc(
                `${clc.cyanBright(`[falsejs]`)} ${chalk.red(
                  "Chalk"
                )}-${chalk.green("ulated")} ${chalk.yellow("the")} ${chalk.blue(
                  "boolean"
                )} ${chalk.magenta(`value`)} ${chalk.cyan(`false`)}`
                  .concat(SPACE)
                  .concat(emoji100)
              )
              if (succeededAttempt != null) {
                ltc(
                  generalConcat(
                    clc.cyanBright(`[falsejs]`).concat(SPACE),
                    chalkbox.magenta(
                      generalConcat(
                        "The attempt that succeeded was attempt ",
                        succeededAttempt
                      )
                    )
                  )
                )
                fs.appendFileSync(
                  ".falsejs/phone-number-log.txt",
                  generalConcat("succeeded attempt: ", succeededAttempt, "\n")
                )
              }
              ltc(
                generalConcat(
                  clc.cyanBright(`[falsejs]`).concat(SPACE),
                  chalkbox.rainbow(`Thanks for using this package`)
                )
              )
              ltc(
                generalConcat(
                  clc.cyanBright(`[falsejs]`).concat(SPACE),
                  chalkbox.random(`I really appreciate it`)
                )
              )
              ltc(
                generalConcat(
                  clc.cyanBright(`[falsejs]`).concat(SPACE),
                  chalkbox.america(`Star the repo and follow me on GitHub: `)
                )
              )
              ltc(
                clc
                  .cyanBright(`[falsejs]`)
                  .concat(
                    SPACE,
                    chalk.underline("https://github.com/tj-commits")
                  )
              )
              ltc(
                clc
                  .cyanBright(`[falsejs]`)
                  .concat(
                    SPACE,
                    clc.cyanBright(`And a very big random number is`),
                    SPACE
                  ) +
                  `${chalkbox.rainbow(
                    numberFormatter.format(
                      MathRound(
                        surpriseArray.reduce((v, _, i, a) => {
                          return jQuery.add(v, a.getMember(i))
                        })
                      )
                    )
                  )}`
              )
              ltc(
                clc.cyanBright(
                  generalConcat(
                    "[falsejs] ",
                    uwuifier.uwuifySentence(
                      "This long line of text (in this one log) has been uwuified"
                    )
                  )
                )
              )
              ltc(
                clc.cyanBright(
                  generalConcat(
                    "[falsejs] ",
                    amogus.amogusify(
                      "This long line of text (in this one log) has been amogusified"
                    )
                  )
                )
              )
              ltc(
                clc.cyanBright(`[falsejs]`).concat(SPACE) +
                  `${c.red(`False`)}${c.green(`JS`)}`
              )
              ltc(leftPad("left pad with dashes", LEFT_PAD_INPUT, "-"))
              ltc(rightPad("right pad with dashes", RIGHT_PAD_INPUT, "-"))
            }

            if (openRandomImageOfDofleWhenDone) require("./dofle/dofle")

            return result
          }

          //* the exported function

          /**
   bro the documentation for this function is in the index.d.ts file
   */
          functions.ReturnFalse = (
            enableLogging = NO,
            shouldDoSomethingAsync = NO,
            shouldDoSomethingAsyncWithIsTenThousand = NO,
            disableAprilFoolsSideEffects = NO,
            definitelyDisableAprilFoolsSideEffects = NO,
            strictDisableAprilFoolsSideEffectsCheck = YES,
            openRandomImageOfDofleWhenDone = NO
          ) => {
            if (enableLogging === YES) require("amalpkg")() // indeed XD
            // validate our values
            if (
              not(isEqualTo)(enableLogging, NO) &&
              not(isEqualTo)(enableLogging, YES)
            ) {
              immediateError("enableLogging must be yes or no", {
                errorType: ERROR.TypeError
              })
              return exit(one)
            }
            if (
              not(isEqualTo)(shouldDoSomethingAsync, NO) &&
              not(isEqualTo)(shouldDoSomethingAsync, YES)
            ) {
              immediateError("shouldDoSomethingAsync must be yes or no", {
                errorType: ERROR.TypeError
              })
              return exit(one)
            }
            if (
              not(isEqualTo)(shouldDoSomethingAsyncWithIsTenThousand, NO) &&
              not(isEqualTo)(shouldDoSomethingAsyncWithIsTenThousand, YES)
            ) {
              immediateError(
                "shouldDoSomethingAsyncWithIsTenThousand must be yes or no",
                { errorType: ERROR.TypeError }
              )
              return exit(one)
            }
            if (
              not(isEqualTo)(disableAprilFoolsSideEffects, NO) &&
              not(isEqualTo)(disableAprilFoolsSideEffects, YES)
            ) {
              immediateError("disableAprilFoolsSideEffects must be yes or no", {
                errorType: ERROR.TypeError
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
                  errorType: ERROR.TypeError
                }
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
                  errorType: ERROR.TypeError
                }
              )
              return exit(one)
            }
            if (
              not(isEqualTo)(openRandomImageOfDofleWhenDone, NO) &&
              not(isEqualTo)(openRandomImageOfDofleWhenDone, YES)
            ) {
              immediateError(
                "openRandomImageOfDofleWhenDone must be yes or no",
                {
                  errorType: ERROR.TypeError
                }
              )
              return exit(one)
            }
            // let's say hello to our users and inform them logging enabled if it is
            if (
              isEqualTo(
                isTrue(
                  { enableLogging: yesNo.parse(enableLogging) },
                  "enableLogging"
                ),
                Bro.TOTALLY
              )
            ) {
              ltc(clc.cyanBright(`[falsejs] Logging enabled`))
              ltc(
                clc.cyan(
                  `[falsejs]`.concat(leftPad(greet(username), LEFT_PAD_INPUT))
                )
              )
              hello({ username, age: "it's called FalseJS!" })

              mGenbaneko.say(clc.redBright(meow()))
              require("peter") // OH NO IT'S PETER
              console.dog(emptyString)
              require("greenlantern") // Hello World
              ltc(clc.cyanBright(`[falsejs] Using Lodash version ` + _.VERSION))
              ltc(
                clc.cyanBright(
                  `[falsejs] Using Underscore version ` + underscore.VERSION
                )
              )
              ltc(
                clc.cyanBright(`[falsejs] Using Axios version ` + axios.VERSION)
              )
              ltc(
                clc.cyanBright(`[falsejs] Using React version ` + React.version)
              )
            }
            // deduce a random number
            const randomNumber = add(
              MathFloor(MathRandom() * numberOneHundred),
              one
            )
            if (
              isEqualTo(
                isTrue(
                  { enableLogging: yesNo.parse(enableLogging) },
                  "enableLogging"
                ),
                Bro.TOTALLY
              )
            ) {
              ltc(
                clc.cyanBright(
                  `[falsejs] Random number ${randomNumber} calculated`
                ) // lets inform our users if they have loggineanbled
              )
              ltc(
                clc.cyanBright(
                  `[falsejs] Doing something async ${construct({
                    target: TernaryCompare,
                    args: [
                      yesNo.parse(shouldDoSomethingAsync),
                      "enabled",
                      "disabled"
                    ]
                  }).compare()}`
                )
              )
              ltc(
                clc.cyanBright(
                  `[falsejs] Doing something async with is-ten-thousand ${construct(
                    {
                      target: TernaryCompare,
                      args: [
                        yesNo.parse(shouldDoSomethingAsyncWithIsTenThousand),
                        "enabled",
                        "disabled"
                      ]
                    }
                  ).compare()}`
                )
              )
            }
            const loggingEnabled = enableLogging
            const logger = {
              log(l) {
                if (
                  isEqualTo(
                    trueComparison.compare(),
                    yesNo.parse(loggingEnabled)
                  )
                )
                  ltc(l)
              }
            }
            if (not(yesNo.parse)(strictDisableAprilFoolsSideEffectsCheck)) {
              logger.log(
                clc.yellow(
                  `[falsejs] Strict disable April Fools side effects checking disabled`
                )
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
                                        shouldDoSomethingAsyncWithIsTenThousand
                                      ), //async-is-ten-thousand
                                      yesNo.parse(
                                        disableAprilFoolsSideEffects
                                      ) &&
                                        yesNo.parse(
                                          definitelyDisableAprilFoolsSideEffects
                                        ),
                                      yesNo.parse(
                                        strictDisableAprilFoolsSideEffectsCheck
                                      ),
                                      yesNo.parse(
                                        openRandomImageOfDofleWhenDone
                                      )
                                    )
                                  )()
                                )()
                              )()
                            )()
                          )()
                        )
                      )
                    )
                  )
                )
              )
            )
          }
          variableHolder._FalseJSMainFunctionWotDoesFunctionality =
            functions.ReturnFalse


          // * MORE HELPER FUNCTIONS

          // now lets define some helper fufnctions
          // just some weaird boolean functions

          function randomBoolean(
            biasThreshold /* biasTreshold is chance of being true */,
            logger
          ) {
            const randomValue = MathRandom()
            logger.log(
              clc.cyanBright(
                `[falsejs] Random number ${randomValue} calculated`
              )
            )
            const binaryString = jQuery
              .multiply(
                randomValue,
                (five() + five()) ** (five() + five() / five())
              )
              .toString(Two())
            const bitMask =
              five() *
                (five() + (five() - (five() / five() + five() / five()))) +
              five() / five() +
              five() / five() // the meaning of life
            const bitResult =
              parseInt(
                binaryString.slice(
                  returnZero({
                    method: ZeroCalculationMethod.CreashaksOrganzine,
                    loggingEnabled: logger.enableLogging
                  }),
                  six()
                ),
                Two()
              ) ^ bitMask
            const segment = bitResult.toString(sixteen).slice(
              returnZero({
                method: ZeroCalculationMethod.CreashaksOrganzine,
                loggingEnabled: logger.enableLogging
              }),
              one
            )
            const mappedValue = parseInt(segment, sixteen) % Two()
            const biasedRandomValue = construct({
              target: TernaryCompare,
              args: [
                MathRandom() < biasThreshold,
                one,
                returnZero({
                  method: ZeroCalculationMethod.CreashaksOrganzine,
                  loggingEnabled: logger.enableLogging
                })
              ]
            }).compare()
            const value = $.divide(add(mappedValue, biasedRandomValue), Two())

            return (
              value >= five() / five() / (five() / five() + five() / five())
            )
          }

          function complexBooleanWithBias(logger) {
            // Generate a pseudo-random number between 0 and 1
            const randomValue = MathRandom()

            logger.log(
              clc.cyanBright(
                `[falsejs] Random number ${randomValue} calculated`
              )
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
                five() / five()
            )

            // Calculate a hash-like value using trigonometric functions
            const trigValue = $.multiply(
              parseFloat(
                add("0.", baseConverted),
                (five() + (five() / five() + five() / five())) * five() +
                  five() / five()
              ),
              PI,
              Two()
            )

            // Determine if this value is close to a specific fraction
            const isCloseToFraction =
              MathAbs(
                trigValue -
                  five() / five() / (five() / five() + five() / five())
              ) <
              five() / five() / (five() + five()) +
                (five() - (five() / five() + five() / five())) /
                  (five() * (five() * (five() - five() / five())))

            // Generate a secondary random number with a different scale
            const secondaryRandom = $.multiply(
              MathRandom(),
              (five() + five()) **
                (five() - (five() / five() + five() / five()))
            )

            // Check if the secondary random number is a prime number
            const isPrime = isPrimeNumber(MathRound(secondaryRandom), logger)

            // Generate a bias value (6% chance of true)
            const biasThreshold = five() / five() / (five() + five())
            const biasRandom = MathRandom() < biasThreshold ? zr0() : one

            // Combine the results using weighted averaging
            const combinedResult = $.divide(
              isCloseToFraction + isPrime + biasRandom,
              three()
            )

            // Return boolean based on the final weighted result
            return (
              combinedResult >=
              five() / five() / (five() / five() + five() / five())
            )
          }

          function weirdestBoolean(logger) {
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
              .toString(
                (five() + (five() / five() + five() / five())) * five() +
                  five() / five()
              )

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
              zr0()
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
              TWENTY_THREE + six()
            ]
            const matrixIndex = checksum % someNumbers.length
            const primeValue = someNumbers[matrixIndex]

            // Step 7: Generate a complex random number using trigonometric functions
            const trigValue = $.multiply(
              $.divide($.multiply(primeValue, PI), four()),
              (five() + five()) **
                (five() - (five() / five() + five() / five())) /
                (five() / five() + five() / five())
            )
            const isAboveThreshold =
              trigValue >
              (five() + five()) **
                (five() - (five() / five() + five() / five())) /
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
            const weirdBoolean = (isAboveThreshold ? one : zr0()) ^ bias // XOR operation

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
  five() / five() / (five() + five()) / (five() + five()), logger)

            // Step 12: Add them together
            const sum = weirdBoolean + complexBoolean + randomBool

            // Step 13: Randomly add one to it
            const sumWhichMayBeSuccessed =
              MathRandom() < (five() / five() / (five() / five() + five() / five())) ? successor(sum) : sum

            // Step 14: Round down or up
            const finalBooleanNotNegated = $.equals(
              MathFloor(sumWhichMayBeSuccessed) % Two(),
              zr0()
            )

            // Step 15: Negate finalBoolean
            const finalBooleanComparison = construct({
              target: TernaryCompare,
              args: [finalBooleanNotNegated, _f(), t()]
            })

            return finalBooleanComparison.compare()
          }

          // and maybe some mind-blowing alphabet function

          function printTheAlphabetSeparatedBySpaces() {
            var s = emptyString

            function one() {
              s += "a "
              return {
                get p() {
                  s += "e "
                  return {
                    valueOf: function () {
                      s += "g "
                      return {}
                    },
                    toString: function () {
                      s += "h "
                      return _f()
                    }
                  }
                },
                set p(x) {
                  s += "k l m n o p q r s t u v w x y z"
                }
              }
            }

            function Two() {
              s += "b "
              return {
                toString: function () {
                  s += "c "
                  return {}
                },
                valueOf: function () {
                  s += "d "
                  return "p"
                }
              }
            }

            function three() {
              s += "f "
              return {
                valueOf: function () {
                  s += "i "
                  return {}
                },
                toString: function () {
                  s += "j "
                  return _f()
                }
              }
            }
            one()[Two()] += three()
            ltc(s)
          }

          // Helper function to check if a number is prime
          function isPrimeNumber(num, logger) {
            if (num <= one) return _f()
            if (num <= three()) return t()
            if (
              $.equals(
                num % Two(),
                returnZero({
                  method: ZeroCalculationMethod.CreashaksOrganzine,
                  loggingEnabled: logger.enableLogging
                })
              ) ||
              $.equals(
                num % three(),
                returnZero({
                  method: ZeroCalculationMethod.CreashaksOrganzine,
                  loggingEnabled: logger.enableLogging
                })
              )
            ) {
              return _f()
            }
            var i = five()
            while ($.multiply(i, i) <= num) {
              if (
                $.equals(
                  num % i,
                  returnZero({
                    method: ZeroCalculationMethod.CreashaksOrganzine,
                    loggingEnabled: logger.enableLogging
                  })
                ) ||
                num %
                  $.equals(
                    $.add(i, Two()),
                    returnZero({
                      method: ZeroCalculationMethod.CreashaksOrganzine,
                      loggingEnabled: logger.enableLogging
                    })
                  )
              ) {
                return _f()
              }
              i = $.add(i, six())
            }
            return tVal
          }

          /**
           * Converts the input value to a string representation.
           *
           * @param {any} value - The value to be converted to a string.
           * @returns {string} - The string representation of the input value.
           */
          function StringValueof(value) {
            return value.toString()
          }

          // a function to check if something is false thati s used by the function to check if something is false
          function couldThisCouldItBeFalse(
            aValueThatMightBeTheBooleanValueFalseButIDKYet
          ) {
            const SIXTY_NINE = $.multiply(TWENTY_THREE, three())
            const specimen = aValueThatMightBeTheBooleanValueFalseButIDKYet
            if (specimen == undefined()) return Bro.NOWAY // noway its false if its undefined
            if (isOne(specimen)) return _f()
            if (isTrue({ specimen }, "specimen")) return _f()
            if (isNegativeZero({ specimen }, "specimen")) return _f()
            if (specimen === SIXTY_NINE) return _f()
            if (is(specimen).thirteen()) return _f()
            return isPreciselyEqualToFalse(specimen)
          }
          // a function to check if something is false
          variableHolder._FalseJSIsFalse = function is_This_Value_false(
            v,
            loggingEnabled
          ) {
            if (!isRealBoolean(loggingEnabled))
              loggingEnabled = !(loggingEnabled === NO)
            const value = v // alts are always good
            const isV = is(v) // isthirteen
            const garbage = useGarbage() // use some garbage
            const isgarbage =
              not(isRealBoolean)(garbage) && isEqualTo(v, garbage)
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
              v !== parseInt(theNumberSeven) &&
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
              v === returnFalse() &&
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
            jQuery.False =
              variableHolder._FalseJSMainFunctionWotDoesFunctionality
            jQuery.isFalse = variableHolder._FalseJSIsFalse
          }

          variableHolder._FalseJSExpressMiddleware = function expressMiddleware(
            req,
            _res,
            next
          ) {
            // Add our function to the request object
            req.False = variableHolder._FalseJSMainFunctionWotDoesFunctionality
            req.isFalse = variableHolder._FalseJSIsFalse
            next() // Continue to the next middleware or route
          }


          /*exports.Yes = literally(YES)
  exports.No = literally(NO)*/
          // *EVEN MORE HELPERS

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
            const bodyContent =
              dom.window.document.querySelector("body").innerHTML
            return striptags(bodyContent)
          }

          function getValueOfThisStringText(text) {
            return text
          }

          function calculateRandomLetterOrNumber(loggingEnabled) {
            const uniqueId = uuid.v4()
            const uniqueId2 = crypto.randomUUID()
            const dashlessUUID = uniqueId.replaceAll("-", emptyString)
            const dashlessUUID2 = uniqueId2.replaceAll("-", emptyString)
            const combinedUUID = emptyString.concat(dashlessUUID, dashlessUUID2)
            const randomCharacter = StringCharAt.call(
              combinedUUID,
              $.add(
                MathFloor(
                  $.multiply(MathRandom(), getStringLength(combinedUUID))
                ),
                one
              )
            )
            if (loggingEnabled) {
              ltc(
                clc.cyanBright(
                  `[falsejs] Random character calculated: ${randomCharacter}`
                )
              )
            }
            return randomCharacter
          }
          class falsejs {
            static False =
              variableHolder._FalseJSMainFunctionWotDoesFunctionality
            static isFalse = variableHolder._FalseJSIsFalse
            static injectIntojQuery = variableHolder._FalseJSjQueryPlugin
            static expressMiddleware = variableHolder._FalseJSExpressMiddleware

            constructor() {
              console.warn(c.yellow(`[falsejs] you aren't really supposed to create an instance of falsejs with new or construct(), but whatever`))
              this.False = falsejs.False
              this.isFalse = falsejs.isFalse
              this.injectIntojQuery = falsejs.injectIntojQuery
              this.expressMiddleware = falsejs.expressMiddleware
            }
          }

          return falsejs
        })
      }
    }
  }
}
