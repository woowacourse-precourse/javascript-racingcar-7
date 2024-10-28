import { MissionUtils } from "@woowacourse/mission-utils";
import splitInput from "./splitInput.js"

// 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
// pobi,woni,jun
// 시도할 횟수는 몇 회인가요?
// 5

// 실행 결과
// pobi : -
// woni : 
// jun : -

// pobi : --
// woni : -
// jun : --

// pobi : ---
// woni : --
// jun : ---

// pobi : ----
// woni : ---
// jun : ----

// pobi : -----
// woni : ----
// jun : -----

// 최종 우승자 : pobi, jun
class App {
  async run() {
    const INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const CARNAMES = splitInput(INPUT);
    
    // MissionUtils.Console.print(CARNAMES);
  }
}

export default App;
