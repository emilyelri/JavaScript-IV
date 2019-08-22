// CODE here for your Lambda Classes

function GameObject(character) {
    this.createdAt = character.createdAt;
    this.name = character.name;
    this.dimensions = character.dimensions;
    };
  
    GameObject.prototype.destroy = function() {
      return(`${this.name} was removed from the game.`);
  };

  function CharacterStats(character) {
    GameObject.call(this, character);
    this.healthPoints = character.healthPoints;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
    return(`${this.name} took damage.`);
  }
  
  function Humanoid(character) {
    CharacterStats.call(this, character);
    this.team = character.team;
    this.weapons = character.weapons;
    this.language = character.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return(`${this.name} offers a greeting in ${this.language}.`);
  }

  function Villain(character) {
    Humanoid.call(this, character);
    armor: character.armor;
    evilness: character.evilness;
  }
  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.laugh = function() {
    return(`It is I, ${this.name}! Muawahahaha!`)};


  function Hero(character) {
      Humanoid.call(this, character);
      cape: character.cape;
      goodness: character.goodness;
    }
    Hero.prototype = Object.create(Humanoid.prototype);
  
    Hero.prototype.grandEntrance = function() {
      return(`Never fear, ${this.name}'s here!`)};


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
          'Sword',
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
    console.log(evilDude.laugh());
    console.log(superDude.grandEntrance());