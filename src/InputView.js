import { Console } from '@woowacourse/mission-utils';
import { ERROR_MSG } from './Validator.js';

function isInvalid(userInputString) {
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

function existWriteSpace(userInputString) {
  if (userInputString.includes(' ')) {
    throw Error(ERROR_MSG.EXSIT_WHITE_SPACE);
  }
}

function validate(userInputString) {
  isInvalid(userInputString);
  existWriteSpace(userInputString);
}

class ViewIn {
  INPUT_CAR_MSG =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

  INPUT_GAME_COUNT_MSG = '시도할 횟수는 몇 회인가요?\n';

  async getUserInputObject() {
    const inputObject = {
      carList: '',
      gameCount: '',
    };

    inputObject.carList = await this.getUserInput(this.INPUT_CAR_MSG);
    inputObject.gameCount = await this.getUserInput(this.INPUT_GAME_COUNT_MSG);

    return inputObject;
  }

  async getUserInput(inputMessage) {
    const userInputString = await Console.readLineAsync(inputMessage);
    validate(userInputString);

    return userInputString;
  }
}

export default ViewIn;
