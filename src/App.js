import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    await this.getCarNames();
    await this.getGameRound();
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    let carList = [];
    carList = input.split(',');
    Console.print(carList);
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
