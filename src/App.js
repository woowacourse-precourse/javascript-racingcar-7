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

    // 공백 문자열이나 빈 문자열 예외 처리
    const gapInvalidName = carNamesArray.some((carName) => carName === "");
    if (gapInvalidName) {
      throw new Error(
        "[ERROR] 자동차 이름에 빈 문자열 또는 공백을 입력할 수 없습니다."
      );
    }

    // 자동차 이름 5자 초과일 경우 예외 발생
    const invalidName = carNamesArray.find((carName) => carName.length > 5);
    if (invalidName) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해야 합니다.");
    }

    // 중복된 자동차 이름 예외 처리
    const uniqueNames = new Set(carNamesArray);
    if (uniqueNames.size !== carNamesArray.length) {
      throw new Error("[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.");
    }

    // 이동 횟수 입력
    const moveCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );

    // 테스트 코드: 유효한 경우 자동차 이름 배열 출력
    Console.print(carNamesArray);
    Console.print(moveCount);
  }
}

export default App;
