import { Console } from '@woowacourse/mission-utils';
import RacingView from '../view/racingView.js';
import RacingModel from '../model/racingModel.js';
import ERROR_MESSAGE from '../constant/error.js';
import NAME_REG_EXP from '../constant/regexPatterns.js';
class RacingController {
  async start() {
    try {
      const carNames = await this.inputCarNames();
      const count = await this.inputCount();

      const racingModel = new RacingModel(carNames, count);

      Console.print('실행 결과');
      for (let i = 0; i < racingModel.count; i++) {
        racingModel.race();
        RacingView.printRaceStatus(racingModel.getCars());
      }

      RacingView.printWinners(racingModel.getWinners());
    } catch (error) {
      RacingView.printError(error.message);
      throw new Error('[ERROR]');
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

  validateCarNamesInput(carNamesInput) {
    const names = carNamesInput.split(',').map((name) => name.trim());
    const isValid = names.every((name) => NAME_REG_EXP.test(name));
    if (!isValid) {
      throw new Error(ERROR_MESSAGE.inputNameError);
    }
    return true;
  }

  validateCount(countInput) {
    const count = Number(countInput);
    if (isNaN(count) || count <= 0) {
      throw new Error(ERROR_MESSAGE.inputCountError);
    }
    return true;
  }
}

export default RacingController;
