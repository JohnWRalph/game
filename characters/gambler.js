const Character = require('./character');
const slash = require('../abilities/slash');
const dagger = require('../weapons/dagger.js');


class Gambler extends Character {
    constructor(name) {
        super(name, 'Gambler', 6, 2, 4, 10, 50, 10);

        this.weapons.push(dagger);
        this.abilities.push(slash)
    }
}

module.exports = Gambler;