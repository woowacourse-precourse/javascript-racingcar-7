import { Console } from "@woowacourse/mission-utils";
import { GameManage } from "./GameManage.js";

class App {
  async run() {
    try {
      const { carNames, attempts } = await this.getUserInput();
      const game = new GameManage(carNames);

      Console.print("\n실행 결과");
      await this.playGame(game, attempts);

      const winners = game.getWinners();
      Console.print(`\n최종 우승자 : ${winners}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
  async getUserInput() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분).\n"
    );
    const repeat = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return { carNames, repeat: Number(repeat) };
  }

  async playGame(game, repeat) {
    for (let i = 0; i < repeat; i++) {
      game.race();
      Console.print(""); // 빈 줄 출력
      game.printCurrentStatus();
    }
  }
}

export default App;
