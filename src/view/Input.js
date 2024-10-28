import { Console } from "@woowacourse/mission-utils";
export class Input {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return carNames.split(",");
  }

  async getRound() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  }
}
