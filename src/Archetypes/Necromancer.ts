import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instanceCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.instanceCount += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;