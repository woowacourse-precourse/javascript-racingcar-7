import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.race = []; // 전진 저장할 배열 변수
  }
}

class App {
  startGame(cars) {
    cars.forEach((car) => {
      let rand = MissionUtils.Random.pickNumberInRange(0, 9);
      if (rand >= 4) car.race.push("-");
      Console.print(car.name + " : " + car.race.join(""));
    });
    Console.print(""); // 각 시도 끝에 공백 줄 추가
  }

  splitInput(input) {
    const carNames = [];
    let tmp = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === ",") {
        if (tmp !== "") this.validateCarName(tmp, carNames);
        carNames.push(tmp);
        tmp = "";
      } else {
        tmp += input[i];
      }
    }

    if (tmp !== "") this.validateCarName(tmp, carNames);
    carNames.push(tmp);

    return carNames;
  }

  validateCarName(name, carNames) {
    if (name.length > 6 || carNames.includes(name)) throw new Error("[ERROR]");
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

    if (!this.isNumber(numInput) || parseInt(numInput) < 0)
      throw new Error("[ERROR]");
    const carNames = this.splitInput(input);
    const cars = carNames.map((name) => new Car(name));

    for (let i = 0; i < numInput; i++) this.startGame(cars);

    const maxRaceLength = Math.max(...cars.map((car) => car.race.length));
    const longestRaceCars = cars.filter(
      (car) => car.race.length === maxRaceLength
    );

    const winners = longestRaceCars.map((car) => car.name).join(", ");
    Console.print("최종 우승자 : " + winners);
  }
}

export default App;
