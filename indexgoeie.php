<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
    <meta name="description" content="Tic Tac Toe" />
    <meta name="author" content="Gijs Danoe, Luuk Janssen, Thomas Tan, Benjamin Kleppe" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115655085-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-115655085-1');
    </script>
    <link rel="stylesheet" type="text/css" href="tictactoe.css" />
    <link href="https://fonts.googleapis.com/css?family=Mina" rel="stylesheet">
</head>
<body>
<header>
    <h1>Tic Tac Toe</h1>
    <h2 id="name_display">&nbsp;</h2>
</header>
<main>
    <div>
        <h2>Tic Tac Toe!</h2>
        <p id="notifier">Succes!</p>
    </div>
    <div class="game">
        <div class="c1" id="c1" onclick="add()">
            <char name="c1" id="char1"></char>
        </div>
        <div class="c2" id="c2" onclick="add()">
            <char name="c2" id="char2"></char>
        </div>
        <div class="c3" id="c3" onclick="add()">
            <char name="c3" id="char3"></char>
        </div>
        <div class="c4" id="c4" onclick="add()">
            <char name="c4" id="char4"></char>
        </div>
        <div class="c5" id="c5" onclick="add()">
            <char name="c5" id="char5"></char>
        </div>
        <div class="c6" id="c6" onclick="add()">
            <char name="c6" id="char6"></char>
        </div>
        <div class="c7" id="c7" onclick="add()">
            <char name="c7" id="char7"></char>
        </div>
        <div class="c8" id="c8" onclick="add()">
            <char name="c8" id="char8"></char>
        </div>
        <div class="c9" id="c9" onclick="add()">
            <char name="c9" id="char9"></char>
        </div>
    </div>
    <div class="turn" id="turn">X</div>
    <div class="reset">
        <input type="button" value="New game" id="reset" onclick="window.location.reload()"/>
    </div>
</main>
<script src="js/tictactoe.js"></script>
<script src="js/game.js"></script>
<script>
    function add() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                update();
            }
        };

        const char1 = document.getElementById("char1").innerHTML;
        const char2 = document.getElementById("char2").innerHTML;
        const char3 = document.getElementById("char3").innerHTML;
        const char4 = document.getElementById("char4").innerHTML;
        const char5 = document.getElementById("char5").innerHTML;
        const char6 = document.getElementById("char6").innerHTML;
        const char7 = document.getElementById("char7").innerHTML;
        const char8 = document.getElementById("char8").innerHTML;
        const char9 = document.getElementById("char9").innerHTML;
        const turn = document.getElementById("turn").innerHTML;

        xhttp.open("POST", "add.php", true);
        xhttp.setRequestHeader("Content-type", "multipart/form-data");
        xhttp.send("id=1&c1=" + char1 + "&c2=" + char2 + "&c3=" + char3 + "&c4=" + char4 + "&c5=" + char5 + "&c6=" + char6 + "&c7=" + char7 + "&c8=" + char8 + "&c9=" + char9 + "&turn=" + turn);
    }
</script>

</body