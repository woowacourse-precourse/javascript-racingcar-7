import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = this.Separator(carName);

    const forwardTime = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    const carPosition = this.moveCar(carNames, Number(forwardTime));

    this.victoryCar(carNames, carPosition);
  }
  
  Separator(carName) {
    const carNames = carName.split(",");
    return carNames;
  }
  
  moveCar(carNames, forwardTime) {
    const carPosition = Object.fromEntries(carNames.map(name => [name, 0]));
    
    carNames.forEach(name => {
      carPosition[name] = this.calculatePosition(forwardTime);
      Console.print(`${name} : ${"-".repeat(carPosition[name])}`);
    });

    return carPosition;
  }
  
  calculatePosition(forwardTime) {
    let position = 0;
    for (let i = 0; i < forwardTime; i++) {
      if (this.shouldMove()) {
        position += 1;
      }
    }
    return position;
  }
  
  shouldMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    return randomNum >= 4;
  }
  
  victoryCar(carNames, carPosition) {

    const maxPosition = Math.max(...Object.values(carPosition));

    const winner = carNames.filter(
      (name) => carPosition[name] === maxPosition
    ).join(", ");

    Console.print(`최종 우승자 : ${winner}`);
  }
}


export default App;
