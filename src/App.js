import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getCount, displayResults } from "../src/IO.js";
import { randomRacing } from "../src/racing.js";
import { MESSAGE } from "../src/message.js";


class App{
  async run(){
    try{
      const carNames = await getCarNames();
      const count = await getCount();
      Console.print("\n"+MESSAGE.RESULT);
      const results = randomRacing(carNames, count, displayResults);
    } catch (error) {
    Console.print(`오류가 발생했습니다: ${error.message}`);
    throw error;  
     }
   }
}

  export default App;