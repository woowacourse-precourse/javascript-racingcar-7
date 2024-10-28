import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const names = this.getName(input);
    this.validateNames(names);

    let count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    count = parseInt(count, 10);

    let result = this.race(names, count);

    Console.print("실행 결과\n");
    result.forEach((round) => {
      round.forEach(({ name, dash }) => {
        Console.print(`${name} : ${dash}`);
      });
    });

    const winners = this.getWinners(result[result.length - 1]);
    Console.print(`\n최종 우승자 : ${winners.join(", ")}\n`);
  }

  getName(input) {
    return input.split(",").map((name) => name.trim());
  }

  validateNames(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }

  race(names, count) {
    const raceResult = [];

    for (let i = 0; i < count; i++) {
      const roundResult = names.map((name) => ({
        name,
        dash: this.moveCar(),
      }));
      raceResult.push(roundResult);
    }

    return raceResult;
  }

  moveCar() {
    let dash = "";
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      dash += "-";
    }
    return dash;
  }

  getWinners(finalRound) {
    const maxDash = Math.max(...finalRound.map(({ dash }) => dash.length));
    return finalRound
      .filter(({ dash }) => dash.length === maxDash)
      .map(({ name }) => name);
  }
}

export default App;
