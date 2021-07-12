const Rock = require('./Rock');
const Paper = require('./Paper')
const Scissors = require('./Scissors')
const Lizard = require('./Lizard')
const Spok = require('./Spok')


class Weapon {

    constructor(weapon, wins, loses){
        this.weapon = weapon;
        this.wins = [];
        this.loses= [];

    }

    selectRandomWeapon(){
        let randomWeapon = math.floor(math.random()*this.weapon)+1;
        return randomWeapon;
    }
}




class Rock extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Rock";
        this.wins = ['Lizard','Scissors']
        this.loses = ['Paper','Spok']
    }
}





class Paper extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Paper";
        this.wins = ['Rock','Spock']
        this.loses = ['Scissors','Lizard']
    }
}




class Scissors extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Scissors";
        this.wins = ['Paper','Lizard']
        this.loses =['Rock','Spok']
    }
}




class Lizard extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Lizard";
        this.wins = ['Spok','Paper']
        this.loses =['Rock','Scissors']
    }
}




class Spok extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Spok";
        this.wins = ['Scissors','Rock']
        this.loses =['Lizard','Paper']
    }
}

module.exports = Weapon