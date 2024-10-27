import { Console } from "@woowacourse/mission-utils";

export class NumberInput {
  async getInput() {
    Console.print("시도할 횟수는 몇 회인가요?")
    const input = await Console.readLineAsync("");
    const n = Number(input);

    this.validateNumber(n);

    return n;
  }

  validateNumber(n) {
    if (n <= 0 || n > 9 || isNaN(n)) {
      Console.print("올바른 횟수를 입력하세요.");
    }
  }
}