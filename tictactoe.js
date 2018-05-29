let players = [];
let markers = ["X","O"];
let turn = 0;
players[0] = prompt("Vul de naam van speler 1 in");
players[1] = prompt("Vul de naam van speler 2 in");

function play(clickedTd) {
    clickedTd.onclick = '';
    clickedTd.innerHTML = "<span>" + markers[turn] + "</span>";
    toggle();
}

function toggle() {
    if (turn == 0) turn = 1;
    else turn = 0;

    document.getElementById("name_display").innerText = players[turn] + " is nu aan de beurt.";
}