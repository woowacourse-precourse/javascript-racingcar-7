import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const playerNames = await this.getPlayerNames();
    const trials = await this.getTrials();

    this.racingGame(playerNames, trials);
  }

  async getPlayerNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const names = input.split(",");

    return names;
  }

  async getTrials() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    return input;
  }

  racingGame(playerNames, trials) {
    const players = playerNames.map((name) => ({ name, position: 0 }));

    Console.print("\n실행 결과");
    for (var i = 0; i < trials; i++) {
      players.forEach((player) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          player.position += 1;
        }
        Console.print(`${player.name} : ${"-".repeat(player.position)}`);
      });
      Console.print("");
    }
  }
}

export default App;
