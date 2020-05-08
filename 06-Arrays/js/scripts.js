// 01 - Introdução a Arrays no JavaScript

var names = ['jose', 'Luciana', 'Maria'];

var namesObj = new Array('jose', 'malcher', 'junior');

var nameNum = new Array(5);

//console.log(names);
/*
(3) ["jose", "Luciana", "Maria"]
0: "jose"
1: "Luciana"
2: "Maria"
length: 3
__proto__: Array(0)
* */
//console.log(namesObj);
/*
(3) ["jose", "malcher", "junior"]
0: "jose"
1: "malcher"
2: "junior"
length: 3
__proto__: Array(0)
* */

//console.log(nameNum);
/*
(5) [empty × 5]
length: 5
__proto__: Array(0)
* */

//console.log(names.length);
// 3


// 02 - Arrays JavaScript (push, unshift, pop, shift)

var names = ["jose", "luci", "Ana Carolina", [1,2,3]];

//console.log(names[0]); // jose
names[0] = "Jose Malcher Jr";
//console.log(names);
/*
(4) ["Jose Malcher Jr", "luci", "Ana Carolina", Array(3)]
0: "Jose Malcher Jr"
1: "luci"
2: "Ana Carolina"
3: (3) [1, 2, 3]
length: 4
__proto__: Array(0)
* */

names.push("Cursos"); // adiciona no final
//console.log(names);
/*
(5) ["Jose Malcher Jr", "luci", "Ana Carolina", Array(3), "Cursos"]
0: "Jose Malcher Jr"
1: "luci"
2: "Ana Carolina"
3: (3) [1, 2, 3]
4: "Cursos"
length: 5
__proto__: Array(0)
* */

names.unshift("Curso JAVA"); // adiciona no inicio
names.unshift("Start");
//console.log(names);
/*
(7) ["Start", "Curso JAVA", "Jose Malcher Jr", "luci", "Ana Carolina", Array(3), "Cursos"]
0: "Start"
1: "Curso JAVA"
2: "Jose Malcher Jr"
3: "luci"
4: "Ana Carolina"
5: (3) [1, 2, 3]
6: "Cursos"
length: 7
__proto__: Array(0)
* */

names.pop(); // Remove do final
//console.log(names);

/*
(6) ["Start", "Curso JAVA", "Jose Malcher Jr", "luci", "Ana Carolina", Array(3)]
0: "Start"
1: "Curso JAVA"
2: "Jose Malcher Jr"
3: "luci"
4: "Ana Carolina"
5: (3) [1, 2, 3]
length: 6
__proto__: Array(0)
* */

names.shift();
//console.log(names);
/*
(5) ["Curso JAVA", "Jose Malcher Jr", "luci", "Ana Carolina", Array(3)]
0: "Curso JAVA"
1: "Jose Malcher Jr"
2: "luci"
3: "Ana Carolina"
4: (3) [1, 2, 3]
length: 5
__proto__: Array(0)
* */


// 03 - Arrays JavaScript (join, reverse, sort)

var names_3 = ['Jose', 'luciana', 'maria'];
var numb = [4, 5, 6, 1, 2, 3];

//console.log(names_3.join(' - '));
// Jose - luciana - maria

//console.log(numb.reverse());
/*
(6) [3, 2, 1, 6, 5, 4]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
length: 6
__proto__: Array(0)
* */

//numb.sort();
//console.log(numb);
/*
(6) [1, 2, 3, 4, 5, 6]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
length: 6
__proto__: Array(0)
* */
/*

console.log(numb.sort(function (x1,x2) {
    return x1 < x2;
}));


console.log(numb.sort(function (val1, val2) {
    return val1 > val2;
}));
*/


// 04 - Arrays JavaScript (indexOf, lastIndexOf, findIndex)

// console.log(names_3.indexOf("Jose")); // 0
// console.log(names_3.indexOf("Junior")); // -1

// console.log(numb.lastIndexOf(2)); // 4

var result  = numb.findIndex(function (item) {
    return item == 114;
})
// console.log(result); // -1


// 05 - Arrays JavaScript (concate, slice, toString)

//console.log(names_3.concat(numb));
//(9) ["Jose", "luciana", "maria", 4, 5, 6, 1, 2, 3]

//console.log(numb.sort()) // (6) [1, 2, 3, 4, 5, 6]
//console.log(numb.sort().slice(1,3)) // (2) [2, 3]

//console.log(numb.toString()); // 1,2,3,4,5,6
//console.log(typeof numb.toString()); // string


// 06 - Arrays JavaScript (map, filter)

// console.log(names_3); // (3) ["Jose", "luciana", "maria"]
var result_1 = names_3.map(function (item) {
    return item.toUpperCase()
});
// console.log(result_1); // (3) ["JOSE", "LUCIANA", "MARIA"]

// console.log(numb); // (6) [1, 2, 3, 4, 5, 6]
var result_2 = numb.map(function (value) {
    return value * 2;
});
// console.log(result_2);// 6) [2, 4, 6, 8, 10, 12]

var result_3 = numb.filter(function (item) {
    return item == 99;
});
// console.log(result_3); // []

var result_4 = numb.filter(function (item) {
    return item > 4;
});
// console.log(result_4); //[5, 6]


// 07 - Arrays JavaScript (every, some)

console.log(numb); // (6) [4, 5, 6, 1, 2, 3]
var result_5 = numb.every(function (value) {
    return value < 10; // retorna true se todos atender
});

console.log(result_5) // true

console.log(numb); // (6) [4, 5, 6, 1, 2, 3]
var result_6 = numb.some(function (value) {
    return value >= 5; // retorna true se algum item atender
});
console.log(result_6) // true