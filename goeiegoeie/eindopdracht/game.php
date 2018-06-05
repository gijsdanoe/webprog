<?php
// For debugging:
error_reporting(-1);
ini_set("display_errors", 1);

require_once('config.inc.php');

$db = new PDO("mysql:dbname=$db_name;host=$db_host",
    $db_user, $db_pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

$query1 = $db->prepare("SELECT * FROM tictactoe");
$query1->execute();

$data_list = array();

foreach ($query1 as $row) {
    $data_list[] = $row;
}

if (isset($_GET['ajax']) && $_GET['ajax']=='true') {
    echo json_encode($data_list);
    exit();
}
?>
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Game | TicTacToe</title>

    <link rel="stylesheet" href="main.css">

</head>

<body>
<nav>
    <?php
    // Read database credentials from configuration file:
    require_once('config.inc.php');

    // Create a database connection:
    $db = new PDO("mysql:dbname=$db_name;host=$db_host",
        $db_user, $db_pass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    // Retrieve players from the books table:
    $query = $db->prepare('SELECT P1, P2 FROM tictactoe');
    $query->execute();

    // Show them:
    foreach ($query as $row) {
        $P1 = htmlspecialchars($row['P1']);
        $P2 = htmlspecialchars($row['P2']);
        ?>
        Player 1: <?=$P1?> | Player 2: <?=$P2?>
        <?php
    }
    ?>
</nav>

<main>
    <div class="intro2">
        <h1 onclick="Add()">Welcome to Tic Tac Toe!</h1>
        <p id="notifier">Good luck!</p>
    </div>
    <div class="game">
        <div class="cell1" id="cell1" onclick="Add()">
            <symb name="cell1" id="symb1"></symb>
        </div>
        <div class="cell2" id="cell2" onclick="Add()">
            <symb name="cell2" id="symb2"></symb>
        </div>
        <div class="cell3" id="cell3" onclick="Add()">
            <symb name="cell3" id="symb3"></symb>
        </div>
        <div class="cell4" id="cell4" onclick="Add()">
            <symb name="cell4" id="symb4"></symb>
        </div>
        <div class="cell5" id="cell5" onclick="Add()">
            <symb name="cell5" id="symb5"></symb>
        </div>
        <div class="cell6" id="cell6" onclick="Add()">
            <symb name="cell6" id="symb6"></symb>
        </div>
        <div class="cell7" id="cell7" onclick="Add()">
            <symb name="cell7" id="symb7"></symb>
        </div>
        <div class="cell8" id="cell8" onclick="Add()">
            <symb name="cell8" id="symb8"></symb>
        </div>
        <div class="cell9" id="cell9" onclick="Add()">
            <symb name="cell9" id="symb9"></symb>
        </div>
    </div>
    <div class="turn" id="turn">X</div>
    <div class="clearbutton">
        <button onclick="boardCleaner(); Add(); window.location.href='/~s3121534/test/index.php'">New game</button>
    </div>
</main>
<script src="game.js"></script>
<script src="model.js"></script>
<script>
    function Add() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                updateTable();
            }
        };

        const symb1 = document.getElementById("symb1").innerHTML
        const symb2 = document.getElementById("symb2").innerHTML
        const symb3 = document.getElementById("symb3").innerHTML
        const symb4 = document.getElementById("symb4").innerHTML
        const symb5 = document.getElementById("symb5").innerHTML
        const symb6 = document.getElementById("symb6").innerHTML
        const symb7 = document.getElementById("symb7").innerHTML
        const symb8 = document.getElementById("symb8").innerHTML
        const symb9 = document.getElementById("symb9").innerHTML
        const turn = document.getElementById("turn").innerHTML

        xhttp.open("POST", "add.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("id=1&cell1="+symb1+"&cell2="+symb2+"&cell3="+symb3+"&cell4="+symb4+"&cell5="+symb5+"&cell6="+symb6+"&cell7="+symb7+"&cell8="+symb8+"&cell9="+symb9"&turn="+turn);
    }
</script>
</body>

</html>