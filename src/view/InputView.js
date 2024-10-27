import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carInput.split(",");
    return this.isValidCarNames(carNames) ? carNames : "[ERROR]";
  }
  isValidCarNames(carNames) {
    const isValid = carNames.map((i) => i != "");
    return isValid;
  }
}

export default InputView;
