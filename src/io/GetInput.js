import { Console } from '@woowacourse/mission-utils';

class GetInput {
  static async getCarNames() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분) \n');
    return carNames.split(',');
  }

  static async getTryCount() {
    return await Console.readLineAsync('시도할 횟수는 몇회인가요? \n');
  }
}

export default GetInput;