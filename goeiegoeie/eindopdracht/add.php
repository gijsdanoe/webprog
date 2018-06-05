<?php error_reporting(-1);
ini_set("display_errors", 1);

require_once('config.inc.php');

$dbc = new PDO("mysql:dbname=$db_name;host=$db_host",
    $db_user, $db_pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

$c1 = $_REQUEST['cell1'];
$c2 = $_REQUEST['cell2'];
$c3 = $_REQUEST['cell3'];
$c4 = $_REQUEST['cell4'];
$c5 = $_REQUEST['cell5'];
$c6 = $_REQUEST['cell6'];
$c7 = $_REQUEST['cell7'];
$c8 = $_REQUEST['cell8'];
$c9 = $_REQUEST['cell9'];
$turn = $_REQUEST['turn'];

$qh = $dbc->prepare('UPDATE tictactoe
                     SET c1 = ?, c2 = ?, c3 = ?, c4 = ?, c5 = ?, c6 = ?, c7 = ?, c8 = ?, c9 = ?, turn = ?');

$qh->execute([$c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $c9, $turn]);


header('Location: game.php')
?>
