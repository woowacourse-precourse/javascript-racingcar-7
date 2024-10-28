import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    /** 자동차 이름 받기 */
    const getCarNames = async () => {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = input.split(",").map((name) => name.trim());
      // checkCarNames(carNames);
      return carNames;
    };

    /** 시도 횟수 입력 */
    const getTryCount = async () => {
      const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = parseInt(input, 10);
      // checkTryCnt(tryCount);
      return tryCount;
    };

    async function racingGame() {
      try {
        const carNames = await getCarNames();
        const tryCount = await getTryCount();
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }

    await racingGame();
  }
}

export default App;
