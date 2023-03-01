const game = new Game();
const start_btn = document.querySelector('#begin-game');

start_btn.addEventListener('click', () => {
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});