import {MissionUtils} from "@woowacourse/mission-utils";
import RacingGame from "./RacingGame.js";
import Utils from "./Utils.js";
import View from "./View.js";

class App {
  async run() {
    const {carNames, tryCount} = await this.readLineGameInputs();

    const game = new RacingGame();

    game.getInitialBoard(carNames);
    const scoreBoard = game.getScoreBoard();

    const getRacingRoundResult = (array, count) => {
      const rounds = [...array];
      Utils.range(count).forEach(() => {
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

    const racingRoundResult = getRacingRoundResult(scoreBoard, tryCount);

    View.printNewLine();
    MissionUtils.Console.print(`실행 결과`);

    Utils.range(tryCount).forEach((_, index) => {
      racingRoundResult.forEach((count) => {
        const recordsRound = count.records.slice(0, index + 1).filter(Boolean).length;

        const scoreChangeToDash = Utils.range(recordsRound).map(() => '-').join('');
        MissionUtils.Console.print(`${count.name} : ${scoreChangeToDash}`);
      });
      View.printNewLine();
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
    View.printFinalWinner(finalWinner);
  }

  async readLineGameInputs() {
    const carNames = await View.readLineCarNames();
    const tryCount = await View.readLineTryCount();
    return {carNames, tryCount}
  }
}

export default App;
