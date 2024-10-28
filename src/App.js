import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getInput = async () => {
      MissionUtils.Console.print("문자열을 입력해 주세요");
      const input = await MissionUtils.Console.readLineAsync("");
      return input.split(",");
    };

    const input = await getInput();
    MissionUtils.Console.print(input);
  }
}

export default App;
