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

console.log(names[0]); // jose
names[0] = "Jose Malcher Jr";
console.log(names);
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
console.log(names);
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
console.log(names);
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
console.log(names);

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
console.log(names);
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

