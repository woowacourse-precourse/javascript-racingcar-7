import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../views/OutputView.js';

class GameManager {
  static #addOneRandomValue(map) {
    map.forEach((value, key) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      map.set(key, value + randomNumber);
    });
    OutputView.printCurrentGame(map);
  }

  static getAfterGameMap(map, NumberOfGames) {
    for (let i = 0; i < NumberOfGames; i += 1) {
      GameManager.#addOneRandomValue(map);
      MissionUtils.Console.print('');
    }
  }
}

export default GameManager;
