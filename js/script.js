'use strict'
const palindrom = (arg, step = 1) => {
    if (arg === +(""+arg).split("").map(Number).reverse().join('')) return  {
        result: arg,
        steps: step
    };
    let sum = arg + +(""+arg).split("").map(Number).reverse().join('');
    return palindrom(sum, step +1);
}
console.log(palindrom(96))