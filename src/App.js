import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let carNameInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
      let carNames = carNameInput.split(",");
      let raceCountInput = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
      let raceCount = parseInt(raceCountInput, 10);

      console.log("names: ",carNames);
      console.log("count: ",raceCount);
    } catch (error) {
        Console.print(error.message);
        throw error;
    }
  }
}

export default App;
