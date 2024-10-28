import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printCurrentGame(map) {
    map.forEach((value, key) => {
      const formattedLine = this.formatGameLine(key, value);
      MissionUtils.Console.print(formattedLine);
    });
  }

  static formatGameLine(key, value) {
    const currentGameLine = '-'.repeat(value);
    return `${key} : ${currentGameLine}`;
  }

  static getStringHighScoreCars(carsArray) {
    let carString = '';
    for (let i = 0; i < carsArray.length; i += 1) {
      carString += `${carsArray[i]},`;
    }
    carString = carString.replace(/,\s*$/, '');
    return carString;
  }

  static printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }

  static printError(message) {
    MissionUtils.Console.print(message);
  }
}

export default OutputView;
