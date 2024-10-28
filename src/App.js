import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carDistanceMap = new Map();
    this.attemptCount = 0;
    this.maxDistance = -1;
    this.MOVING_FORWARD = 4;
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

    this.playRacing();

    this.racingResult();
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
      this.checkCarName(carName);
      this.carDistanceMap.set(carName, 0);
    });
  }

  /**
   * 1~5글자 사이인지 확인
   * 영문만 허락한다.
   * 중복을 걸러낸다.
   * @param {*} carName
   */
  checkCarName(carName) {
    const regex = new RegExp("^[A-Za-z]{1,5}$");
    if (!regex.test(carName)) {
      throw new Error("[ERROR]");
    }

    if (this.carDistanceMap.has(carName)) {
      throw new Error("[ERROR]");
    }
  }

  /**
   * 레이싱 게임을 진행
   * 시도할 횟수만큼 반복한다.
   * random을 통해 4(MOVING_FORWARD)이상일때만 이동을 진행한다.
   */
  playRacing() {
    if (this.attemptCount === 0) return;

    Console.print("실행 결과");
    this.carDistanceMap.forEach((moveDistance, carName) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      //MOVING_FORWARD이상이면 이동
      if (randomNumber >= this.MOVING_FORWARD) {
        this.carDistanceMap.set(carName, moveDistance + 1);
        this.maxDistance = Math.max(moveDistance + 1, this.maxDistance);
      }
      this.printCar(carName);
    });

    this.attemptCount--;
    this.playRacing();
  }

  /**
   * 현재 자동차의 상태 출력
   */
  printCar(carName) {
    let moveDistance = this.carDistanceMap.get(carName);

    //n번 반복
    Console.print(`${carName} : ${"-".repeat(moveDistance)}`);
  }

  racingResult() {
    let winnerCarNames = [];
    this.carDistanceMap.forEach((moveDistance, carName) => {
      if (this.maxDistance === moveDistance) {
        winnerCarNames.push(carName);
      }
    });

    if (winnerCarNames.length === 0) {
      Console.print(`최종 우승자 : 없음`);
    } else {
      Console.print(`최종 우승자 : ${winnerCarNames.join(", ")}`);
    }
  }
}

export default App;
