import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 자동차 문자열 입력
    const inputCarNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n`
    );

    // 입력받은 문자열을 "," 기준으로 나누고 양쪽 공백 제거
    const carNamesArray = inputCarNames
      .split(",")
      .map((carName) => carName.trim());

    // 자동차 이름 5문자 초과일 경우 예외 발생
    const invalidName = carNamesArray.find((carName) => carName.length > 5);
    if (invalidName) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해야 합니다.");
    }

    // 테스트 코드
    Console.print(carNamesArray);
  }
}

export default App;
