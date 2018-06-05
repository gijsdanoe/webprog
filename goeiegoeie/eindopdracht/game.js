document.getElementById("notifier").innerHTML = "It's X's turn"

var win = "n";
function winChecker() {
    if (cell1.childNodes[1].innerHTML == cell2.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML == cell3.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell1.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (cell1.childNodes[1].innerHTML == cell4.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML == cell7.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell1.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell1.childNodes[1].innerHTML == cell5.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML == cell9.childNodes[1].innerHTML && cell1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell1.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell2.childNodes[1].innerHTML == cell5.childNodes[1].innerHTML && cell2.childNodes[1].innerHTML == cell8.childNodes[1].innerHTML && cell2.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell2.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell3.childNodes[1].innerHTML == cell6.childNodes[1].innerHTML && cell3.childNodes[1].innerHTML == cell9.childNodes[1].innerHTML && cell3.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell3.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell4.childNodes[1].innerHTML == cell5.childNodes[1].innerHTML && cell4.childNodes[1].innerHTML == cell6.childNodes[1].innerHTML && cell4.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell4.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell7.childNodes[1].innerHTML == cell8.childNodes[1].innerHTML && cell7.childNodes[1].innerHTML == cell9.childNodes[1].innerHTML && cell7.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell7.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell3.childNodes[1].innerHTML == cell5.childNodes[1].innerHTML && cell3.childNodes[1].innerHTML == cell7.childNodes[1].innerHTML && cell3.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = cell3.childNodes[1].innerHTML + " wins!"
        win = "y";
    }
    else if (cell1.childNodes[1].innerHTML != "" && cell2.childNodes[1].innerHTML != "" && cell3.childNodes[1].innerHTML != "" && cell4.childNodes[1].innerHTML != "" && cell5.childNodes[1].innerHTML != "" && cell6.childNodes[1].innerHTML != "" && cell7.childNodes[1].innerHTML != "" && cell8.childNodes[1].innerHTML != "" && cell9.childNodes[1].innerHTML != ""){
        document.getElementById("notifier").innerHTML = "Tie!"
        win = "y";
    }
}

function iconDet() {
    if (document.getElementById("turn").innerHTML == "O") {
        document.getElementById("turn").innerHTML = "X";
        return "O";
    }
    else if (document.getElementById("turn").innerHTML == "X") {
        document.getElementById("turn").innerHTML = "O";
        return "X";
    }
}

var cell1 = document.getElementById('cell1');
cell1.style.cursor = 'pointer';
cell1.onclick = function(){
    var icon = cell1.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell1.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell2 = document.getElementById('cell2');
cell2.style.cursor = 'pointer';
cell2.onclick = function(){
    var icon = cell2.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell2.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell3 = document.getElementById('cell3');
cell3.style.cursor = 'pointer';
cell3.onclick = function(){
    var icon = cell3.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell3.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell4 = document.getElementById('cell4');
cell4.style.cursor = 'pointer';
cell4.onclick = function(){
    var icon = cell4.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell4.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell5 = document.getElementById('cell5');
cell5.style.cursor = 'pointer';
cell5.onclick = function(){
    var icon = cell5.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell5.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell6 = document.getElementById('cell6');
cell6.style.cursor = 'pointer';
cell6.onclick = function(){
    var icon = cell6.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell6.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell7 = document.getElementById('cell7');
cell7.style.cursor = 'pointer';
cell7.onclick = function(){
    var icon = cell7.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell7.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell8 = document.getElementById('cell8');
cell8.style.cursor = 'pointer';
cell8.onclick = function(){
    var icon = cell8.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell8.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

var cell9 = document.getElementById('cell9');
cell9.style.cursor = 'pointer';
cell9.onclick = function(){
    var icon = cell9.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        cell9.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    Add();
}

function boardCleaner() {
    document.getElementById("turn").innerHTML = "X";
    document.getElementById("notifier").innerHTML = "It's X's turn";
    cell1.childNodes[1].innerHTML = "";
    cell2.childNodes[1].innerHTML = "";
    cell3.childNodes[1].innerHTML = "";
    cell4.childNodes[1].innerHTML = "";
    cell5.childNodes[1].innerHTML = "";
    cell6.childNodes[1].innerHTML = "";
    cell7.childNodes[1].innerHTML = "";
    cell8.childNodes[1].innerHTML = "";
    cell9.childNodes[1].innerHTML = "";
    win = 'n';
}
