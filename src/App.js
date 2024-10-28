import { Console } from '@woowacourse/mission-utils'
import { nameStrValid, runTimesValid } from './Valid.js';
import { createCarArr } from './createCarArr.js';
import { carRun } from './carRun.js';

class App {

  async run() {
    const NAME_STR = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    nameStrValid(NAME_STR)
    const RUN_TIMES = await Console.readLineAsync("시도할 횟수는 몇 회인가요?")
    runTimesValid(RUN_TIMES)

    carRun(createCarArr(NAME_STR), RUN_TIMES)
  }

}

export default App;