import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNamesInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const attemptsInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!this.isValidAttempts(attemptsInput)) {
      throw new Error("[ERROR] Invalid attempts number");
    }

    const carNames = carNamesInput.split(',');
    if (!this.validateCarNames(carNames)) {
      throw new Error("[ERROR] Invalid car names");
    }

    const attempts = parseInt(attemptsInput, 10);
    this.playGame(carNames, attempts);
  }

  playGame(carNames, attempts) {
    const distances = Array(carNames.length).fill(0);

    MissionUtils.Console.print(`\n실행 결과`);
    for (let i = 0; i < attempts; i++) {
      this.moveCars(carNames, distances);
      this.printRoundResult(carNames, distances);
    }

    const winners = this.determineWinners(carNames, distances);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  moveCars(carNames, distances) {
    carNames.forEach((_, index) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        distances[index]++;
      }
    });
  }

  printRoundResult(carNames, distances) {
    carNames.forEach((car, index) => {
      MissionUtils.Console.print(`${car} : ${'-'.repeat(distances[index])}`);
    });
    MissionUtils.Console.print(''); // 빈 줄 출력
  }

  determineWinners(carNames, distances) {
    const maxDistance = Math.max(...distances);
    return carNames.filter((_, index) => distances[index] === maxDistance);
  }

  validateCarNames(carNames) {
    return carNames.every(name => name.length <= 5);
  }

  isValidAttempts(attempts) {
    const number = parseInt(attempts, 10);
    return !isNaN(number) && number > 0;
  }
}

export default App;
