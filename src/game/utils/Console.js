import { MissionUtils } from '@woowacourse/mission-utils';
import Parser from './Parser.js';

export default class Console {
  static #CARS_NAME_PROMPT =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
  static #ATTEMPT_COUNT_PROMPT = '시도할 횟수는 몇 회인가요?\n';
  static #INPUT_ERROR_MESSAGE = '[ERROR] 입력을 받는 중 에러가 발생하였습니다.';
  static #WINNER_MESSAGE = '최종 우승자';

  static async getCarsName() {
    try {
      const carsName = await MissionUtils.Console.readLineAsync(
        this.#CARS_NAME_PROMPT
      );

      return carsName;
    } catch {
      throw new Error(this.#INPUT_ERROR_MESSAGE);
    }
  }

  static async getTotalRounds() {
    try {
      const attemptCount = await MissionUtils.Console.readLineAsync(
        this.#ATTEMPT_COUNT_PROMPT
      );

      return attemptCount;
    } catch {
      throw new Error(this.#INPUT_ERROR_MESSAGE);
    }
  }

  static print(string) {
    MissionUtils.Console.print(string);
  }

  static printDistance(car) {
    MissionUtils.Console.print(
      `${car.getName()} : ${car.getDistanceAsString()}`
    );
  }

  static printWinners(winnersArray) {
    MissionUtils.Console.print(
      `${this.#WINNER_MESSAGE} : ${Parser.joinWithComma(winnersArray)}`
    );
  }
}
