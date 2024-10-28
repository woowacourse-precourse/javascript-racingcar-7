import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNameArr = carNames.split(",").map((name) => name.trim());
    if (carNameArr.length == 0) {
      throw new Error("[ERROR] 자동차 이름은 1개 이상이어야 합니다.");
    }
    for (const name of carNameArr) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름을 5자 이하로 작성해주세요.");
      }
    }

    const tryNumber = parseInt(
      await Console.readLineAsync("시도할 횟수는 몇회인가요?\n"),
      10
    );
    if (isNaN(tryNumber) || tryNumber < 1) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }

    function canCarMove() {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        return true;
      }
      return false;
    }

    const carObj = carNameArr.reduce((acc, name) => {
      acc[name] = {
        name,
        position: 0,
      };
      return acc;
    }, {});

    Console.print("");
    Console.print("실행 결과");
    for (let i = 0; i < tryNumber; i++) {
      for (const car in carObj) {
        if (canCarMove()) {
          carObj[car].position++;
        }
        Console.print(
          `${carObj[car].name} : ${"-".repeat(carObj[car].position)}`
        );
      }
      Console.print("");
    }

    const maxPosition = Math.max(
      ...Object.values(carObj).map((car) => car.position)
    );
    const winner = Object.values(carObj)
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(", ");
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
