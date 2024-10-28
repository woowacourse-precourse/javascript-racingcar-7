import { Console } from '@woowacourse/mission-utils';
import { ERROR_MSG } from '../../Util/Validator.js';

class ViewIn {
  constructor() {
    this.INPUT_CAR_MSG =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    this.INPUT_GAME_COUNT_MSG = '시도할 횟수는 몇 회인가요?\n';
  }

  async getUserInputObject() {
    const inputObject = {
      carList: await this.getUserInput(this.INPUT_CAR_MSG),
      gameCount: await this.getUserInput(this.INPUT_GAME_COUNT_MSG),
    };
    return inputObject;
  }

  async getUserInput(inputMessage) {
    const userInputString = await Console.readLineAsync(inputMessage);
    this.validate(userInputString);

    return userInputString;
  }

  validate(userInputString) {
    this.isInvalid(userInputString);
    this.existWriteSpace(userInputString);
  }

  isInvalid(userInputString) {
    if (
      userInputString === undefined ||
      userInputString === 'undefined' ||
      userInputString === null ||
      userInputString === 'null' ||
      userInputString === '' ||
      userInputString.length === 0
    ) {
      throw Error(ERROR_MSG.INVALID_INPUT_DATA);
    }
  }

  existWriteSpace(userInputString) {
    if (userInputString.includes(' ')) {
      throw Error(ERROR_MSG.EXSIT_WHITE_SPACE);
    }
  }
}

export default ViewIn;
