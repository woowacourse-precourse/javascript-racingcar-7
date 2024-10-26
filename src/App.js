import { Console } from '@woowacourse/mission-utils'
import RacingCar from './RacingCar.js';
import { determineEachMove } from './determineMove.js';
class App {
  async run() {
    const RACINGCARLIST = [];

    const INPUTRACINGCAR = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const INPUTTIMES = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    let racingCarNamesList = INPUTRACINGCAR.split(",");

    for(let i = 0; i < racingCarNamesList.length; i++){
      let racingCar = new RacingCar(racingCarNamesList[i]);
      RACINGCARLIST.push(racingCar);
    }

    determineEachMove(RACINGCARLIST);
  }
}

export default App;
