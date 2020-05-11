var ramdom = Math.floor(Math.random() * 10);
var plays = 1
var number = 0;
console.log(ramdom)
function play() {
    number = prompt("Advinhe o número - Tentativas " + plays);
    checkResultado();
}
function checkResultado() {
    if (number == ramdom) {
        alert("Acertou! Parabens");
    }else if (plays >= 3) {
        alert("GAME OVER");
    }else{
        plays++;
        play();
    }
}

play();