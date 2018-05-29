<?php
/***
* File: index.php
* Author: design1online.com, LLC
* Created: 4.26.2012
* License: Public GNU
* Description: AJAX Version of 2 Player Tic Tac Toe
***/
require_once('oop/class.game.php');
require_once('oop/class.tictactoe.php');

//this will store their information as they refresh the page
session_start();
?>
<html>
	<head>
        <title>Tic Tac Toe</title>
        <link rel="stylesheet" type="text/css" href="inc/style.css" />
        <script language="Javascript" src="js/jquery-1.7.1.min.js"></script>
        <script language="Javascript" src="js/tic-tac-toe.js"></script>
	</head>
	<body>
        <div id="content">
        <center>Loading Tic-Tac-Toe.... please wait.</center>
        </div>
	</body>
</html>