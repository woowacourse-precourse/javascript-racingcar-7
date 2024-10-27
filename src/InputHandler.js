import { Console } from "@woowacourse/mission-utils";

class InputHandler {

  async readCarsName() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.validateEmpty(input);
    const carNames = input.split(',');
    this.validateCarCount(carNames);
    this.validateNamesLength(carNames);
    this.validateNoEmptyNames(carNames);
    return input;
  }

  validateEmpty(input) {
    if (!input.trim()) {
      throw new Error("[ERROR] 이름이 입력 되지 않았습니다.");
    }
  }

  validateCarCount(carNames) {
    if (carNames.length < 2) {
      throw new Error("[ERROR] 이름을 2개 이상 입력해주세요.");
    }
  }
  
  validateNamesLength(carNames) {
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error("[ERROR] 이름은 5자 이하만 허용됩니다.");
      }
    });
  }

  validateNoEmptyNames(carNames) {
    carNames.forEach(name => {
      if (name === "") {
        throw new Error("[ERROR] 이름에 공백은 허용되지 않습니다.");
      }
    });
  }
}

export default InputHandler;
