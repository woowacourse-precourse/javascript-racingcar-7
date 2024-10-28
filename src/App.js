import startGame from "./game/gameFunc.js";
import PrintFunc from "./print/printFunc.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    await this.gatherUserInputs();
  }

  async gatherUserInputs() {
    const carNames = await this.checkCarNameInput();
    const raceLap = await this.checkRacingInputLap();

    startGame(carNames, raceLap);
  }

  async checkCarNameInput() {
    const carsInput = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.
      (이름은 쉼표(,) 기준으로 구분 / 
      자동차는 최소 두대 이상이어야 합니다 / 
      이름은 5자 이하만 가능합니다) : `
    );

    if (!carsInput.includes(",")) {
      return PrintFunc.printError("쉼표(,)로 참가자들을 구분해주세요");
    }

    const carsInputArray = carsInput.split(",");

    switch (true) {
      case carsInputArray.some((input) => !input.trim()):
        return PrintFunc.printError("자동차 이름을 다시 확인해 주세요");

      case carsInputArray.length < 2:
        return PrintFunc.printError("최소 두대 이상의 자동차를 참가 시켜주세요");

      case carsInputArray.some((name) => name.length > 5):
        return PrintFunc.printError("이름은 5글자 이하여야 합니다");

      default:
        break;
    }

    return carsInputArray;
  }

  async checkRacingInputLap() {
    const racingTimeInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요? : ");

    switch (true) {
      case isNaN(Number(racingTimeInput)):
        return PrintFunc.printError("횟수는 숫자여야합니다");;

      case !racingTimeInput.trim():
        return PrintFunc.printError("횟수는 빈 값일 수 없습니다.");

      case Number(racingTimeInput) <= 0:
        return PrintFunc.printError("횟수는 양수 값이여야 합니다.");

      case !Number.isInteger(Number(racingTimeInput)):
        return PrintFunc.printError("횟수가 소수이면 안됩니다")

      default:
        break;
    }

    return racingTimeInput;
  }
}

export default App;
