import { MissionUtils } from '@woowacourse/mission-utils';
import { Constants } from '../utils/Constants.js'
class InputView {
  static readCarNames(callback) {
    MissionUtils.Console.readLineAsync(Constants.INPUT_MESSAGES.CAR_NAME_QUESTION)
  }

  static readAttemptCount(callback) {
    MissionUtils.Console.readLineAsync(Constants.INPUT_MESSAGES.NUMBER_QUESTION)
  }
}

export default InputView;