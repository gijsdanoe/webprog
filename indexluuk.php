<!DOCTYPE html>
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
    <h1>Boter-kaas-en-eieren</h1>
    <h2 id="name_display">&nbsp;</h2>
</header>
<div class="board">
    <div id="row1">
        <div onclick="play(this,1);" class="content"></div>
        <div onclick="play(this,2);" class="content"></div>
        <div onclick="play(this,4);" class="content"></div>
    </div>
    <div id="row2">
        <div onclick="play(this,8);" class="content"></div>
        <div onclick="play(this,16);" class="content"></div>
        <div onclick="play(this,32);" class="content"></div>
    </div>
    <div id="row3">
        <div onclick="play(this,64);" class="content"></div>
        <div onclick="play(this,128);" class="content"></div>
        <div onclick="play(this,256);" class="content"></div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="tictactoe.js"></script>
</body>