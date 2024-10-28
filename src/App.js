import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.inputCarNames();
    const attempts = await this.inputAttempts();
    const finalResults = this.race(carNames, attempts);
    this.printRaceResults(finalResults, attempts);
    this.declareWinners(finalResults);
  }
  // 입력 받는창
  async inputCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input.split(",").map((name) => name.trim());
    this.validateCarNames(carNames);
    return carNames;
  }
  // 시도 받는창
  async inputAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const attempts = Number(input);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    return attempts;
  }
  // 차 이름 유효성 검사
  validateCarNames(carNames) {
    for (const name of carNames) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
  }
  // 자동차 경주 : 랜덤 수 뽑고 저장
  race(carNames, attempts) {
    const results = carNames.map((name) => ({
      name,
      position: 0,
      positionsHistory: [], // 각 자동차의 위치 기록
    }));

    for (let i = 0; i < attempts; i++) {
      results.forEach((car) => {
        const randomNum = Random.pickNumberInRange(0, 9);
        Console.print(randomNum, car);
        if (randomNum >= 4) {
          car.position += 1; // 전진
        }
        car.positionsHistory.push(car.position); // 위치 기록
      });
    }

    return results;
  }
  // 주행 과정을 출력
  printRaceResults(results, attempts) {
    Console.print("차수별 실행 결과");

    for (let i = 0; i < attempts; i++) {
      results.forEach((car) => {
        const currentPosition = car.positionsHistory[i] || 0; // 현재 위치
        Console.print(`${car.name} : ${"-".repeat(currentPosition)}`);
      });
    }
  }
  // 우승자 출력
  declareWinners(results) {
    const maxPosition = Math.max(...results.map((car) => car.position));
    const winners = results
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
