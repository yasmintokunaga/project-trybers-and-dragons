import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePointRace: number;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    const newElf = new Elf(name, this._dexterity);
    const newMage = new Mage(name);
    this._race = newElf;
    this._archetype = newMage;
    this._maxLifePointRace = newElf.maxLifePoints;
    this._maxLifePoints = newElf.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: newMage.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }
  
  get archetype(): Archetype {
    return this._archetype;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defense;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense; // Cálculo correto do dano

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    this.receiveDamage(enemy.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { ...this._energy, amount: 10 };

    if (this._maxLifePoints > this._maxLifePointRace) {
      this._maxLifePoints = this._maxLifePointRace;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;