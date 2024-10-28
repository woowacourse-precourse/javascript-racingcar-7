import { MissionUtils } from '@woowacourse/mission-utils';
import PROMPT from '../constants/Prompt.js';
import InputPort from '../ports/InputPort.js';

const { Console } = MissionUtils;

export default class ConsoleInput extends InputPort {
  static async readCarsName () {
    return await Console.readLineAsync(PROMPT.INPUT_CAR_NAME);
  }

  static async readTargetRound () {
    return await Console.readLineAsync(PROMPT.INPUT_TARGET_ROUND);
  }
}
