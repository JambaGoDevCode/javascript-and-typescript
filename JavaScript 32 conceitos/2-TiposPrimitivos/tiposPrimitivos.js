console.log(typeof true); // boolean
console.log(typeof Boolean(true)); // boolean
console.log(typeof new Boolean(true)); // object
console.log(typeof new Boolean(true).valueOf()); // boolean
console.log(typeof 934); // boolean

let doze = new Number(200); // doze torna-se um objeto quando é criado atravez de um construtor
let duzentosE = doze + 43;

console.log(duzentosE);
console.log(typeof doze);
console.log(typeof duzentosE);
