import { Console, Random } from "@woowacourse/mission-utils";
import { getNames } from "./utils/getNames.js";
import { getCount } from "./utils/getCount.js";
import { randomMoveHandler } from "./utils/randomMoveHandler.js";
import { decideWinner } from "./utils/decideWinner.js";
import { showResult } from "./utils/showResult.js";

class App {
  async run() {
    try {
      let nameArray = await getNames();
      let count = await getCount();

      let moveArray = Array.from({length: nameArray.length}, () => '');
      let winnerArray = [];

      // 전진 중...
      Console.print('\n실행 결과');
      
      randomMoveHandler(count, nameArray, moveArray);
      decideWinner(nameArray, moveArray, winnerArray);
      showResult(winnerArray);

    } catch (error) {
      throw error;
    }
  }
}

export default App;