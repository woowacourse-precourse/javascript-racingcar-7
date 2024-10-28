import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getInput = async () => {
      MissionUtils.Console.print("문자열을 입력해 주세요");
      const input = await MissionUtils.Console.readLineAsync("");
      return input.split(",");
    };

    const getCount = async () => {
      var count;
      MissionUtils.Console.print("시도할 횟수를 입력해 주세요");
      count = parseInt(await MissionUtils.Console.readLineAsync(""), 10);
      if (!(count > 0)) {
        throw new Error("[ERROR] 유효하지 않은 숫자가 입력되었습니다: ");
      }
      return count;
    };

    const updateScore = (str, result) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        result[str] += 1;
      }
      MissionUtils.Console.print(`${str} : ${"-".repeat(result[str])}`);
    };

    const tryRace = async (input, count) => {
      MissionUtils.Console.print("실행 결과");

      const result = input.reduce((acc, str) => {
        acc[str] = 0;
        return acc;
      }, {});

      for (let i = 0; i < count; i++) {
        input.forEach((str) => {
          updateScore(str, result);
        });
        MissionUtils.Console.print("");
      }

      return result;
    };

    const getWinner = async (result) => {
      const maxScore = Math.max(...Object.values(result));
      const winners = Object.keys(result).filter(
        (str) => result[str] === maxScore
      );

      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    };

    const input = await getInput();
    const count = await getCount();

    const result = await tryRace(input, count);
    await getWinner(result);
  }
}

export default App;
