import { Console, MissionUtils } from "@woowacourse/mission-utils";
import * as Validate from "./utils/validate.js";

class App {
  async run() {
    try {
      let carNames = null;
      let tryNumber = null;

      for (let i = 1; i < 10; i++) {
        let inputCarNames = String(
          await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n => "
          )
        ).replace(/\s+/g, "");

        const isErrorCarNames = Validate.validateInputCarNames(inputCarNames);

        if (isErrorCarNames) {
          carNames = inputCarNames;
          break;
        }

        if (i === 1) {
          throw Error("[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.");
        }
      }

      let carNamesArray = carNames.split(/,/);

      for (let i = 1; i < 10; i++) {
        let inputTryString = await MissionUtils.Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?\n => "
        );
        let inputTryNum = Number(inputTryString.trim());

        const isErrorTryNum = Validate.validateInputTryNum(inputTryNum);

        if (isErrorTryNum) {
          tryNumber = inputTryNum;
          break;
        }

        if (i === 1) {
          throw Error("[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.");
        }
      }

      this.racingGame(carNamesArray, tryNumber);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  racingGame(carNamesArray, tryNumber) {
    const objectArray = this.readyRacingGame(carNamesArray);

    this.startRacingGaming(objectArray, tryNumber);

    this.whoIsWinner(objectArray);
  }

  readyRacingGame(carNamesArray) {
    let carNamesObjectArray = carNamesArray.map((name) => {
      return { carName: name, forwardNum: 0 };
    });

    return carNamesObjectArray;
  }

  startRacingGaming(carNamesObjectArray, tryNumber) {
    for (let i = 1; i <= tryNumber; i++) {
      const canYouForward = carNamesObjectArray.map((howForward) => {
        const whatRandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

        if (whatRandomNumber > 4) {
          howForward.forwardNum += 1;
        }

        return howForward;
      });

      carNamesObjectArray = canYouForward;

      carNamesObjectArray.forEach((result) => {
        let dashes = "-".repeat(result.forwardNum);
        Console.print(`${result.carName} : ${dashes}`);
      });
      console.log("");
    }
  }

  whoIsWinner(carNamesObjectArray) {
    const maxForwardNum = Math.max(
      ...carNamesObjectArray.map((result) => result.forwardNum)
    );

    const filteredCarNamesObjectArray = carNamesObjectArray.filter(
      (result) => result.forwardNum === maxForwardNum
    );

    const extractWinnerCarNames = filteredCarNamesObjectArray.map((result) => {
      return result.carName;
    });

    const winnerCarNames = extractWinnerCarNames
      .map((member) => member)
      .join(", ");

    Console.print(`최종 우승자 : ${winnerCarNames}`);
  }
}

export default App;
