// RacingController.js
import { Console, Random } from '@woowacourse/mission-utils';
import RacingModel from '../model/RacingModel.js';
import RacingView from '../view/racingView.js';

class RacingController {
  async start() {
    try {
      const carNames = await this.inputCarNames();
      const count = await this.inputCount();

      const racingModel = new RacingModel(carNames, count);

      Console.print('실행 결과');
      for (let i = 0; i < racingModel.count; i++) {
        racingModel.rece();
        RacingView.printRaceStatus(racingModel.cars);
      }

      RacingView.printWinners(racingModel.getWinners());
    } catch (error) {
      RacingView.printError(error.message);
    }
  }

  async inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    if (this.validateCarNamesInput(carNamesInput)) {
      return carNamesInput.split(',').map((name) => name.trim());
    }
  }

  async inputCount() {
    const countInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if (this.validateCount(countInput)) {
      return Number(countInput);
    }
  }

  static validateCarNamesInput(carNamesInput) {
    const names = carNamesInput.split(',').map((name) => name.trim());
    const isValid = names.every((name) => /^[a-zA-Z]{1,5}$/.test(name));
    if (!isValid) {
      throw new Error(
        '자동차 이름은 쉼표로 구분되고, 각 이름은 1~5자여야 합니다.',
      );
    }
    return true;
  }

  static validateCount(countInput) {
    const count = Number(countInput);
    if (isNaN(count) || count <= 0) {
      throw new Error('시도 횟수는 0보다 큰 숫자여야 합니다.');
    }
    return true;
  }
}

export default RacingController;
