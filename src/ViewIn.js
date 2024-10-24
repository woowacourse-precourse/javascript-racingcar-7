import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class ViewIn {
  INPUT_CAR_MSG =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

  INPUT_GAME_COUNT_MSG = '시도할 횟수는 몇 회인가요?\n';

  async getUserInputObject() {
    const inputObject = {
      carList: '',
      gameCount: '',
    };

    inputObject.carList = await Console.readLineAsync(this.INPUT_CAR_MSG);
    Validator.isInvalid(inputObject.carList);
    Validator.existWriteSpace(inputObject.carList);

    inputObject.gameCount = await Console.readLineAsync(
      this.INPUT_GAME_COUNT_MSG,
    );
    Validator.isInvalid(inputObject.gameCount);
    Validator.existWriteSpace(inputObject.gameCount);

    return inputObject;
  }
}

export default ViewIn;
