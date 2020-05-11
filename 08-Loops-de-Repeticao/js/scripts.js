// 08 - Loops de Repetição

console.log("ANTES");

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log("DEPOIS");
/*
ANTES
0
1
2
3
4
DEPOIS
* */

var carros = [
    {name: "carro 1", ano: 2000},
    {name: "carro 2", ano: 2001},
    {name: "carro 3", ano: 2002},
    {name: "carro 4", ano: 2003},
    {name: "carro 5", ano: 2004},
];

for (var i = 0; i < carros.length; i++) {
    var result = "Carro " + carros[i].name + " ,ano  + " + carros[i].ano;
    console.log(result);
}
/*
Carro carro 1 ,ano  + 2000
Carro carro 2 ,ano  + 2001
Carro carro 3 ,ano  + 2002
Carro carro 4 ,ano  + 2003
Carro carro 5 ,ano  + 2004
* */


// 02 - Loop WHILE JavaScript
console.log("while")
var i = 0;
while (i < carros.length) {
    var result = "Carro " + carros[i].name + " ,ano  + " + carros[i].ano;
    console.log(result);
    i++;
}
console.log("end while")
/*
while
Carro carro 1 ,ano  + 2000
Carro carro 2 ,ano  + 2001
Carro carro 3 ,ano  + 2002
Carro carro 4 ,ano  + 2003
Carro carro 5 ,ano  + 2004
end while
* */

var i = carros.length - 1;
while (i >= 0) {
    var result = "Carro " + carros[i].name + " ,ano  + " + carros[i].ano;
    console.log(result);
    i--;
}
/*
Carro carro 5 ,ano  + 2004
Carro carro 4 ,ano  + 2003
Carro carro 3 ,ano  + 2002
Carro carro 2 ,ano  + 2001
Carro carro 1 ,ano  + 2000
* */


// 03 - Loop DO WHILE JavaScript

console.log("Do WHILE");
var x = 90;
do {
    console.log(x);
    x++;
} while (x <= 10)
/*
 90
* */


// 04 - Loop forEach JavaScript
console.log("Foreach");
carros.forEach(function (element, index, array) {
    var result = "Carro " + element.name + " Ano: " + element.ano;
    console.log(result);
});
/*
Foreach
Carro carro 1 Ano: 2000
Carro carro 2 Ano: 2001
Carro carro 3 Ano: 2002
Carro carro 4 Ano: 2003
Carro carro 5 Ano: 2004
* */