import { Console } from "@woowacourse/mission-utils";
import { NameParser, NumberParser } from "./Parser.js";
import { Driver } from "./Driver.js";

class App {
  async run() {
    // 자동차 리스트 입력
    let nameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let nameList = NameParser(nameInput);

    // 전진 횟수 입력
    let numberInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    let number = NumberParser(numberInput);

    // 실행
    Driver(nameList, number);
  }
}

export default App;
