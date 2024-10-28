import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      //유효성 검사 및 초기화
      const carNames = await this.getCarNames();
      const raceCount = await this.getRaceCount();
      const cars = this.initializeCars(carNames);

      for (let i = 0; i < raceCount; i++) {
        this.raceOnce(cars);
        this.printRaceResults(cars);
      }

      //출력
      const winners = this.findWinners(cars);
      this.printFinalWinners(winners);
    } catch (error) {
      Console.print(error.message);
      throw error; // 에러를 다시 던져 테스트에서 검출할 수 있도록 처리
    }
  }
  // 1. 입력 처리 및 유효성 검사
  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input.split(",");
    if (carNames.some((name) => name.length > 5 || name === "")) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
    }
    return carNames;
  }
  async getRaceCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const raceCount = Number(input);
    if (isNaN(raceCount) || raceCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수로 입력해주세요.");
    }
    return raceCount;
  }

  // 2. 전진 조건 생성
  initializeCars(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  // 3. 경기 진행
  raceOnce(cars) {
    cars.forEach((car) => {
      const move = Random.pickNumberInRange(0, 9);
      if (move >= 4) car.position += 1;
    });
  }

  printRaceResults(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  // 4. 우승자 판별
  findWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars
      .filter((car) => car.position === maxPosition) // 우승자 필터링
      .map((car) => car.name);
  }

  // 5. 최종 우승자 출력
  printFinalWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
