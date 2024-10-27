import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carInput.split(",");
    const isValid = this.isValidCarNames(carNames);
    if (isValid) {
      return carNames;
    } else {
      return "[ERROR]";
    }
  }
  isValidCarNames(carNames) {
    const isValid = carNames.filter((i) => i == "").length == 0;
    return isValid;
  }
}

export default InputView;
