const prompt = require('prompt-sync')();
const Game = require('./game');

const gameModeOptions = {
    A: 'multiplayer',
    B: 'ai'
}


while (1) {
    console.log('------------ Select Game Mode ------------\n')
    console.log("A: multiplayer\nB: ai\nC: exit\n");
    console.log("First Player to Win 3 wins!!!");
    let selectedGameMode = prompt("");
    if (selectedGameMode === 'A' || selectedGameMode === 'B' || selectedGameMode === 'C') {
        if (selectedGameMode === 'C') {
            console.log('------------ Game Terminated ------------\n')
            break;
        } else {
            const newGame = new Game(gameModeOptions[selectedGameMode]);
            break;
        }
        
    }
}

