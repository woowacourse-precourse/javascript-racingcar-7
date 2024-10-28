import { Console } from '@woowacourse/mission-utils';
import CarRacingInputValidator from '../validator/CarRacingInputValidator.js';
import ERROR_MESSAGES from '../utills/errors.js';

class CarRacingInputReader {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    CarRacingInputValidator.validateNotEmpty(
      input,
      ERROR_MESSAGES.INPUT.EMPTY_INPUT
    );
    CarRacingInputValidator.validateCarNames(input);

    return input.split(',');
  }

  static async getTotalRounds() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    CarRacingInputValidator.validateNotEmpty(
      input,
      ERROR_MESSAGES.INPUT.EMPTY_INPUT
    );
    CarRacingInputValidator.validateTotalRounds(input);

    return parseInt(input, 10);
  }
}

export default CarRacingInputReader;
