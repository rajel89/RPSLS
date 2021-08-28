const prompt = require('prompt-sync')();
const Game = require('./game');

const gameModeOptions = {
    A: 'multiplayer',
    B: 'ai'
}

console.log('------------ Select Game Mode ------------\n')


while (1) {
    console.log("A: multiplayer\nB: ai\nC: exit\n");
    let selectedGameMode = prompt("");
    if (selectedGameMode === 'A' || selectedGameMode === 'B' || selectedGameMode === 'C') {
        console.log("\n--------------------------------------\n");
        if (selectedGameMode === 'C') {
            console.log('------------ Game Terminated ------------\n')
            break;
        } else {
            const newGame = new Game(gameModeOptions[selectedGameMode]);
            break;
        }
        
    }
}


// console.log('------------ Select Game Mode ------------\n')
// console.log("A: multiplayer\nB: ai\nC: exit\n");

// let selectedGamrMode = prompt("");

// switch (selectedGamrMode){
//     case "A":
//         this.game.selectedGamrMode();
//         break;
// }
// switch (selectedGamrMode){
//     case "B":
//         this.game.selectedGamrMode();
//         break;
// }
// switch (selectedGamrMode){
//     case "C":
//         this.game.gameModeOptions();
//         break;
// }