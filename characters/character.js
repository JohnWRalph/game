const Ability = require('../abilities/ability');
const config = require('../config/config');

class Character {
    constructor(name, health, attack, magic) {
        this.name = name;
        this.level = 1;
        this.health = health;
        this.attack = attack;
        this.magic = magic;
        this.pets = [];
        this.weapons = [];
        this.abilities = []
        this.activePets = [];
        this.activeWeapon = null;
        this.activeAbility = null;
    }



    levelUp() {
        this.level = this.level + 1;
        if (this.className === config.classNames.WarlockClassNames) {
            this.health = this.health + 6;
            this.attack = this.attack + 1;
            this.magic = this.magic + 3;
        }
    }


    //     } else if (this.className === config.classNames.GamblerClassName) {
    //         this.attack = this.attack + 10;
    //         this.magic = this.magic + 4;
    //         this.defense = this.defense + 3;
    //         this.speed = this.speed + 10;
    //         this.health = this.health + 10;
    //         this.mana = this.mana + 2;

    //     } else if (this.className === config.classNames.MedicClassName) {
    //         this.attack = this.attack + 4;
    //         this.magic = this.magic + 5;
    //         this.defense = this.defense + 3;
    //         this.speed = this.speed + 1;
    //         this.health = this.health + 10;
    //         this.mana = this.mana + 5;

    //     }
    // }


    getDamage() {
        if (move === "useWeapon") {
            console.log(this.activeWeapons.attack);
            const damage = this.activeWeapons.attack;
            return this.activeWeapons.attack;
        } else {
            console.log("Selected ability is not equipped");
            return 0
        }
    }
}
// if (this.mana < ability.mana) {
//     console.log("not enough mana");
//     return 0
// }

// this.mana -= ability.mana;

// }
// else if (this.activePet) {
//     const getDamage = this.activePet.damage;
//     return petDamage + this.activePet.damage;
// } else if (this.equippedWeapon) {
//     const
// }

// summonPet(petName) {
//     // if we have a pet in our this.pets array that matches the same in an argument to this function
//     // lets summon it
//     // we can loop over the pets we have to fin it
//     for (let i = 0; i < this.pets.length; i++) {
//         const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array
//         if (pet.name === petName) {
//             this.activePet = pet;
//         }
//     }
// }

// equipAbility(abilityName) {
//     // if we have a pet in our this.pets array that matches the same in an argument to this function
//     // lets summon it
//     // we can loop over the pets we have to fin it
//     for (let i = 0; i < this.ability.length; i++) {
//         const ability = this.abilities[i]; // this pet is equal to an individual pet element in our pets array
//         if (ability.name === abilityName) {
//             this.activeAbility = ability;
//         }
//     }
// }

//     equipWeapon(weaponName) {
//         // if we have a pet in our this.pets array that matches the same in an argument to this function
//         // lets summon it
//         // we can loop over the pets we have to fin it
//         for (let i = 0; i < this.weapons.length; i++) {
//             const weapon = this.weapons[i]; // this pet is equal to an individual pet element in our pets array
//             if (weapon.name === weaponName) {
//                 this.activeWeapons = weapon;
//             }
//         }
//     }
// }

module.exports = Character;