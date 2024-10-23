import { Console, Random } from "@woowacourse/mission-utils";

class App {
  go() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  moveCar(movements, currentRace) {
    if (this.go()) {
      movements[currentRace][1] += "-";
    }
  }

  async run() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const names = inputCarNames.split(",");
    const movements = names.reduce((obj, name) => {
      obj.push([name, ""]);

      return obj;
    }, []);

    const count = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    ).then(Number);

    Console.print("\n실행 결과");

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < names.length; j++) {
        this.moveCar(movements, j);
      }

      movements.forEach(car => {
        Console.print(car.join(" : "));
      });

      Console.print("");
    }

    movements.sort((a, b) => b[1].length - a[1].length);

    const maxDistance = movements[0][1].length;

    const winner = movements
      .filter(car => car[1].length === maxDistance)
      .map(car => car[0])
      .join(", ");

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
