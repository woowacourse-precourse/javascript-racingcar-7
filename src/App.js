import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNameInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carArray = carNameInput.toString().split(',');

    carArray.forEach((car) => {
      if (car.length > 5) {
        throw Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    const racingRecords = carArray.map((car) => {
      return {name: car, record: []};
    });

    const tryNumberString = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryNumber = parseInt(tryNumberString, 10);

    if (isNaN(tryNumber)) {
      throw Error('[ERROR] 시도할 횟수는 숫자만 입력할 수 있습니다.');
    }

    const range = (number) => {
      return Array(number).fill('');
    }

    const getRacingRoundResult = (array, count) => {
      range(count).forEach((_, index) => {
        array.forEach((round) => {
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
          if (randomNumber >= 4) {
            round.record.push(true);
          } else {
            round.record.push(false);
          }
        });
        return array;
      });
    }

    getRacingRoundResult(racingRecords, tryNumber);
  }
}

export default App;
