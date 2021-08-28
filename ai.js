const Player = require('./player');

class AI extends Player {
    constructor(name) {
        super('ai');
        this.name = name;
        console.log('Game Mode Player: ' + this.name + " - " + this.type);
    }
}

module.exports = AI;