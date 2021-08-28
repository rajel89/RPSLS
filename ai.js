const Player = require('./player');

class AI extends Player {
    constructor() {
        super('ai');
        console.log('initialized player: ' + this.type);
    }
}

module.exports = AI;