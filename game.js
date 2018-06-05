document.getElementById("notifier").innerHTML = "It's X's turn";

let win = "n";
function winChecker() {
    if (c1.childNodes[1].innerHTML == c2.childNodes[1].innerHTML && c1.childNodes[1].innerHTML == c3.childNodes[1].innerHTML && c1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c1.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c1.childNodes[1].innerHTML == c4.childNodes[1].innerHTML && c1.childNodes[1].innerHTML == c7.childNodes[1].innerHTML && c1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c1.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c1.childNodes[1].innerHTML == c5.childNodes[1].innerHTML && c1.childNodes[1].innerHTML == c9.childNodes[1].innerHTML && c1.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c1.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c2.childNodes[1].innerHTML == c5.childNodes[1].innerHTML && c2.childNodes[1].innerHTML == c8.childNodes[1].innerHTML && c2.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c2.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c3.childNodes[1].innerHTML == c6.childNodes[1].innerHTML && c3.childNodes[1].innerHTML == c9.childNodes[1].innerHTML && c3.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c3.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c4.childNodes[1].innerHTML == c5.childNodes[1].innerHTML && c4.childNodes[1].innerHTML == c6.childNodes[1].innerHTML && c4.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c4.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c7.childNodes[1].innerHTML == c8.childNodes[1].innerHTML && c7.childNodes[1].innerHTML == c9.childNodes[1].innerHTML && c7.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c7.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c3.childNodes[1].innerHTML == c5.childNodes[1].innerHTML && c3.childNodes[1].innerHTML == c7.childNodes[1].innerHTML && c3.childNodes[1].innerHTML != "") {
        document.getElementById("notifier").innerHTML = c3.childNodes[1].innerHTML + " wins!";
        win = "y";
    }
    else if (c1.childNodes[1].innerHTML != "" && c2.childNodes[1].innerHTML != "" && c3.childNodes[1].innerHTML != "" && c4.childNodes[1].innerHTML != "" && c5.childNodes[1].innerHTML != "" && c6.childNodes[1].innerHTML != "" && c7.childNodes[1].innerHTML != "" && c8.childNodes[1].innerHTML != "" && c9.childNodes[1].innerHTML != ""){
        document.getElementById("notifier").innerHTML = "Tie!";
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

let c1 = document.getElementById('c1');
c1.style.cursor = 'pointer';
c1.onclick = function(){
    var icon = c1.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c1.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c2 = document.getElementById('c2');
c2.style.cursor = 'pointer';
c2.onclick = function(){
    var icon = c2.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c2.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c3 = document.getElementById('c3');
c3.style.cursor = 'pointer';
c3.onclick = function(){
    var icon = c3.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c3.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c4 = document.getElementById('c4');
c4.style.cursor = 'pointer';
c4.onclick = function(){
    var icon = c4.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c4.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c5 = document.getElementById('c5');
c5.style.cursor = 'pointer';
c5.onclick = function(){
    var icon = c5.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c5.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c6 = document.getElementById('c6');
c6.style.cursor = 'pointer';
c6.onclick = function(){
    var icon = c6.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c6.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c7 = document.getElementById('c7');
c7.style.cursor = 'pointer';
c7.onclick = function(){
    var icon = c7.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c7.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c8 = document.getElementById('c8');
c8.style.cursor = 'pointer';
c8.onclick = function(){
    var icon = c8.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c8.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

let c9 = document.getElementById('c9');
c9.style.cursor = 'pointer';
c9.onclick = function(){
    var icon = c9.childNodes[1].innerHTML;
    if (icon == "" && win == "n") {
        c9.childNodes[1].innerHTML = iconDet();
    }
    document.getElementById("notifier").innerHTML = "It's " + document.getElementById("turn").innerHTML + "'s turn";
    winChecker();
    add();
};

function boardCleaner() {
    document.getElementById("turn").innerHTML = "X";
    document.getElementById("notifier").innerHTML = "It's X's turn";
    c1.childNodes[1].innerHTML = "";
    c2.childNodes[1].innerHTML = "";
    c3.childNodes[1].innerHTML = "";
    c4.childNodes[1].innerHTML = "";
    c5.childNodes[1].innerHTML = "";
    c6.childNodes[1].innerHTML = "";
    c7.childNodes[1].innerHTML = "";
    c8.childNodes[1].innerHTML = "";
    c9.childNodes[1].innerHTML = "";
    win = 'n';
}