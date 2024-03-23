let selectedPlayer = '';

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        selectedPlayer = this.id;
        window.location.href = `game.html?player=${selectedPlayer}`;
        console.log(selectedPlayer)
    });
});

