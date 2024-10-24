import { Console } from '@woowacourse/mission-utils';

class Controller {
  INPUT_CAR_MSG =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

  INPUT_GAME_COUNT_MSG = '시도할 횟수는 몇 회인가요?\n';

  userInputCarList;

  userInputGameCount;

  constructor() {}

  async getUserInputData() {
    this.userInputData = await Console.readLineAsync(this.INPUT_CAR_MSG);
    this.userInputGameCount = await Console.readLineAsync(
      this.INPUT_GAME_COUNT_MSG,
    );
  }
}

export default Controller;
