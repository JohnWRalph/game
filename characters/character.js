const Spell = require('../abilities/ability');

class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.abilities = [];
        this.weapons = [];
        this.pets = []
        this.activePet = null;
        this.activeAbility = null;
        this.activeWeapons = null;
    }

    levelUp() {
        this.level = this.level + 1;
        if (this.className === 'Warlock') {
            this.attack = this.attack + 1;
            this.magic = this.magic + 4;
            this.defense = this.defense + 3;
            this.speed = this.speed + 1;
            this.health = this.health + 10;
            this.mana = this.mana + 2;

        } else if (this.className === 'Gambler') {
            this.attack = this.attack + 10;
            this.magic = this.magic + 4;
            this.defense = this.defense + 3;
            this.speed = this.speed + 10;
            this.health = this.health + 10;
            this.mana = this.mana + 2;

        } else if (this.className === 'Medic') {
            this.attack = this.attack + 4;
            this.magic = this.magic + 5;
            this.defense = this.defense + 3;
            this.speed = this.speed + 1;
            this.health = this.health + 10;
            this.mana = this.mana + 5;

        }
    }

    getDamage() {
        if (this.activePet) {
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            return petDamage + magicDamage;
        } else if (this.activeAbility) {
            const abilityDamage = this.activeAbility.damage;
            const magicDamage = this.magic;
            return abilityDamage + magicDamage;
        } else if (this.activeWeapons) {
            const weaponDamage = this.activeWeapons.damage;
            const magicDamage = this.magic;
            return weaponDamage + magicDamage;
        } else {
            return this.attack
        }


    }

    summonPet(petName) {
        // if we have a pet in our this.pets array that matches the same in an argument to this function
        // lets summon it
        // we can loop over the pets we have to fin it
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array
            if (pet.name === petName) {
                this.activePet = pet;
            }
        }
    }

    equipAbility(abilityName) {
        // if we have a pet in our this.pets array that matches the same in an argument to this function
        // lets summon it
        // we can loop over the pets we have to fin it
        for (let i = 0; i < this.pets.length; i++) {
            const ability = this.abilities[i]; // this pet is equal to an individual pet element in our pets array
            if (ability.name === abilityName) {
                this.activeAbility = ability;
            }
        }
    }

    equipWeapon(weaponName) {
        // if we have a pet in our this.pets array that matches the same in an argument to this function
        // lets summon it
        // we can loop over the pets we have to fin it
        for (let i = 0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i]; // this pet is equal to an individual pet element in our pets array
            if (weapon.name === weaponName) {
                this.activeWeapons = weapon;
            }
        }
    }
}

module.exports = Character;