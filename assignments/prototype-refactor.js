/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(character) {
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }
    destroy() {
        return(`${this.name} was removed from the game.`);
    }
}

class CharacterStats extends GameObject {
    constructor(character) {
        super(character);
        this.healthPoints = character.healthPoints;
  }
  takeDamage() {
    return(`${this.name} took damage.`);
  }
}

class Humanoid extends CharacterStats {
    constructor(character) {
        super(character);
        this.team = character.team;
        this.weapons = character.weapons;
        this.language = character.language;
    }
    greet() {
        return(`${this.name} offers a greeting in ${this.language}.`);
    }
}

class Villain extends Humanoid {
    constructor(character) {
    super(character);
    armor: character.armor;
    evilness: character.evilness;
    }
    laugh() {
    return(`It is I, ${this.name}! Muawahahaha!`);
}
}

class Hero extends Humanoid {
    constructor(character) {
        super(character);
        cape: character.cape;
        goodness: character.goodness;
    }
    grandEntrance() {
        return(`Never fear, ${this.name}'s here!`);
    }
}


    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });

    const evilDude = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 10,
        },
        healthPoints: 250,
        name: 'Lawrence',
        team: 'Darkness',
        weapons: [
          'Staff',
        ],
        language: 'Evil',
        armor: 'Golden',
        evilness: 'Maximum',
      });
    
      const superDude = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 11,
        },
        healthPoints: 300,
        name: 'Frederick',
        team: 'Light',
        weapons: [
          'Flaming Sword of Justice',
        ],
        language: 'Goodness',
        cape: 'Fabulous',
        goodness: 'Supreme',
      });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(evilDude.laugh()); // It is I, Lawrence! Muawahahaha!
    console.log(superDude.grandEntrance()); // Never fear, Frederick's here!