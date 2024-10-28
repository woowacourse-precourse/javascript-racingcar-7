import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getInput = async () => {
      MissionUtils.Console.print("문자열을 입력해 주세요");
      const input = await MissionUtils.Console.readLineAsync("");
      return input.split(",");
    };
    const getCount = async () => {
      MissionUtils.Console.print("시도할 횟수를 입력해 주세요");
      return parseInt(await MissionUtils.Console.readLineAsync(""), 10);
    };
    const tryRace = async (input, count) => {
      MissionUtils.Console.print("실행 결과");
      const result = {};
      input.forEach((str) => {
        result[str] = 0;
      });

      for (let i = 0; i < count; i++) {
        input.forEach((str) => {
          if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
            result[str] += 1;
          }
          MissionUtils.Console.print(`${str} : ${"-".repeat(result[str])}`);
        });
        MissionUtils.Console.print("");
      }

      return result;
    };

    const input = await getInput();
    const count = await getCount();

    await tryRace(input, count);
  }
}

export default App;
