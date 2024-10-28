import {Console, Random} from "@woowacourse/mission-utils";

class App {
  async run() {
    // 자동차 이름 입력 받기
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input.split(",").map((name) => name.trim());

    // 이름 길이 검증 (5자 이하)
    for (const name of carNames) {
      if (name.length === 0 || name.length > 5) {
        Console.print(
          "[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다."
        );
        return;
      }
    }

    Console.print(`입력한 자동차 이름: ${carNames.join(", ")}`);
    // 추후 기능 구현을 위해 carNames를 저장하거나 전달할 수 있습니다.

    // 시도 횟수 입력 받기
    const attemptInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const attempts = Number(attemptInput.trim());

    // 시도 횟수 검증 (숫자가 아니거나 0 이하인 경우)
    if (isNaN(attempts) || attempts <= 0 || !Number.isInteger(attempts)) {
      Console.print("[ERROR] 시도 횟수는 0 이상의 정수여야 합니다.");
      return;
    }

    Console.print(`시도할 횟수: ${attempts}`);

    // 자동차 초기화
    const cars = carNames.map((name) => ({name, position: 0}));

    // 경주 시작
    for (let i = 0; i < attempts; i++) {
      this.moveCars(cars);
      this.printCars(cars);
    }

    // 최종 우승자 출력
    const winners = this.determineWinners(cars);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }

  moveCars(cars) {
    cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.position += 1;
      }
    });
  }

  printCars(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print(""); // 구분을 위한 빈 줄 추가
  }

  determineWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default App;
