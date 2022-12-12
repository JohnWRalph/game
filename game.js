// Require all classes here
const Pet = require('./characters/pet');
const Warlock = require('./characters/warlock');
const Gambler = require('./characters/gambler');
const Medic = require('./characters/medic');

// Create character of each class here
const warlock = new Warlock('Yahuu');
const gambler = new Gambler('Sam');
const medic = new Medic('Phil');

// Create and add additional pets to inventory here 
// for characters who do not have a starting pet. 
// This does not add them to active Pets.
const pet2 = new Pet('Pet2', 10);
medic.pets.push(pet2);
gambler.pets.push(pet2);

// Summon Pets here to add them to ActivePets
// character.summonPet(name, damage);
warlock.summonPet('Pet');
gambler.summonPet('Pet2');
medic.summonPet('Pet2');

// Equip weapons here to add them to ActiveWeapons
// character.equipAbility('spellname');
medic.equipWeapon('staff');

// Equip Abilities here to add them to Active Abilities
medic.equipAbility('smite');

// Level up your character which will also increase their stats
medic.levelUp();

// Return damage based on equipped items. 
console.log(medic.getDamage());

console.log(warlock);



