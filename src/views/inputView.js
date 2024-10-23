import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  static async readInput() {
    try {
      // 사용자로부터 입력 받기
      const rawNames = (
        await Console.readLineAsync(
          "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        )
      );
      const raceCount = (
        await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
      );

      return { rawNames, raceCount };
    } catch (error) {
     // Console.print(`에러 발생: ${error.message}`);
      throw error;
    }
  }
}
