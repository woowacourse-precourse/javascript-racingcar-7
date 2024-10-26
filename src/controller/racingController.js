import { Console } from '@woowacourse/mission-utils';
import RacingModel from '../model/racingModel.js';

class RacingController {
  constructor() {
    this.model = new RacingModel();
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    if (this.validatecarNamesInput(carNamesInput)) {
      const carNames = carNamesInput.split(',');
      this.model.addCars(carNames);
    }
  }

  async getCount() {
    const conutInput =
      await Console.readLineAsync(`시도할 횟수는 몇회인가요 ?\n`);

    if (this.validateConut(conutInput)) {
      const conut = Number(conutInput);
      this.model.setCount(Number(conut));
    }
  }

  validatecarNamesInput(carNamesInput) {
    // 최소  알파벳으로 이루어진 2개 이상의 이름과 ","로 이루어져야하며 이름은 5자리 이하여야한다.
    const NAMES_LIST_PATTERN = /^([a-zA-Z]{1,5})(,[a-zA-Z]{1,5})*$/;

    // 정규표현식 패턴에 일치하지 않는 경우 에러를 던짐
    if (!carNamesInput.match(NAMES_LIST_PATTERN)) {
      console.log('에러 발생');
      throw new Error(
        '자동차 이름은 쉼표로 구분되고, 각 이름은 1~5자여야 합니다.',
      );
    }

    return true;
  }

  validateConut(conutInput) {
    if (isNaN(conutInput) || Number(conutInput) === 0) {
      console.log('에러 발생');
      throw new Error('count는 0 이외의 숫자 값만 받을 수 있습니다.');
    }

    return true;
  }
}

export default RacingController;
