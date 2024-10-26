import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    async function inputCarNames() {
      const CAR_NAMES = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
      );
      const CAR_NAMES_LIST = CAR_NAMES.split(",");
      return CAR_NAMES_LIST;
    }

    async function inputRaceCount() {
      try {
        let RACE_COUNT = await MissionUtils.Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?"
        );
        RACE_COUNT = parseInt(RACE_COUNT);
        return RACE_COUNT;
      } catch (error) {}
    }

    function printResults(CAR_NAMES_LIST, RACE_COUNT) {
      MissionUtils.Console.print("실행 결과");
      for (let i = 0; i < CAR_NAMES_LIST.length; i++) {
        const CAR_MOVES = "-".repeat(RACE_COUNT);
        MissionUtils.Console.print(CAR_NAMES_LIST[i] + CAR_MOVES);
      }
    }

    async function main() {
      const CAR_NAMES_LIST = await inputCarNames();
      const RACE_COUNT = await inputRaceCount();
      printResults(CAR_NAMES_LIST, RACE_COUNT);
    }

    main();
  }
}

export default App;
