<img src="falsejs-logo.png" alt="Logo" width="600">

# FalseJS

#### Better than the keyword itself.

Ever wondered what would happen if JavaScript changed the `false` keyword to something else, like `no`, `nope`, `noway`, or something else? Chaos. That is what FalseJS is for.



The 10 attempts to get the value of false ensure that if one fails, it will go on to the next, so if JavaScript breaks one, there will still be more attempts. This is an alternative to the library `false` by mde, which uses the hardcoded boolean value `false` (which I believe they are trying to resolve on the sister library `true`, which will probably be passed down to the `false` library), and is way too short. FalseJS is way better. It includes checks for whether your computer is on fire as well, just in case it *is* on fire.

## Installation

Install FalseJS with your favorite package manager.

NPM: `npm install @falsejs/falsejs`

Yarn: `yarn add @falsejs/falsejs`

PNPM: `pnpm add @falsejs/falsejs`

Import it with require:

```javascript
const falsejs = require("@falsejs/falsejs").default
```

Import it with import:

```javascript
import falsejs from "@falsejs/falsejs"
```

## Usage

`falsejs.False` is a function that calculates the boolean value false and returns it. It takes three arguments.

```
function False(
  loggingEnabled?: "yes" | "no",
  shouldDoSomethingAsync?: "yes" | "no",
  shouldDoSomethingAsyncWithIsTenThousand?: "yes" | "no",
  disableAprilFoolsSideEffects?: "yes" | "no",
  definitelyDisableAprilFoolsSideEffects?: "yes" | "no",
  strictDisableAprilFoolsSideEffectsCheck?: "yes" | "no"
): boolean
```

The first argument is `loggingEnabled`, which is whether to output useful and funny logs or not. This can be `"yes"` or `"no"`. Some logs may still be output even when you pass in `"no"`, because FalseJS uses other libraries that may log things without user consent. `"yes"` and `"no"` are basically `true` and `false`, except the whole reason you're calling the function is to get a boolean, so it wouldn't make sense to pass in a boolean.

The second argument, `shouldDoSomethingAsync`, is whether FalseJS should do an asyncronhous promise-based setTimeout and when it's done, if logging is enabled, output `[falsejs] Did something async` in green. This is just a pointless feature that is by default `"no"`, because it can be `"yes"` or `"no"`.

The third argument, `shouldDoSomethingAsyncWithIsTenThousand`, is whether `is-ten-thousand`, a package used by FalseJS, should have an asynchronous promise-based setTimeout before it checks if a value is 10,000. It can be `"yes"` or `"no"`.

The fourth and fifth arguments, `disableAprilFoolsSideEffects` and `definitelyDisableAprilFoolsSideEffects`, can be `"yes"` or `"no"`. Both of them have to be `"yes"` to bypass the side effects of it being April Fools? What side effects, you may ask? Well, let's just say, FalseJS does something different on April Fools. If these are enabled when it's not April Fools, then an error will be thrown, unless the sixth argument, `strictDisableAprilFoolsSideEffectsCheck`, is `"no"`.

And the last argument is the compatibility mode argument. This one has its own section about how it works which is after the example.

## Example

```javascript
const falsejs = require("@falsejs/falsejs").default
const falseValue = falsejs.False("yes", "yes", "yes", "yes", "yes", "no", falsejs.COMPATIBILITY_MODE.NONE) // outputs a bunch of logs

console.log(falseValue) // outputs false
```

## Legacy Compatibility Modes
To ensure the integrity of the returned boolean across every known runtime environment since the dawn of the internet, the `falsejs.False` function supports an optional `compatibilityMode` argument. The checks performed may seem CPU-intensive and unnecessary, but they guarantee that the runtime environment is free of historical browser quirks that could threaten the stable return value of false.

Here's an example:
```javascript
const myIE5CompatibleFalseValue = falsejs.False("yes", "yes", "yes", "yes", "yes", "no", falsejs.COMPATIBILITY_MODE.IE5) // Using IE5 compatibility mode
```

| Mode | Description | Possible Side Effects |
|----------|----------|----------|
| `falsejs.COMPATIBILITY_MODE.NONE` | Standard modern behavior | No side effects and extra checks for legacy compatibility. |
| `falsejs.COMPATIBILITY_MODE.IE5` | Activates JScript Engine Coercion Guard. Runs checks to ensure `false` is not improperly converted by an emulated 1999 environment. | May increase CPU usage to simulate JScript garbage collection. |
| `falsejs.COMPATIBILITY_MODE.NETSCAPE` | Activates the JavaScript 1.1 Type Coercion Audit. Runs extensive type-coercion validation and audits the DOM for the deprecated Netscape `<layer>` tag. | May cause computer overload due to repetitive type-coercion audits, and it may cause memory leaks due to not cleaning up JSDOM.  |
| `falsejs.COMPATIBILITY_MODE.OPERA_PRESTO` | Simulates the single-threaded nature of the Presto engine and audits the global state for known Opera non-standard features. | May cause memory leaks, and block CPU during a ~0ms latency.  |


## `isFalse` function

FalseJS also exports a function called `isFalse`, which returns true if the value is false, otherwise false. This can be used to test whether FalseJS worked and returned false (like it wouldn't, so there's no need to do that). `falsejs.isFalse` just takes in a value and returns true if the value is false.

