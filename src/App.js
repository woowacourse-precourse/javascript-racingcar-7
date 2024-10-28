import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    /** 자동차 이름 받기 */
    const getCarNames = async () => {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = input.split(",").map((name) => name.trim());
      checkCarNames(carNames);
      return carNames;
    };

    /** 자동차 이름 검증 */
    const checkCarNames = (names) => {
      if (names.some((name) => name.length > 5 || !name)) {
        throw new Error("[ERROR] 자동차 이름은 1~5자 사이여야 합니다.");
      }
    };

    /** 시도 횟수 입력 */
    const getTryCount = async () => {
      const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = parseInt(input, 10);
      checkTryCnt(tryCount);
      return tryCount;
    };

    /** 시도 횟수 검증 */
    const checkTryCnt = (cnt) => {
      if (isNaN(cnt) || cnt <= 0) {
        throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
      }
    };

    /** 이동하기 */
    const moveCars = (cars) => {
      cars.forEach((car) => {
        const randNum = Random.pickNumberInRange(0, 9);
        if (randNum >= 4) {
          car.position++;
        }
      });
    };

    async function racingGame() {
      try {
        const carNames = await getCarNames();
        const tryCount = await getTryCount();

        const cars = carNames.map((name) => ({ name, position: 0 }));
        Console.print("\n실행 결과");

        for (let i = 0; i < tryCount; i++) {
          moveCars(cars);
        }
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }

    await racingGame();
  }
}

export default App;
