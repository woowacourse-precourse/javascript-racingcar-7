import { Console } from '@woowacourse/mission-utils';
import { InputView } from '../resources/Constants.js';

export default class Input {
  static async get() {
    const names = await Console.readLineAsync(InputView.INPUT_CAR_NAMES_PROMPT);
    const repetitionString = await Console.readLineAsync(
      InputView.INPUT_REPETITION_COUNT_PROMPT,
    );

    return { names, repetitionString };
  }
}
