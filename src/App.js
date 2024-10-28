import { Console } from '@woowacourse/mission-utils'
import { NAMESTRValid, RUNTIMESValid } from './Valid.js';
import { createCarArr } from './createCarArr.js';

class App {

  async run() {
    const NAMESTR = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    NAMESTRValid(NAMESTR)
    const RUNTIMES = await Console.readLineAsync("시도할 횟수는 몇 회인가요?")
    RUNTIMESValid(RUNTIMES)
    createCarArr(NAMESTR)
  }

}

export default App;