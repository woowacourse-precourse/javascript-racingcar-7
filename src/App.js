import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carDistanceMap = new Map();
    this.attemptCount = 0;
    this.maxDistance = -1;
  }

  async run() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carInit(carNamesInput);

    const attemptCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.attemptCount = Number(attemptCountInput);
  }

  /**
   * 자동차이름들 입력
   * ,로 구분하여 carDistanceMap에 저장
   * 초기는 0으로 저장한다.
   * @param {*} carNamesInput
   */
  carInit(carNamesInput) {
    let carNames = carNamesInput.split(",");

    carNames.forEach((carName) => {
      this.carDistanceMap.set(carName, 0);
    });
  }
}

export default App;
