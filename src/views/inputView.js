import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  static async readInput() {
    const rawNames = await Console.readLineAsync("경주할 자동자 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const raceCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return {rawNames,raceCount}
  }
}

