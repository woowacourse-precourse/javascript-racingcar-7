import { Console } from '@woowacourse/mission-utils';
import RacingModel from '../model/racingModel.js';

class RacingController {
  constructor() {
    this.model = new RacingModel();
  }

  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.model.addCars(carNames.split(','));

    const conut = await Console.readLineAsync(`시도할 횟수는 몇회인가요 ?\n`);
    this.model.setCount(Number(conut));
  }
}

export default RacingController;
