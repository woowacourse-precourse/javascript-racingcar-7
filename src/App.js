import PrintFunc from "./print/printFunc.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    await this.gatherUserInputs();
  }

  async gatherUserInputs() {
    const carNames = await this.checkCarNameInput();
    const raceRap = await this.checkRacingInputRap();
    PrintFunc.printParams(`${carNames},${raceRap}`);
  }

  async checkCarNameInput() {
    const carsInput = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.
      (이름은 쉼표(,) 기준으로 구분 / 자동차는 최소 두대 이상이어야 합니다) : `
    );

    if (!carsInput.includes(",")) {
      return PrintFunc.printError("쉼표(,)로 참가자들을 구분해주세요");
    }

    const carsInputArray = carsInput.split(",");

    if (carsInputArray.length < 2) {
      return PrintFunc.printError("최소 두대 이상의 자동차를 참가 시켜주세요");
    }

    return carsInputArray;
  }

  async checkRacingInputRap() {
    const racingTimeInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요? : ");

    if (isNaN(Number(racingTimeInput))) {
      return PrintFunc.printError("횟수는 숫자여야합니다");
    }

    return racingTimeInput;
  }
}

export default App;
