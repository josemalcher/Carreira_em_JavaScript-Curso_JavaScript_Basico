//01 - Objetos no JavaScript

var jose = {
    nome: "jose malcher",
    idade: 35
}

console.log(jose);
/*
{nome: "jose malcher", idade: 35}
idade: 35
nome: "jose malcher"
__proto__: Object
* */

var josemalcher = {
    nome: "José",
    lastname: "Malcher Jr",

    fullName: function () {
        return this.nome + ' ' + this.lastname;
    },
    fullNameTwo: function (midleName) {
        return this.nome + " " + midleName + " " + this.lastname;
    }
}

console.log(josemalcher.fullName());
// José Malcher Jr
console.log(josemalcher.fullNameTwo("Stélio"));
// José Stélio Malcher Jr

