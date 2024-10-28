import { Console } from "@woowacourse/mission-utils";
import CheckValue from "./CheckValue.js";
import Cargame from "./Cargame.js";

class App {
  async run() {
    const checkValue = new CheckValue();
    const cargame = new Cargame();

    // 자동차 이름을 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    let userInput = await Console.readLineAsync("");
    let userNames = userInput.split(","); // 쉼표를 기준으로 슬라이싱
    let userCounts = new Array(userNames.length).fill(0);

    // 입력값 검증
    for (let i = 0; i < userNames.length; i++) {
      checkValue.checkLength(userNames[i], 5);
    }

    // 게임 횟수를 입력
    Console.print("시도할 횟수는 몇 회인가요?");
    let maxCount = await Console.readLineAsync("");

    // 숫자 이외의 값을 가지는지 검증
    if (isNaN(maxCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    maxCount = parseInt(maxCount, 10);

    Console.print("실행 결과");

    // 자동차 경주 실행
    for (let i = 0; i < maxCount; i++) {
      cargame.runRace(userNames, userCounts);
    }

    let winnerNumber = Math.max(...userCounts); // 최댓값 찾기

    // 우승자 출력
    let winners = cargame.findWinners(userNames, userCounts, winnerNumber);
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
