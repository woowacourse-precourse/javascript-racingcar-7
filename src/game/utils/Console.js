import { MissionUtils } from '@woowacourse/mission-utils';

export default class Console {
  static #CAR_NAMES_PROMPT =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
  static #TOTAL_ROUNDS_PROMPT = '시도할 횟수는 몇 회인가요?\n';
  static #INPUT_ERROR_MESSAGE = '[ERROR] 입력을 받는 중 에러가 발생하였습니다.';
  static #EXECUTION_RESULT_MESSAGE = '실행 결과';
  static #WINNER_MESSAGE = '최종 우승자';
  static #LINE_BREAK = '';

  static async getCarNames() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        this.#CAR_NAMES_PROMPT
      );

      return carNames;
    } catch {
      throw new Error(this.#INPUT_ERROR_MESSAGE);
    }
  }

  static async getTotalRounds() {
    try {
      const attemptCount = await MissionUtils.Console.readLineAsync(
        this.#TOTAL_ROUNDS_PROMPT
      );

      return attemptCount;
    } catch {
      throw new Error(this.#INPUT_ERROR_MESSAGE);
    }
  }

  static printExecutionResultMessage() {
    MissionUtils.Console.print(this.#EXECUTION_RESULT_MESSAGE);
  }

  static printLineBreak() {
    MissionUtils.Console.print(this.#LINE_BREAK);
  }

  static printDistance(car) {
    MissionUtils.Console.print(
      `${car.getName()} : ${car.getDistanceAsString()}`
    );
  }

  static printWinners(winners) {
    MissionUtils.Console.print(`${this.#WINNER_MESSAGE} : ${winners}`);
  }
}
