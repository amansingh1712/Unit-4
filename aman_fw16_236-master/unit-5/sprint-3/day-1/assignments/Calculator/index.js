const fns = require('./function.js')
const cr = require('crypto')
const add = fns.add
const sub = fns.sub
const mul = fns.mul
const div = fns.div
const sin = fns.sin
const cos = fns.cos
const tan = fns.tan
console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
console.log(div(1, 2))
console.log(sin(30));
console.log(cos(20));
console.log(tan(10));
console.log(cr.randomInt(1, 1000000));