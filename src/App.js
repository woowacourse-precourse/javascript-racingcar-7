import {MissionUtils} from "@woowacourse/mission-utils";
import View from "./View.js";

class App {
  async run() {
    const carArray = await View.readLineCarNames();

    const racingRecords = carArray.map((car) => {
      return {name: car, records: []};
    });

    const tryNumberString = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryNumber = parseInt(tryNumberString, 10);

    if (isNaN(tryNumber)) {
      throw Error('[ERROR] 시도할 횟수는 숫자만 입력할 수 있습니다.');
    }

    const range = (number) => Array(number).fill('');

    const getRacingRoundResult = (array, count) => {
      const rounds = [...array];
      range(count).forEach(() => {
        rounds.forEach((round) => {
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
          if (randomNumber >= 4) {
            round.records.push(true);
          } else {
            round.records.push(false);
          }
        });
      });
      return rounds;
    }

    const racingRoundResult = getRacingRoundResult(racingRecords, tryNumber);

    MissionUtils.Console.print('');
    MissionUtils.Console.print(`실행 결과`);

    range(tryNumber).forEach((_, index) => {
      racingRoundResult.forEach((count) => {
        const recordsRound = count.records.slice(0, index + 1).filter(Boolean).length;

        const scoreChangeToDash = range(recordsRound).map(() => '-').join('');
        MissionUtils.Console.print(`${count.name} : ${scoreChangeToDash}`);
      });
      MissionUtils.Console.print('');
    });

    const getWinner = (array) => {
      const carRecordValue = array.map((round) => {
        const countTruthy = round.records.filter(Boolean);
        return countTruthy.length;
      });

      const winnerScore = Math.max(...carRecordValue);

      const winners = array.filter((round) => {
        return round.records.filter(Boolean).length === winnerScore;
      }).map((round) => round.name)
        .join(', ')

      return winners;
    }

    const finalWinner = getWinner(racingRoundResult);
    MissionUtils.Console.print(`최종 우승자 : ${finalWinner}`)
  }
}

export default App;
