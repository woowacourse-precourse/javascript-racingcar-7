import { Console } from "@woowacourse/mission-utils";

class Input {
  static async getCars() {
    const cars = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    )
      .trim()
      .split(",");

    return cars;
  }

  static async getTries() {
    const tries = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");
    return Number(tries);
  }
}

export default Input;
