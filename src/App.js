import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let cars = input.split(",").map((name) => name.trim());

    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].length > 5) {
        throw new Error("[ERROR] 이름은 5글자 이하로 입력해주세요.");
      }
    }

    let numberOfMatches = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    Console.print("\n실행 결과");

    let positions = cars.map((car) => ({ name: car, position: "" }));
    for (let i = 0; i < numberOfMatches; i += 1) {
      positions.forEach((car) => {
        let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
          car.position += "-";
        }
        Console.print(car.name + " : " + car.position);
      });
      Console.print("");
    }

    let maxPosition = Math.max(...positions.map(car => car.position.length));
    let winners = positions.filter(car => car.position.length === maxPosition);

    Console.print("최종 우승자 : " + winners.map(car => car.name).join(', '));
  }
}

export default App;
 