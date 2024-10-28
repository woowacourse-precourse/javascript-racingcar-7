import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('이름을 쉼표(,)로 구분하여 입력해 주세요: ');

      const names = this.NameStorage(input);

      MissionUtils.Console.print(names);

    } catch (error) {
      MissionUtils.Console.print(`${error.message}`);
      throw error;
    }
  }

  NameStorage(input) {
    return input.split(",").map(name => name.trim());
  }
}

export default App;
