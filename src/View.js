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

  static async readLineTryCount() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryCount = parseInt(input, 10);

    if (isNaN(tryCount)) {
      throw Error('[ERROR] 시도할 횟수는 숫자만 입력할 수 있습니다.');
    }

    return tryCount;
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printFinalWinner(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners}`)
  }
}

export default View;
