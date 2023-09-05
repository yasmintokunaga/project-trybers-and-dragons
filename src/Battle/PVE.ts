import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  _player: Fighter;
  _listOfMonsters: Monster[] | SimpleFighter[];

  constructor(player: Character | Fighter, arr: Monster[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._listOfMonsters = arr;
  }

  fight(): number {
    do {
      this._listOfMonsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    } while (
      this._player.lifePoints !== -1
      && !this._listOfMonsters.some((monster) => monster.lifePoints === -1)
    );

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;