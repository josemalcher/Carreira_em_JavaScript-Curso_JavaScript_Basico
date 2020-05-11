var ramdom = 0
var plays = 1
var number = 0;

numberRandon();
function play() {
    number = prompt("Advinhe o número - Tentativas " + plays);
    checkResultado();
}
function checkResultado() {
    if (number == ramdom) {
        alert("Acertou! Parabens");
        reset();
    }else if (plays >= 3) {
        alert("GAME OVER");
        reset();
    }else{
        plays++;
        play();
    }
}

//play();

function numberRandon() {
    ramdom = Math.floor(Math.random() * 10);
}

function reset() {
    plays = 1;
    numberRandon();
}