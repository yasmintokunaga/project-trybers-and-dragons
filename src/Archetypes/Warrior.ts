import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instanceCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.instanceCount += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;