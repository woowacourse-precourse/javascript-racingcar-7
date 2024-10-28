import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      this.carList = await this.getCarNames();
      const gameRound = await this.getGameRound();
      await this.runRacingGame(this.carList, gameRound);
      this.printWinner();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      return input.split(',').map((carName) => this.isValidCarName(carName));
    } catch (error) {
      throw error;
    }
  }

  isValidCarName(carName) {
    if (!carName || carName.trim() === '') {
      throw new Error('자동차 이름은 비어 있을 수 없습니다.');
    }
    if (carName.length > 5) {
      throw new Error('자동차 이름은 5자 이하이어야 합니다.');
    }
    return carName.trim();
  }

  async getGameRound() {
    try {
      const input = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
      return this.isValidGameRound(input);
    } catch (error) {
      throw error;
    }
  }

  isValidGameRound(input) {
    const gameRound = Number(input);
    if (gameRound <= 0) {
      throw new Error('게임 시행 횟수는 양의 정수로 입력해야 합니다.');
    }
    if (isNaN(gameRound)) {
      throw new Error('게임 시행 횟수는 올바른 숫자로 입력해야 합니다.');
    }
    return gameRound;
  }

  async runRacingGame(carList, gameRound) {
    this.gameRounds = Array(carList.length).fill(0);

    Console.print('');
    Console.print('실행 결과');

    Array.from({ length: gameRound }).forEach(() => {
      this.moveCars();
      this.printGameRounds();
    });
  }

  moveCars() {
    this.carList = this.carList.map((car, index) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      if (this.moveCar(car, randomValue)) {
        this.gameRounds[index]++;
      }
      return car;
    });
  }

  moveCar(car, randomValue) {
    return randomValue >= 4;
  }

  printGameRounds() {
    this.carList.forEach((car, index) => {
      Console.print(`${car} : ${'-'.repeat(this.gameRounds[index])}`);
    });
    Console.print('');
  }

  getWinner() {
    const gameWinner = Math.max(...this.gameRounds);
    return this.carList.filter((car, index) => this.gameRounds[index] === gameWinner);
  }

  printWinner() {
    const result = this.getWinner();
    Console.print(`최종 우승자 : ${result.join(', ')}`);
  }
}

export default App;
