let players = [];
let markers = ["X","O"];
let mark = ["O","X"];
let scores = [0,0];
let turn = 0;
let valuesWin = [7,56,73,84,146,273,292,448];
var endGame = false;
players[0] = "Player 1";
players[1] = "Player 2";


function fetchBoxes() {
    $.ajax("index.php?ajax=true")
        .done(function (data) {
            console.log(data);
            for (let turns in data) {
                if (${turns.box} == 1) {
                    $('#1').append(`<span>${turns.value}</span>`);
                }
                else if (turns["box"] == 2) {
                    document.getElementById("2").innerHTML = turns["value"]
                }
                else if (turns["box"] == 3) {
                    document.getElementById("3").innerHTML = turns["value"]
                }
                else if (turns["box"] == 4) {
                    document.getElementById("4").innerHTML = turns["value"]
                }
                else if (turns["box"] == 5) {
                    document.getElementById("5").innerHTML = turns["value"]
                }
                else if (turns["box"] == 6) {
                    document.getElementById("6").innerHTML = turns["value"]
                }
                else if (turns["box"] == 7) {
                    document.getElementById("7").innerHTML = turns["value"]
                }
                else if (turns["box"] == 8) {
                    document.getElementById("8").innerHTML = turns["value"]
                }
                else if (turns["box"] == 9) {
                    document.getElementById("9").innerHTML = turns["value"]
                }
            }
        });
}

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
        clickedTd.innerHTML = markers[turn];
        checkWin();
        if (!endGame) {
            toggle();
            fetchBoxes();
        }
    }
}

function toggle() {
    if (turn == 0) turn = 1;
    else turn = 0;

    document.getElementById("name_display").innerText = players[turn] + " is nu aan de beurt.";
}

window.onload = $("#reset").click(function () {
    $(".content").childNodes.innerHTML = '';
});

$('.content').click(function () {
   let selected_id = $(this).attr('id');
   let player_turn = mark[turn];
   $.ajax({method: "POST", url: "add.php", data: {box: selected_id, value: player_turn}})
       .done(function (data) {
        fetchBoxes();
       });
});

fetchBoxes();
setInterval(fetchBoxes, 1000);