import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      await this.getCarNames();
      await this.getGameRound();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const carList = input.split(',').map((carName) => this.isValidCarName(carName));
      Console.print(carList);
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
    const input = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const gameRound = parseInt(input);
    Console.print(gameRound);
  }
}

export default App;
