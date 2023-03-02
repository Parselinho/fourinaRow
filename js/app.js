const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/** 
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(event){
    game.handleKeydown(event);
});


// document.getElementById('begin-game')('click', function() {
//     if ( beginGameButton.textContent.trim() === 'Start' ) {
//         game.startGame();

//         this.style.display = 'none';
//         document.getElementById('play-area').style.opacity = '1';
//     } else if ( beginGameButton.textContent.trim() === 'Restart' ) {
//         window.location.reload();
//     }
// });