import { Console } from '@woowacourse/mission-utils';

class GetInput {
  static async getCarNames() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n');
    carNames.split(',')
    const carNamesArray = carNames.split(',').map(name => name.trim());

    carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 5글자 이하로 입력해주세요.");
      }
    });
    return carNamesArray;
  }

  static async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    if (isNaN(tryCount)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    return Number(tryCount);
  }
}

export default GetInput;