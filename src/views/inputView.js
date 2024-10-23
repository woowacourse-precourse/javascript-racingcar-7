
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

    //   // 입력값 디버깅
    //   Console.print(`rawName: ${rawNames.length > 0 ? rawNames : "(빈 값)"}`);
    //   Console.print(
    //     `raceCount: ${raceCount.length > 0 ? raceCount : "(빈 값)"}`
    //   );

      // 유효성 검사 호출
    //   InputValid.isEmptyInput(rawNames, raceCount);
    //   InputValid.isRaceCountNum(raceCount);
    //   InputValid.isRaceCountPositive(parseInt(raceCount, 10));

      return { rawNames, raceCount };
    } catch (error) {
     // Console.print(`에러 발생: ${error.message}`);
      throw error;
    }
  }
}
