import { Console } from '@woowacourse/mission-utils'
import { determineEachMove } from './determineMove.js';
import Car from './Car.js';
class App {
  async run() {
    const CARLIST = [];

    const INPUTCARS = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const INPUTTIMES = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    let carNamesList = INPUTCARS.split(",");

    for(let i = 0; i < carNamesList.length; i++){
      let car = new Car(carNamesList[i]);
      CARLIST.push(car);
    }

    determineEachMove(CARLIST);
  }
}

export default App;
