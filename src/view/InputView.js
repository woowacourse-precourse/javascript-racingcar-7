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
      throw new Error("[ERROR] 자동차 이름은 공백을 포함할 수 없습니다.");
    }
  }
  isValidCarNames(carNames) {
    const isValid = carNames.filter((i) => i == "").length == 0;
    return isValid;
  }
  async getTryCount() {
    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (this.isValidTryCount(tryCountInput)) {
      return tryCountInput;
    } else {
      throw new Error("[ERROR] 시도 횟수는 정수 숫자만 가능합니다.");
    }
  }
  isValidTryCount(tryCountInput) {
    const parsed = parseInt(tryCountInput, 10);
    return !isNaN(parsed) && parsed > 0;
  }
}

export default InputView;
