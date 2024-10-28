import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT_CARS = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT_ATTEMPTS = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const ATTEMPTS = Number(INPUT_ATTEMPTS);
    if (isNaN(ATTEMPTS) || ATTEMPTS <= 0) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    const CAR_NAMES = INPUT_CARS.split(",").map((name) => name.trim());
    for (const name of CAR_NAMES) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
    Console.print(`${INPUT_CARS} \n시도횟수: ${INPUT_ATTEMPTS}`);
    const RESULTS = CAR_NAMES.map((name) => ({
      name,
      position: 0,
      positionHistory: [],
    }));
    for (let i = 0; i < ATTEMPTS; i++) {
      RESULTS.forEach((car) => {
        const RANDOM_NUM = Random.pickNumberInRange(0, 9);
        Console.print(RANDOM_NUM, car);
        // 4이상이면, 전진시키기
        if (RANDOM_NUM >= 4) {
          car.position += 1;
        }
        Console.print(`결과 ${car.position}, ${car.positionHistory}`);
        car.positionHistory.push(car.position);
      });
    }

    for (let i = 0; i < ATTEMPTS; i++) {
      RESULTS.forEach((car) => {
        const CURRENT_POSITION = car.positionHistory[i] || 0;
        Console.print(`${car.name} : ${"-".repeat(CURRENT_POSITION)}`);
      });
    }
  }
}
export default App;
