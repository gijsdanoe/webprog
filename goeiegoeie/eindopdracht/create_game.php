<?php error_reporting(-1);
ini_set("display_errors", 1);

require_once('config.inc.php');

$dbc = new PDO("mysql:dbname=$db_name;host=$db_host",
    $db_user, $db_pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

$weapon = $_REQUEST['weapon'];

if ($weapon == 'X') {
    $P1 = 'X';
    $P2 = 'O';
} else {
    $P1 = 'O';
    $P2 = 'X';
}

$qh = $dbc->prepare('UPDATE tictactoe SET P1 = ?, P2 = ?');
$qh->execute([$P1, $P2]);

header('Location: game.php')
?>

































