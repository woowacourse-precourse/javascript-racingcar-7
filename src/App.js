import { Console, Random } from "@woowacourse/mission-utils";
import { getCarArray, getMaxDistance } from "./getUtils.js";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    const tryCount = await Console.readLineAsync("시도할 횟수는 몇회인가요?\n");

    const splittedCarNames = carNames.split(",");
    const carArray = getCarArray(splittedCarNames);

    for (let i = 0; i < tryCount; i++) {
      for (let j = 0; j < carArray.length; j++) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        carArray[j].goIfNumberOverFour(randomNumber);
        Console.print(
          `${carArray[j].name} : ${"-".repeat(carArray[j].distance)}`
        );
      }
      Console.print(" ");
    }

    const maxDistance = getMaxDistance(carArray);

  }
}

export default App;
