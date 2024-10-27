import { Console } from "@woowacourse/mission-utils";

export class NumberInput {
  async getInput() {
    Console.print("시도할 횟수는 몇 회인가요?")
    const input = await Console.readLineAsync("");
    const n = Number(input);

    this.validateRange(n);
    this.validateNumber(n);

    return n;
  }

  validateRange(n) {
    if (n <= 0 || n > 9) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }
  }

  validateNumber(n) {
    if (isNaN(n) || n === undefined || n === null) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }
}