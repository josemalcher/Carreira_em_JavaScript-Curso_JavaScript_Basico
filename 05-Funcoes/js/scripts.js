/*

function showLog() {
    console.log("**************")
    console.log("****  LOG  ****")
    console.log("**************")
}

showLog();
*/
/*

var n1 = 2;
var n2 = 8;
var result = ((n1 + n2) + 6) / 2;
console.log(result); // 8


function calc(n1, n2) {
    return ((n1 + n2) + 6) / 2;
}

console.log(calc(2, 8)); // 8

*/

/*

function calc(n1, n2, n3) {
    n3 = (n3 == undefined) ? 2 : n3;
    return ((n1 + n2) + 6) / n3;
}
console.log(calc(2, 8)); // 8
*/

/*

var n1 = 5;

function recursiva(n) {
    console.log(n);
    if (n > 0) {
        return recursiva(n - 1);
    }
}

recursiva(n1); // 5 4 3 2 1
*/


function aninhadas(n1, n2, n3) {
    function calc(n) {
        return n * n3;
    }

    return calc(n1) + calc(n2);
}

function dobra(n) {
    return n * 2;
}

console.log(aninhadas(2, 4, 2));


