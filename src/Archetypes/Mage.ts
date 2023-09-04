import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instanceCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.instanceCount += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;