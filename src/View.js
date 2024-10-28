import { MissionUtils } from "@woowacourse/mission-utils";
import RacingGameValidator from "./RacingGameValidator.js";
import RacingGameUtils from "./RacingGameUtils.js";

class View {
  static async readLineCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.toString().split(',');

    RacingGameValidator.carNameLengthUnderSix(carNames);
    RacingGameValidator.carNumberOverOne(carNames);

    return carNames;
  }

  static async readLineTryCount() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryCount = parseInt(input, 10);

    RacingGameValidator.tryCountIsNumber(tryCount);
    RacingGameValidator.tryCountOverZero(tryCount);
    RacingGameValidator.tryCountIsPositiveNumber(tryCount);

    return tryCount;
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printRoundScore(tryCount, scoreBoard) {
    this.printNewLine();
    MissionUtils.Console.print(`실행 결과`);

    RacingGameUtils.range(tryCount).forEach((_, index) => {
      this.printRoundScoreToDash(scoreBoard, index);
      this.printNewLine();
    });
  }

  static printRoundScoreToDash(scoreBoard, index) {
    scoreBoard.forEach((count) => {
      const recordsRound = count.records.slice(0, index + 1).filter(Boolean).length;
      const scoreChangeToDash = RacingGameUtils.range(recordsRound).map(() => '-').join('');
      MissionUtils.Console.print(`${count.name} : ${scoreChangeToDash}`);
    });
  }

  static printFinalWinner(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners}`)
  }

  static printErrorMessage(errorMessages) {
    MissionUtils.Console.print(`${errorMessages}`);
  }
}

export default View;
