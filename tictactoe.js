let players = [];
let markers = ["X","O"];
let turn = 0;
players[0] = "player1";
players[1] = "player2";

function play(clickedTd) {
    clickedTd.onclick = '';
    clickedTd.innerHTML = "<span>" + markers[turn] + "</span>";
    toggle();
}

function toggle() {
    if (turn == 0) turn = 1;
    else turn = 0;
}