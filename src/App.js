import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.race = []; // 전진 저장할 배열변수
  }
}

class App {
  startGame(cars) {
    for (const car of cars) {
      let rand = Math.floor(Math.random() * 10);
      if (rand >= 4) {
        car.race.push("-");
      }
    }

    for (const car of cars) {
      Console.print(car.name + " : " + car.race.join(""));
    }
  }

  splitInput(input) {
    const carNames = [];
    let tmp = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === ",") {
        if (tmp !== "") {
          // 길이 제한 예외 처리
          if (tmp.length > 6) {
            throw new Error("[ERROR]");
          }

          // 중복 검사 예외 처리
          if (carNames.includes(tmp)) {
            throw new Error("[ERROR]");
          }

          carNames.push(tmp);
        }
        tmp = ""; // 초기화
      } else {
        tmp += input[i];
      }
    }

    // 마지막 이름 추가
    if (tmp !== "") {
      if (tmp.length > 6) {
        throw new Error("[ERROR]");
      }
      if (carNames.includes(tmp)) {
        throw new Error("[ERROR]");
      }
      carNames.push(tmp);
    }

    return carNames;
  }

  isNumber(num) {
    return !isNaN(num) && !isNaN(parseInt(num));
  }

  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const numInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const carNames = this.splitInput(input);

    if (this.isNumber(numInput)) {
      if (parseInt(numInput) < 0) {
        throw new Error("[ERROR]");
      }
    } else {
      throw new Error("[ERROR]");
    }

    const cars = carNames.map((name) => new Car(name));
    for (let i = 0; i < numInput; i++) {
      this.startGame(cars);
      Console.print("");
    }
  }
}

export default App;
