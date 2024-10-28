import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const names = await this.getCarNames();
      const attempts = await this.getAttempts();
      const cars = this.initializeCars(names);
      // 입력값 받아오기
      this.startRace(cars, attempts);
      this.printWinners(cars);
      // 함수 호출
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
      // 결과 출력
    }
  }
  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync("자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분).");
    // 입력값 받아오기
    const names = input.split(","); // 자동차 이름을 쉼표 기준으로 분리
    if (names.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.");
    }
    return names;
  }
  async getAttempts() {
    const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇회인가요?");
    const attempts = Number(input); // input을 숫자로 바꾸어 저장하고 계산
    if (isNaN(attempts) || attempts < 1) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
    return attempts;
  }

  initializeCars(names) { // 각 차의 초기값 초기화
    return names.map(name => ({ name, position: 0 }));
  }

  startRace(cars, attempts) { // 경주 과정을 계산해주는 함수
    for (let i = 0; i < attempts; i++) {
      cars.forEach(car => {
        const randomValue = MissionUtils.Random.pickNumberInRange(1, 9);
        if (randomValue >= 4) {
          car.position += 1;
        }
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
    }
  }

  printWinners(cars) { // 우승자 출력 함수
    const maxPosition = Math.max(...cars.map(car => car.position));
    const winners = cars.filter(car => car.position === maxPosition).map(car => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
  
}

export default App;