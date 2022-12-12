// starting Pet
const Pet = require('./pet');
const startingPet = new Pet("Pet", 10);

// Spells
const fireball = require('../abilities/fireball');

// Abilities 
const warlockStaff = require('../weapons/warlockStaff');
// Warlock model
const Character = require('./character');

class Warlock extends Character {
    constructor(name) {
        super(name, "Warlock", 1, 3, 2, 2, 50, 80);
        this.abilities.push(fireball);
        this.weapons.push(warlockStaff);
        this.pets.push(startingPet);
    }
}

module.exports = Warlock;