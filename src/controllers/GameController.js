import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import CarManager from '../models/CarManager.js';
import Validator from '../utils/Validator.js';
import GameManager from '../models/GameManager.js';

class GameController {
  static async play() {
    const carsMap = await GameController.#initialGame();
    const numberOfGames = await GameController.#getNumberOfGame();
    MissionUtils.Console.print('\n실행 결과');
    GameManager.getAfterGameMap(carsMap, numberOfGames);
    GameController.#printHighScoreCar(carsMap);
  }

  static async #initialGame() {
    const cars = await InputView.carInput();
    return CarManager.makeCarMap(cars);
  }

  static async #getNumberOfGame() {
    let input = await InputView.numberInput();
    input = parseFloat(input);
    Validator.numberOfGamesValidation(input);
    return input;
  }

  static #printHighScoreCar(carsMap) {
    const highScoreCarsArray = CarManager.getHighScoreCars(carsMap);
    const highScoreCarsString =
      OutputView.getStringHighScoreCars(highScoreCarsArray);
    OutputView.printWinners(highScoreCarsString);
  }
}
export default GameController;
