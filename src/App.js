import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car";

class App {
  async run() {
    while (true) {
      //1. 자동차 input

      const carsInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      if (carsInput.length === 0) {
        throw new Error("[ERROR] 입력된 자동차가 없습니다.");
      }

      //2. 횟수 input
      const tryCountInput = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
      const tryCount = parseInt(tryCountInput, 10);

      if (isNaN(tryCount) || tryCount <= 0) {
        throw new Error("[ERROR] 1회이상 정수인 시도횟수를 입력하세요");
      }

      // 자동차 명단 분리
      const carNames = carsInput.split(",").map((name) => name);

      const cars = [];

      carNames.forEach((name) => {
        if (name.length > 5) {
          throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
        }
        cars.push(new Car(name));
      });

      Console.print("실행 결과");
      for (let i = 0; i < tryCount; i++) {
        cars.forEach((car) => {
          car.plusCnt(); // 각 자동차가 움직이는 동작을 실행
          Console.print(`${car.name} : ${"-".repeat(car.getPosition())}`); // 현재 위치 출력
        });
        Console.print("");
      }

      // 최종 우승자 판별
      const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
      const winners = cars
        .filter((car) => car.getPosition() === maxPosition)
        .map((car) => car.name);

      // 우승자 출력
      if (winners.length === 1) {
        Console.print(`최종 우승자 : ${winners[0]}`);
      } else {
        Console.print(`최종 우승자 : ${winners.join(", ")}`);
      }

      break;
    }
  }
}

export default App;
