import { Console } from '@woowacourse/mission-utils';

class CarRacingInputReader {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    this.validateInput(input);

    return input.split(',');
  }

  static async getTotalRounds() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    this.validateInput(input);

    return parseInt(input);
  }

  static validateInput(input) {
    if (!input.trim()) {
      throw new Error(`[ERROR] 값을 제대로 입력해주세요.`);
    }
  }
}
export default CarRacingInputReader;
