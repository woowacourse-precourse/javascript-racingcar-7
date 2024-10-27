import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름(이름은 쉽표(,) 기준으로 구분)\n"
    );

    if (inputCarNames === "") {
      throw new Error("[ERROR]: 빈 문자열은 입력할 수 없습니다.");
    }

    const carNames = inputCarNames.split(",");

    const uniqueCarNames = [];

    carNames.forEach((carName) => {
      if (uniqueCarNames.includes(carName)) {
        throw new Error("[ERROR]: 같은 이름은 불가능합니다.");
      }
      if (carName.length > 5) {
        throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다.");
      }
      uniqueCarNames.push(carName);
    });

    const inputNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (isNaN(inputNum)) {
      throw new Error("[ERROR]: 숫자만 입력가능합니다.");
    }
    if (inputNum == 0) {
      throw new Error("[ERROR]: 0은 입력할 수 없습니다.");
    }
  }
}

export default App;
