import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import CarManager from '../models/CarManager.js';
import Validator from '../utils/Validator.js';
import GameManager from '../models/GameManager.js';

class GameController {
  static async play() {
    const cars = await InputView.userInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carsMap = CarManager.makeCarMap(cars);

    const input = await InputView.userInput('시도할 횟수는 몇 회인가요?\n');
    const numberOfGames = Validator.numberOfGamesValidation(input);
    MissionUtils.Console.print('\n실행 결과');
    GameManager.getAfterGameMap(carsMap, numberOfGames);

    const highScoreCarsArray = CarManager.getHighScoreCars(carsMap);
    const highScoreCarsString =
      OutputView.getStringHighScoreCars(highScoreCarsArray);
    OutputView.printWinners(highScoreCarsString);
  }
}
export default GameController;
