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
<h1>Tic Tac Toe</h1>
<div>
<table class="board">
    <tr>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
    </tr>
    <tr>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
    </tr>
    <tr>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
        <td onclick="play(this);" class="content"></td>
    </tr>
</table>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="tictactoe.js"></script>
</body>