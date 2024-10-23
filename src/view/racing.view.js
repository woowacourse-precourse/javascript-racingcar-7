// @ts-check
import { input } from '../lib/view.js';

export class RacingView {
  static QUERY = Object.freeze({
    GET_CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  });

  /**
   *
   * @returns {Promise<string>}
   */
  static async getCarNames() {
    const result = await input(RacingView.QUERY.GET_CAR_NAMES);

    return result;
  }
}
