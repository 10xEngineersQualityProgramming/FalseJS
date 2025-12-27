# Changelog

All notable changes to this project will be documented in this file.
Note: Version number changes and dependency installs mostly aren't documented in Changed.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## `falsejs` 1.1.3
Commit Names: [improvements](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/724c745be75db57a39ea92d1bb5a1b25fa2558af), [update version](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/4d818e1383159a302e6f9f845f3beeabc9df1c4a)

### Added
- Related projects section in README

### Changed
- Used `vapor-js-npm`
- Used more libraries
- Updated some code comments
- Other misc changes, see the commit


## `falsejs` 1.1.2
Commit Names: [cli update and readme](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/cd07ca4ad259b51e174dbac938c29246c3f11379), [april fools functionality, isFalse fix, better final attempt and attempt ix, and probably more](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/ac52c8f4cf0af8aa4afb792643c2125cd85d4171), [fix README](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/0bc1d79ac314cb466484e040f5388cf974f617d4)

### Added
- April Fools functionality (broken though, isAprilFools is a stub function that always returns false in the released version)

### Changed
- Renamed `_calculateFalse` to `_getFalse`, and moved information given to the user if logging is enabled that doesn't necesarily help the calcuation of false from `_getFalse` to `_calculateFalse`. 
- Changed Attempt IX to be more robust.
- Changed README to document FalseJS CLI
- Changed CLI command from `falsejs` to `false`.
- Updated `IS_THIS_LIBRARY_A_JOKE.md` to say "Maybe." instead of "Probably." (breaking change)
- Updated index.js to use `immediate-error`
- Updated SuccessorHelper to be more 10x
- Updated jquery-arithmetic-plugin check to be more 10x


## `falsejs` 1.1.0
Commit Names: [Update issue templates](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/2183a428c5280b62cd111f3f0d14312486af72c3), [add issue template](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/2fa7caab9c064329b99720148f82fe32fbcfc7d8), [tests and type defs](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/6ef11dbc0d3c4a0b5dd1d11cb3eb5c89fcc68d5f), [add cli](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/73b1d52ae500588bfd7d5706ba95529d95b98348), [fix](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/960009584b010ca729063a41c37f3fdfb244be9a)

### Added
- TypeScript definitions (`index.d.ts`)
- Tests
- FalseJS CLI
- GitHub repository issue templates

### Removed
- Empty PRIVACY.md file

## `falsejs` 1.0.4
Commit Name: [Remove bad words list, tell the user the month and the day of the week](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/ed2028788407ded01065734e1fb5be56dee5fa52)

### Added
- MIT License
- Functionality to tell the user the month
- Functionality to tell the user whether it's the weekend

### Changed
- Updated isFalse to check whether the value passed in is garbage.
- Updated package.json version to 1.0.4
- Updated Code Of Conduct to remove reference to list of unacceptable words.

### Removed
- List of unacceptable words
- WTFPL License
- Swear word in security policy


## `falsejs` 1.0.3 (First Version)
Commit Name: [FalseJS. The ultimate library for the boolean value false](https://github.com/10xEngineersQualityProgramming/FalseJS/commit/c9080720dfddf38c441f3625fe04cbde207c7de5)


### Added
- Initial FalseJS logic (read the source code for more info)
- Captivating README 
- Security Policy
- Code Of Conduct
- WTFPL License
- List of unacceptable words
- package.json with version 1.0.3
- Added IS_THIS_LIBRARY_A_JOKE.md