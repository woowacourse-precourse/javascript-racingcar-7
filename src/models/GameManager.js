import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../views/OutputView.js';
import { GAME_CONSTANTS } from '../constants/constants.js';

class GameManager {
  static #addOneRandomValue(map) {
    map.forEach((value, key) => {
      let randomNumber = MissionUtils.Random.pickNumberInRange(
        GAME_CONSTANTS.RANDOM.MIN,
        GAME_CONSTANTS.RANDOM.MAX,
      );
      if (randomNumber < GAME_CONSTANTS.RANDOM.FORWARD_THRESHOLD)
        randomNumber = 0;
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
