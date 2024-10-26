import InputView from '../views/InputView.js';
import CarParser from '../utils/CarParser.js';
import MoveCar from '../models/MoveCar.js';
import OutputView from '../views/OutputView.js';
import Winners from '../models/Winners.js';

class Controller {
  static async run() {
    // 사용자 입력 (자동차 이름, 게임 횟수)
    const carInput = await InputView.readCarInput();
    const gameInput = await InputView.readGameInput();
    // car 객체 생성
    const carList = CarParser.splitCar(carInput);
    // 게임 시작
    OutputView.printRun();
    for (let i = 0; i < gameInput; i += 1) {
      MoveCar.moveForwardIfPossible(carList);
      OutputView.printGame(carList);
      OutputView.printNewLine();
    }
    const winners = Winners.findWinners(carList);
    OutputView.printWinners(winners);
  }
}

export default Controller;
