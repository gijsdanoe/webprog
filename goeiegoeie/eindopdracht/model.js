function updateTable() {
    console.log('updating game');
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const game = JSON.parse(this.responseText)[0]

            const symb1 = document.getElementById("symb1")
            const symb2 = document.getElementById("symb2")
            const symb3 = document.getElementById("symb3")
            const symb4 = document.getElementById("symb4")
            const symb5 = document.getElementById("symb5")
            const symb6 = document.getElementById("symb6")
            const symb7 = document.getElementById("symb7")
            const symb8 = document.getElementById("symb8")
            const symb9 = document.getElementById("symb9")
            const turn = document.getElementById("turn")

            symb1.innerHTML = game["c1"]
            symb2.innerHTML = game["c2"]
            symb3.innerHTML = game["c3"]
            symb4.innerHTML = game["c4"]
            symb5.innerHTML = game["c5"]
            symb6.innerHTML = game["c6"]
            symb7.innerHTML = game["c7"]
            symb8.innerHTML = game["c8"]
            symb9.innerHTML = game["c9"]
            turn.innerHTML = game["turn"]

        }
    };
    req.open('GET', 'game.php?ajax=true');
    req.send()
}

// Refresh game every second:
window.setInterval(updateTable, 1000);
