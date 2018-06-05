function update() {
    console.log('updating game');
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const game = JSON.parse(this.responseText)[0];

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

            char1.innerHTML = game["c1"];
            char2.innerHTML = game["c2"];
            char3.innerHTML = game["c3"];
            char4.innerHTML = game["c4"];
            char5.innerHTML = game["c5"];
            char6.innerHTML = game["c6"];
            char7.innerHTML = game["c7"];
            char8.innerHTML = game["c8"];
            char9.innerHTML = game["c9"];
            turn.innerHTML = game["turn"]
        }
    };
    req.open('GET', 'index.php', true);
    req.send()
}

window.setInterval(update(), 1000);
