import { MissionUtils } from '@woowacourse/mission-utils';
import Parser from './Parser.js';

export default class Console {
  static #CARS_NAME_PROMPT =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
  static #ATTEMPT_COUNT_PROMPT = '시도할 횟수는 몇 회인가요?\n';

  static async getCarsName() {
    const carsName = await MissionUtils.Console.readLineAsync(
      this.#CARS_NAME_PROMPT
    );

    return carsName;
  }

  static async getAttemptCount() {
    const attemptCount = await MissionUtils.Console.readLineAsync(
      this.#ATTEMPT_COUNT_PROMPT
    );

    return attemptCount;
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
      `최종 우승자 : ${Parser.joinWithComma(winnersArray)}`
    );
  }
}
