const Character = require("./character");

const smite = require('../abilities/smite');
const staff = require("../weapons/staff.js");
class Medic extends Character {
    constructor(name, attack, magic, defense, speed, health, mana) {
        super(name, 'Medic', 3, 4, 4, 3, 50, 50);
        this.abilities = [smite];
        this.weapons.push(staff);
    }
}

module.exports = Medic;