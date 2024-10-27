import {MissionUtils} from "@woowacourse/mission-utils";

class View {
  static async readLineCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.toString().split(',');

    carNames.forEach((car) => {
      if (car.length > 5) {
        throw Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    return carNames;
  }
}

export default View;
