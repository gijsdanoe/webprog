<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Game | TicTacToe</title>

    <link rel="stylesheet" href="main.css">

</head>

<body>
<nav>
</nav>

<main class="index">
    <div class="intro1">
        <h1>Welcome to Tic Tac Toe!</h1>
        <p>Please choose your weapon and start playing!</p>
    </div>
    <form action="create_game.php">
        <label for="weapon">Your weapon: </label>
        <select name="weapon">
            <option>X</option>
            <option>O</option>
        </select>
        <input type="submit" value="start game">
    </form>
</main>
<script src="scripts.js"></script>
</body>

</html>
