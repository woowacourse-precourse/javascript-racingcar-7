import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const CAR_NAMES = await this.inputCarNames();
    const ATTEMPTS = await this.inputAttempts();
    const RESULTS = this.race(CAR_NAMES, ATTEMPTS);
    this.printRaceResults(RESULTS, ATTEMPTS);
    this.declareWinners(RESULTS);
  }
  // 입력 받는창
  async inputCarNames() {
    const INPUT_CARS = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const CARS = INPUT_CARS.split(",").map((name) => name.trim());
    this.validateCarNames(CARS);
    return CARS;
  }
  // 시도 받는창
  async inputAttempts() {
    const INPUT_ATTEMPTS = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const ATTEMPTS = Number(INPUT_ATTEMPTS);
    if (isNaN(ATTEMPTS) || ATTEMPTS <= 0) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    return ATTEMPTS;
  }
  // 차 이름 유효성 검사
  validateCarNames(cars) {
    for (const name of cars) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      } else if (name.length <= 0) {
        throw new Error("[ERROR] 자동차 이름 1자 이상 작성해주세요.");
      }
    }
  }
  // 자동차 경주 : 랜덤 수 뽑고 저장
  race(carNames, attempts) {
    const RESULTS = carNames.map((name) => ({
      name,
      position: 0,
      positionsHistory: [], // 각 자동차의 위치 기록
    }));

    for (let i = 0; i < attempts; i++) {
      RESULTS.forEach((car) => {
        const RANDOM_NUM = Random.pickNumberInRange(0, 9);
        Console.print(RANDOM_NUM, car);
        if (RANDOM_NUM >= 4) {
          car.position += 1; // 전진
        }
        car.positionsHistory.push(car.position); // 위치 기록
      });
    }

    return RESULTS;
  }
  // 주행 과정을 출력
  printRaceResults(results, attempts) {
    Console.print("차수별 실행 결과");

    for (let i = 0; i < attempts; i++) {
      results.forEach((car) => {
        const CURR_POSITION = car.positionsHistory[i] || 0; // 현재 위치
        Console.print(`${car.name} : ${"-".repeat(CURR_POSITION)}`);
      });
    }
  }
  // 우승자 출력
  declareWinners(results) {
    const MAX_CAR = Math.max(...results.map((car) => car.position));
    const WINNERS = results
      .filter((car) => car.position === MAX_CAR)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${WINNERS.join(", ")}`);
  }
}

export default App;
