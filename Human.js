const Player = require('./player');

class Human extends Player {
    constructor(name) {
        super('human');
        this.name = name;
        console.log('Game Mode Player: ' + this.name + " - " + this.type);
    }
}

module.exports = Human;


