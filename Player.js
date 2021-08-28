
class Player {
    constructor(type) {
        this.type = type;
        this.score = 0;
    }
    
    increaseScore() {
        this.score = this.score + 1;
    }

    getScore() {
        return this.score;
    }
}
module.exports = Player;