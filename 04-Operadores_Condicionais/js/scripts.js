//#### 01 - JavaScript Operadores Condicionais IF e ELSE

var n1 = false;
if (n1) {
    console.log("É TRUE");
} else {
    console.log("FALSE!")
}

if (2 == 2 && 3 === "3") {
    console.log("2 é = a 2");
}else
    console.log("3 === '3' é diferente") // 3 === '3' é diferente

console.log("************************************************************");

//#### 02 - JavaScript Operador Condicional Ternário

var age = 18;
var mensagem = '';

mensagem = (age >= 18) ? "é maior de idade" : "É menor de idade";
console.log(mensagem); // é maior de idade



console.log("************************************************************");

//#### 03 - JavaScript Operador Condicional switch

var dado = 4;
var result = "";

switch (dado) {
    case 1:
        result = "Result é igual a Um";
        break;
    case 2:
        result = "Result é igual a dois";
        break;
    case 4:
        result = "Result é igual a Quatro";
        break;
    default:
        result = "Não encontrado";
        break;

}
console.log(result); // Result é igual a Quatro