import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instanceCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.instanceCount += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;