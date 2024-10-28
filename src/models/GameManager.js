import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../views/OutputView.js';

class GameManager {
  static #addOneRandomValue(map) {
    const newMap = new Map();
    map.forEach((value, key) => {
      let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber < 4) randomNumber = 0;
      newMap.set(key, value + randomNumber);
    });
    OutputView.printCurrentGame(newMap);
    return newMap;
  }

  static getAfterGameMap(map, NumberOfGames) {
    let currentMap = new Map(map);
    for (let i = 0; i < NumberOfGames; i += 1) {
      currentMap = GameManager.#addOneRandomValue(currentMap);
      MissionUtils.Console.print('');
    }
    return currentMap;
  }
}

export default GameManager;
