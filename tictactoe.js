let players = [];
let markers = ["<span class='X'>X</span>","<span class='O'>O</span>"];
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
            document.getElementById("name_display").innerText = "Gelijkspel!";
            endGame = true;
        }
    }
}

function play(clickedTd, Tdvalue) {
    if (!endGame) {
        scores[turn] += Tdvalue;
        clickedTd.onclick = '';
        clickedTd.innerHTML = markers[turn];
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
function XY() {
    $.ajax( "tictactoe.php?ajax=true" )
        .done( function (data) {
            console.log(data);
            $( '.content' ).html('');
            $( '.content' ).append('$X' );
            })
        .fail( function () {
        })
        .always( function () {
        });
}

$(".content").on("click", function () {
    $.ajax({method: "POST", url: "online.php", data: {1: $('#1').val(), 2:
                $('#2').val()}})
        .done(function (data) {
        })});
