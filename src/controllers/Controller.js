import InputView from '../views/InputView.js';
import CarParser from '../utils/CarParser.js';
import MoveCar from '../models/MoveCar.js';
import OutputView from '../views/OutputView.js';
import Winners from '../models/Winners.js';
import gameInputValidator from '../models/validations/GameInputValidator.js';
import carInputValidator from '../models/validations/CarInputValidator.js';

class Controller {
  static async run() {
    try {
      // 사용자 입력 (자동차 이름, 게임 횟수)
      const carInput = await InputView.readCarInput();
      // car 객체 생성
      const carList = CarParser.splitCar(carInput);
      carInputValidator(carList);
      const gameInput = await InputView.readGameInput();
      gameInputValidator(gameInput);

      // 게임 시작
      OutputView.printNewLine();
      OutputView.printRun();
      for (let i = 0; i < gameInput; i += 1) {
        MoveCar.moveForwardIfPossible(carList);
        OutputView.printGame(carList);
        OutputView.printNewLine();
      }
      // 우승자 출력
      const winners = Winners.findWinners(carList);
      OutputView.printWinners(winners);
    } catch (error) {
      OutputView.printInput(error);
      throw error;
    }
  }
}

export default Controller;
