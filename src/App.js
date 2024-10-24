import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const separate = () => {
      return carNames.split(",");
    };

    const checkWordLength = () => {
      const separateNames = separate();
      for (let i = 0; i < separateNames.length; i++) {
        if (separateNames[i].length > 5) {
          throw new Error("[ERROR] 자동차 이름을 5자 이하로 작성해주세요.");
        }
      }
      return separateNames;
    };

    Console.print(checkWordLength());

    const inputCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    Console.print(inputCount + "회");
  }
}

export default App;
