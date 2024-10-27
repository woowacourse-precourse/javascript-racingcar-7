import { Console } from "@woowacourse/mission-utils";

class App {
  splitInput(input) {
    const carNames = [];
    let tmp = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === ",") {
        if (tmp !== "") {
          // 길이 제한 예외 처리
          if (tmp.length > 6) {
            throw new Error("[ERROR]");
          }

          // 중복 검사 예외 처리
          if (carNames.includes(tmp)) {
            throw new Error("[ERROR]");
          }

          carNames.push(tmp);
        }
        tmp = ""; // 초기화
      } else {
        tmp += input[i];
      }
    }

    // 마지막 이름 추가
    if (tmp !== "") {
      if (tmp.length > 6) {
        throw new Error("[ERROR]");
      }
      if (carNames.includes(tmp)) {
        throw new Error("[ERROR]");
      }
      carNames.push(tmp);
    }

    return carNames;
  }

  isNumber(num) {
    return !isNaN(num) && !isNaN(parseInt(num));
  }

  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const numInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const carNames = this.splitInput(input);
  }
}

export default App;
