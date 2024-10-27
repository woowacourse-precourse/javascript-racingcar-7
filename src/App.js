import { Console } from "@woowacourse/mission-utils";
import { splitComma, isSameCar, makeCarClassList, goRacing } from "./functions.js";

class App {
  async run() {
    const inputString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carList = splitComma(inputString);
    isSameCar(carList);
    const carClassList = makeCarClassList(carList);
    const ATTEMPTS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    for(let i=0; i<ATTEMPTS; i++){
      goRacing(carClassList);
    }
  }
}

export default App;
