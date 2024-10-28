import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js"

class App {
  async run() {
    try {

      // 사용자 입력 구현
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();
      
      // 자동차 객체 초기화
      const cars = carNames.map((name) => new Car(name));

      // 경기 진행
      this.startRace(cars, attempts);

    } catch (error) {

      Console.print(error.message);

    } finally {

      return;

    }

  }

  async getCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)로 구분)\n");
    const names = input.split(",").map((name) => name.trim());

    // 이름이 범위 내 길이를 갖지 않는 경우 예외 처리
    if (names.some((name) => name.length > 5 || !name)) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.");
    }

    return names;
  }

  async getAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attempts = Number(input);

    // 시도 횟수가 숫자가 아니거나, 0 이하로 설정한 경우 예외 처리
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
    }

    return attempts;
  }

  startRace(cars, attempts) {
    Console.print("\n실행결과");
    for (let i = 0; i < attempts; i++) {
      cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          car.move();
        }
        Console.print(`${car.name} : ${"-".repeat(car.position)}`);
      });
      Console.print(""); // 회차 구분을 위해 빈 줄 출력
    }
  }
}

export default App;
