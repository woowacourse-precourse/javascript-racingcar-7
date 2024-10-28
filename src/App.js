import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 쉼표로 구분하여 입력해주세요. \n"
    );

    try {
      const result = this.racing(input);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      throw error;
    }
  }

  racing(input) {}
}

export default App;
