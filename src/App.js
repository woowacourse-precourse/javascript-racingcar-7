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

    const input = await getInput();
    const count = await getCount();

    MissionUtils.Console.print(count);
  }
}

export default App;
