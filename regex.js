// console.log(/dick/.test("dickson"))
// console.log(/[0-9]/.test("in 1992"))

// let binary = /[^01]/;
// console.log(binary.test("12458"))

console.log(/'\d+'/.test("'123'"));
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));