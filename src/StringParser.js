import { DELEMETER } from './constants.js';

/**
 * 입력받은 문자열을 구분자로 기준으로 파싱하는 클래스
 */
class StringParser {
  /**
   *
   */
  constructor() {
    this.delemeter = DELEMETER;
  }

  /**
   *
   */
  parseString(cars) {
    return cars.split(this.delemeter);
  }
}

export default StringParser;
