let players = [];
let markers = ["X","O"];
let scores = [0,0];
let turn = 0;
let valuesWin = [7,56,73,84,146,273,292,448];
var endGame = false;
players[0] = prompt("Vul de naam van speler 1 (X) in");
players[1] = prompt("Vul de naam van speler 2 (O) in");

function checkWin() {
 for (var i = 0; i < valuesWin.length; i++) {
     if ((scores[turn] & valuesWin[i]) ==  valuesWin[i]) {
         document.getElementById("name_display").innerText = players[turn] + " wint!";
         endGame = true;
     }
     if (((scores[0] + scores[1]) == 511) && !endGame)  {
         document.getElementById("name_display").innerText = "Geen winnaar!";
         endGame = true;
     }
 }
}

function play(clickedTd, Tdvalue) {
    if (!endGame) {
        scores[turn] += Tdvalue;
        clickedTd.onclick = '';
        clickedTd.innerHTML = "<span>" + markers[turn] + "</span>";
        checkWin();
        if (!endGame) {
            toggle();
        }
    }
}

function toggle() {
    if (turn == 0) turn = 1;
    else turn = 0;

    document.getElementById("name_display").innerText = players[turn] + " is nu aan de beurt.";
}

$("#reset").click(function () {
   $(".content").childNodes.innerText = '';
});