#!/usr/bin/env node

const f = require("../index").default

console.log(f.False("no", "no", "no", "yes", "yes", "no", "no")) // false
