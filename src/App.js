import { Console, Random } from "@woowacourse/mission-utils";

class App {
  goCar() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  async run() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const names = inputCarNames.split(",");
    const movements = names.reduce((obj, name) => {
      obj[name] = "";

      return obj;
    }, {});

    const count = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    ).then(Number);

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < names.length; j++) {
        if (this.goCar()) {
          movements[names[j]] += "-";
        }
      }
    }

    Console.print(`자동차 경주 최종 결과 : ${JSON.stringify(movements)}`);
  }
}

export default App;
