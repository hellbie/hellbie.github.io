var players = document.querySelectorAll(".playerButton");
for (var i = 0; i < players.length; i++) {
    const current = i;
    players[current].onclick = function () {
        console.log(current);
        const audioSrc = players[current].getAttribute("playerSrc");
        try {
            if (players[current].audio.paused) {
                players[current].audio.play();
                players[current].classList.add("pause");
            }
            else {
                players[current].audio.pause();
                players[current].classList.remove("pause");
            }
            
        }
        catch {
            var audio = new Audio(audioSrc);
            players[current].audio = audio;
            audio.play();
            players[current].classList.add("pause");
        }

    };
}