It takes in two parameters, the value to check whether it is false, and `loggingEnabled` which can be `"yes"` or `"no"`.

Example:

```javascript
const falsejs = require("@falsejs/falsejs").default
const falseValue = falsejs.False("yes", "yes", "yes", "yes", "yes", "no", falsejs.COMPATIBILITY_MODE.NONE)
const trueValue = require("true-value")

console.log(falsejs.isFalse(falseValue)) // true
console.log(falsejs.isFalse(false)) // probably true
console.log(falsejs.isFalse(trueValue)) // false
console.log(falsejs.isFalse("hi")) // false
```

`falsejs.isFalse` can also be used as an alternative to running the `falsejs.False` function and instead just passing a value that isn't false into `falsejs.isFalse`.

## CLI

NPM:

```
npm install -g @falsejs/falsejs
```

Yarn:

```
yarn add -g @falsejs/falsejs
```

PNPM:

```
pnpm add -g @falsejs/falsejs
```

FalseJS provides a CLI.

```bash
$ npm install -g @falsejs/falsejs
$ false
false
```

## jQuery plugin

A jQuery plugin is also provided for FalseJS. Here is an example:

```javascript
const falsejs = require("@falsejs/falsejs").default
global.jQuery = require("jquery")
falsejs.injectIntojQuery()

const $ = jQuery

const myFalseValue = $.False("yes", "yes", "yes", "yes", "yes", "no", falsejs.COMPATIBILITY_MODE.NONE)
console.log(myFalseValue) // false
console.log($.isFalse(myFalseValue)) // true
```

## Express middleware

Express middleware is also exported. Here is an example:

```javascript
const express = require("express")
const falsejs = require("@falsejs/falsejs").default
const Bro = require("brototype")

const app = express()
const PORT = Bro(process).doYouEven("env.PORT") ? process.env.PORT : 3000

app.use(falsejs.expressMiddleware)

app.get("/", (req, res) => {
  res.send(req.isFalse(req.False("yes", "yes", "yes", "yes", "yes", "no", falsejs.COMPATIBILITY_MODE.NONE)) // sends true to the client
})

app.listen(PORT)
```

## April Fools Behavior

### **Not April Fools Day**

- **FalseJS will return** `false` by default.
- The flags `disableAprilFoolsSideEffects` and `definitelyDisableAprilFoolsSideEffects` **do not affect the behavior** of FalseJS. It behaves normally as it would on any non-April Fools' Day.
  - However, if `strictDisableAprilFoolsSideEffectsCheck` is **not `no"`** and instead `"yes"` (by default it's `"yes"`), it will throw an error if these options are set to `"yes"`, because it's not April Fools' Day, and there are no side effects to disable.
  - If `strictDisableAprilFoolsSideEffectsCheck` is set to **"no"**, FalseJS behaves normally without throwing an error, even if the side effect parameters are set to `"yes"`.

### **April Fools Day**

- **On April Fools' Day**, FalseJS **always returns `true`**, regardless of the state of the flags.
- **To prevent this behavior**, you must set both `disableAprilFoolsSideEffects` to `"yes"` and `definitelyDisableAprilFoolsSideEffects` to `"yes"` when you call FalsejS.
  - If these flags are set to `"yes"`, FalseJS will return its expected behavior (return `false`), even on April Fools' Day.

### **Best Usage For April Fools Behavior**

This usage ensures that you will always get `false` whether it's April Fools or not and no errors.

```js
const falsejs = require("@falsejs/falsejs").default
const isAprilFools = require("is-april-fools")
const disableAprilFoolsSideEffects = isAprilFools() ? "yes" : "no"
const disableChecking = isAprilFools() ? "no" : "yes"

const falseValue = falsejs.False(
  "no",
  "no",
  "no" /*the first three options you can choose, for examples we set them all to "no"*/,
  disableAprilFoolsSideEffects,
  disableAprilFoolsSideEffects,
  disableChecking,
  falsejs.COMPATIBILITY_MODE.NETSCAPE // for this example we'll use netscape compatibility mode
)

// or you can do this, but the above is better

const falseValue = falsejs.False(
  "no",
  "no",
  "no" /*the first three options you can choose, for examples we set them all to "no"*/,
  "yes",
  "yes",
  "no",
  falsejs.COMPATIBILITY_MODE.NETSCAPE // for this example we'll use netscape compatibility mode
)
```

## Important
In the console you may see this error:
```
Warning: React does not recognize the `getMember` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `getmember` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
    at div
    at NoComponent
```
This is normal. Do not worry. FalseJS uses a package called `get-member` that adds a `getMember` method to every object. React elements are objects, so it gets confused. You may wonder why there's a React error even if you're not using React, but FalseJS uses React.

## Related Projects

- [true-value](https://github.com/tj-commits/true-value) (the sister project)
- [false](https://github.com/mde/false)
- [true](https://github.com/mde/true)
- [alternative-true](https://github.com/donavon/alternative-true)
- [undefined-is-a-function](https://github.com/donavon/undefined-is-a-function)

## License

FalseJS uses the MIT license.

## made with HEAVY BLACK HEART U+2764




Making this was very hard, but I was dedicated and now there's a 3000-line long library just to return false. Please help me. Please.