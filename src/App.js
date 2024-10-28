import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {

    const carsName = await this.getCars();
    const attemptCnt = await this.getAttemptCount();

    Console.print("");
    Console.print("실행 결과");

    const carsState = Array.from({ length: carsName.length }, () => '');

    for (let i = 0; i < attemptCnt; i++) {
      startRound(carsName, carsState);
    }

    Console.print(`최종 우승자 : ${this.getFinalWinner(carsName, carsState)}`)

  }

  getFinalWinner(carsName, carsState) {

    let maxLength = Math.max(...(carsState.map((v) => v.length)));
    const winnerCars = [];

    for (let i = 0; i < carsName.length; i++) {
      if (carsState[i].length === maxLength)
        winnerCars.push(carsName[i]);
    }

    return winnerCars.join(", ");
  }

  startRound(carsName, carsState) {

    for (let i = 0; i < carsName.length; i++) {
      let randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        carsState[i] += '-';
      }
      Console.print(`${carsName[i]} : ${carsState[i]}`);
    }
    Console.print("");

  }

  async getCars() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const input = await Console.readLineAsync("");

    const cars = input.split(",");

    let carsSet = new Set();
    cars.forEach((car) => {
      if (cars.length <= 0 || cars.length > 5)
        throw new Error("[ERROR] 자동차 이름의 길이는 1~5자 사이이어야 합니다.");

      if (carsSet.has(car))
        throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    })

    return cars;
  }

  async getAttemptCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    let attemptCnt = await Console.readLineAsync("").trim();

    attemptCnt = +attemptCnt;
    if (isNaN(attemptCnt) || attemptCnt <= 0)
      throw new Error("[ERROR] 시도 횟수는 자연수이어야 합니다.")

    return attemptCnt;
  }



}

export default App;
