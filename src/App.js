// App.js
import { Console } from "@woowacourse/mission-utils";
import { GameManager } from "./GameManager.js";

class App {
  async run() {
    try {
      const { carNames, attempts } = await this.getUserInput();
      const game = new GameManager(carNames);

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
    const attempts =
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    this.validateAttempts(attempts);
    return { carNames, attempts: Number(attempts) };
  }

  validateAttempts(attempts) {
    const number = Number(attempts);
    if (Number.isNaN(number) || number < 1) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
  }

  async playGame(game, attempts) {
    for (let i = 0; i < attempts; i++) {
      game.race();
      Console.print(""); // 빈 줄 출력
      game.printCurrentStatus();
    }
  }
}

export default App;
