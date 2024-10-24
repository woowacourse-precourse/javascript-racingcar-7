import { Console } from "@woowacourse/mission-utils";

export default class CarRacingView {
  async getCarNames() {
    return await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  async getTryCount() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  showRacingResult() {
    Console.print("\n실행 결과");
  }

  showWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
