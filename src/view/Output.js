import { Console } from '@woowacourse/mission-utils';

class Output {
  static OUTPUT_TITLE = '실행 결과';

  /**
   * @returns {void}
   */
  static printTitle() {
    Console.print('\n' + this.OUTPUT_TITLE);
  }
}

export default Output;
