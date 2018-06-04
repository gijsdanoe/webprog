let players = [];
let markers = ["<span class='X'>X</span>","<span class='O'>O</span>"];
let scores = [0,0];
let turn = 0;
let valuesWin = [7,56,73,84,146,273,292,448];
var endGame = false;

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
    let id_name = $(this).id;
    $.ajax({method: "POST", url: "online.php", data: {id_name: $('#1').val(), 2:
                $('#2').val()}})
        .done(function (data) {
        })});

var btn = document.getElementById('player1');
btn.addEventListener('click', function() {
    document.location.href = './bord.php';
});

var btn = document.getElementById('player2');
btn.addEventListener('click', function() {
    document.location.href = './bord.php';
});