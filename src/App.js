import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let carNameInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
      let carNames = this.validateCarNames(carNameInput);
      let raceCountInput = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
      let raceCount = parseInt(raceCountInput, 10);

      let carPositions = this.initializeCarPositions(carNames);
      this.runRace(carNames, carPositions, raceCount);

      const winners = this.getWinners(carPositions);
      Console.print(`\n최종 우승자: ${winners.join(", ")}`);

    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  /**
   * @author CWDll
   * @describe 입력받은 문자열을 검증하는 함수
   * @parameter {carNameInput: string[]}
   * @returnValue {carNames} - 검증된 자동차 이름 배열
   */
  validateCarNames(carNameInput) {
    let carNames = carNameInput.split(",").map(name => name.trim());
    if (carNames.length < 2) {
      throw new Error("자동차 이름은 2개 이상 입력해야 합니다.");
    }
    carNames.forEach(name => {
      if(name.length === 0 || name.length > 5) {
        throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    })

    return carNames;
  }

  /**
   * @author CWDll
   * @describe 난수를 생성하는 함수
   * @returnValue {number} - 0 ~ 9 사이의 난수
   */
  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  /**
   * @author CWDll
   * @describe 난수를 생성하고, 4 이상일 경우 자동차가 전진하도록 설정하는 함수
   * @returnValue {boolean} - 전진 여부를 반환 (true: 전진, false: 멈춤)
   */
  shouldMove() {
    const randomNumber = this.generateRandomNumber();
    return randomNumber >= 4;
  }

  /**
   * @author CWDll
   * @describe 선택한 자동차가 움직이는지 확인하는 함수
   * @parameter {carName: string, isMoving: boolean}
   */
  carMovingCheck(car, isMoving, carPositions) {
    if (isMoving) {
      carPositions[car] += 1;
    }
  }

  /**
   * @author CWDll
   * @describe 자동차 초기 위치(0)를 설정하는 함수
   * @parameter {carNames: string[]}
   */
  initializeCarPositions(carNames) {
    const carPositions = {};
    carNames.forEach(car => {
      carPositions[car] = 0;
    });
    return carPositions;
  }

  /**
   * @author CWDll
   * @describe 자동차 경주를 실행하는 함수
   * @parameter {carNames: string[], carPositions: Object, raceCount: number}
   */
  runRace(carNames, carPositions, raceCount) {
    for(let i=0 ; i < raceCount; i++) {
      Console.print(`\n${i+1}회 경주 결과`);

      carNames.forEach(car => {
        const isMoving = this.shouldMove();
        this.carMovingCheck(car, isMoving, carPositions);
        this.showCarPosition(car, carPositions[car]);
      })
    }
  }

  /**
   * @author CWDll
   * @describe 자동차 현재 위치를 출력하는 함수
   * @parameter {carName: string, position: number}
   */
  showCarPosition(car, position) {
    const positionMark = "-".repeat(position);
    Console.print(`${car} : ${positionMark}`);
  }

  /**
   * @author CWDll
   * @describe runRace 우승자 결정하는 함수
   * @parameter {carPositions: Object}
   * @returnValue {string[]} - 우승자 이름 배열
   */
  getWinners(carPositions) {
    const maxPosition = Math.max(...Object.values(carPositions));
    const winners = Object.keys(carPositions).filter(car => carPositions[car] === maxPosition);
    return winners;
  }
}




export default App;
