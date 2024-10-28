// @ts-check
import { input, output } from '../lib/view.js';

export class RacingView {
  static QUERY = Object.freeze({
    GET_CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    GET_TRIAL_NUMBER: '시도할 횟수는 몇 회인가요?',
  });

  static MESSAGE = Object.freeze({
    GAME_START: '실행 결과',
    GAME_END: (winners) => `최종 우승자 : ${winners}`,
    RACING: (car) => `${car.name} : ${'-'.repeat(car.travelDistance)}`,
  });

  /**
   *
   * @returns {Promise<string>}
   */
  async getCarNames() {
    const result = await input(RacingView.QUERY.GET_CAR_NAMES);

    return result;
  }

  /**
   *
   * @returns {Promise<string>}
   */
  async getTrialNumber() {
    const result = await input(RacingView.QUERY.GET_TRIAL_NUMBER);

    return result;
  }

  printLineBreak() {
    output('');
  }

  printGameStart() {
    this.printLineBreak();

    output(RacingView.MESSAGE.GAME_START);
  }

  /**
   *
   * @param {Array<{ name: string, travelDistance: number }>} cars
   */
  printRacing(cars) {
    cars.forEach((car) => output(RacingView.MESSAGE.RACING(car)));
  }

  /**
   *
   * @param {string} winners
   */
  printGameEnd(winners) {
    output(RacingView.MESSAGE.GAME_END(winners));
  }
}
