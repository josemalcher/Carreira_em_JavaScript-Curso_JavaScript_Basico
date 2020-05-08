// 01 - Introdução a Arrays no JavaScript

var names = ['jose', 'Luciana', 'Maria'];

var namesObj = new Array('jose', 'malcher', 'junior');

var nameNum = new Array(5);

console.log(names);
/*
(3) ["jose", "Luciana", "Maria"]
0: "jose"
1: "Luciana"
2: "Maria"
length: 3
__proto__: Array(0)
* */
console.log(namesObj);
/*
(3) ["jose", "malcher", "junior"]
0: "jose"
1: "malcher"
2: "junior"
length: 3
__proto__: Array(0)
* */

console.log(nameNum);
/*
(5) [empty × 5]
length: 5
__proto__: Array(0)
* */

console.log(names.length);
// 3