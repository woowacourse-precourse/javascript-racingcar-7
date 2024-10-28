import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import CarManager from '../models/CarManager.js';
import Validator from '../utils/Validator.js';
import GameManager from '../models/GameManager.js';

class GameController {
  static async play() {
    const initialCarsMap = await GameController.#initialGame();
    const numberOfGames = await GameController.#getNumberOfGame();
    MissionUtils.Console.print('\n실행 결과');
    const updatedCarsMap = GameManager.getAfterGameMap(
      initialCarsMap,
      numberOfGames,
    );
    GameController.#printHighScoreCar(updatedCarsMap);
  }

  static async #initialGame() {
    const cars = await InputView.carInput();
    return CarManager.makeCarMap(cars);
  }

  static async #getNumberOfGame() {
    const input = await InputView.numberInput();
    return GameController.#parseAndValidateNumber(input);
  }

  static #parseAndValidateNumber(input) {
    const number = parseFloat(input);
    Validator.numberOfGamesValidation(number);
    return number;
  }

  static #printHighScoreCar(carsMap) {
    const highScoreCarsArray = CarManager.getHighScoreCars(carsMap);
    const highScoreCarsString =
      OutputView.getStringHighScoreCars(highScoreCarsArray);
    OutputView.printWinners(highScoreCarsString);
  }
}
export default GameController;
