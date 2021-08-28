const Player = require('./player');

class Human extends Player {
    constructor(name) {
        super('human');
        this.name = name;
        console.log('initialized player: ' + this.name + " with type " + this.type);
    }
}

module.exports = Human;


