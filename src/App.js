import { Console } from "@woowacourse/mission-utils";
import { ERRROR_MESSAGE } from "./errorMessage.js";

class App {
  async run() {
    try {
      const racingCarsInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력 하세요.(이름은 쉼표(,) 기준 으로 구분)\n",
      );

      const racingCars = racingCarsInput.split(",");
      racingCars.map(racingCar => {
        if (racingCar.length > 5) {
          throw new Error(ERRROR_MESSAGE.WORD_LIMIT);
        }
      });

      const tryNumber =
        await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    } catch (error) {
      throw error;
    }
  }
}

export default App;
