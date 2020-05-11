//01 - Armazenamento localStorage JavaScript - Parte 1

// localStorage.setItem("NAME", "José MAlcher");
// localStorage.setItem("CART", [123456789]);
//
// console.log(localStorage.getItem("NAME"));
//
// console.log(localStorage.getItem("NAME") == "José MAlcher");
// console.log(localStorage.getItem("NAME") !== null);
//
// console.log(localStorage.hasOwnProperty("NAME"));
//
// //remover um item
// localStorage.removeItem("CART");
//
// // remove todos
// localStorage.clear()

if (localStorage.hasOwnProperty("USER")) {
    var name = localStorage.getItem("USER");
    alert("Olá " + name + "!");
} else {
    var name = prompt("Qual Nome: ");
    localStorage.setItem("USER", name);
}
