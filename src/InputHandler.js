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

  async readAttemptCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.validateEmpty(input);
    this.validateIsNumber(input);
    this.validatePositiveNumber(input);
    this.validateIsInteger(input);
    return Number(input);
  }

  validateEmpty(input) {
    if (!input.trim()) {
      throw new Error("[ERROR] 공백이 입력 되었습니다.");
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

  validateIsNumber(input) {
    const numberInput = Number(input);
    if (Number.isNaN(numberInput)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }

  validatePositiveNumber(input) {
    if (Number(input) < 1) {
      throw new Error("[ERROR] 1 이상의 숫자를 입력해주세요.");
    }
  }

  validateIsInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error("[ERROR] 정수를 입력해주세요.");
    }
  }
}

export default InputHandler;
