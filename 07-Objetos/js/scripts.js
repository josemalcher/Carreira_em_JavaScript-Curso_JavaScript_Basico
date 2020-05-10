//01 - Objetos no JavaScript

var jose = {
    nome: "jose malcher",
    idade: 35
}

//console.log(jose);
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

//console.log(josemalcher.fullName());
// José Malcher Jr
//console.log(josemalcher.fullNameTwo("Stélio"));
// José Stélio Malcher Jr


var pessoa = new Object();
pessoa.nome = "Jose";
pessoa.idade = 35;

pessoa.dados = pessoa.nome + " tem idade de " + pessoa.idade;
console.log(pessoa);
//{nome: "Jose", idade: 35, dados: "Jose tem idade de 35"}

console.log(pessoa.dados); // Jose tem idade de 35
console.log(pessoa['nome']); //Jose
