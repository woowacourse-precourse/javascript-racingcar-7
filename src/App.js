import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const carNames = await this.getCarNames();
    this.checkCarNameLength(carNames);
    Console.print(carNames);

    const attemptCount = await this.getAttemptCount();
  }

  // - [O] 자동차 이름 받기(쉼표로 구분)
  // - [O] 이름이 5자 이하인지 검증
  // - [O] 시도할 횟수 입력 받기

  async getCarNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const inputName = await Console.readLineAsync("");
    return this.splitCarNames(inputName);
  }

  splitCarNames(inputName) {
    return inputName
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);
  }

  checkCarNameLength(carNames) {
    const lengthExceeded = carNames.filter((name) => name.length > 5);
    if (lengthExceeded.length > 0) {
      throw new Error(
        `[ERROR] 자동차 이름은 5자 이하만 가능합니다: ${lengthExceeded.join(
          ", "
        )}`
      );
    }
  }

  async getAttemptCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const inputCnt = await Console.readLineAsync("");
    return parseInt(inputCnt);
  }
}

export default App;
