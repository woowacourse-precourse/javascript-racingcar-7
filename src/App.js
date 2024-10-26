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

    // async function inputRaceCount() {
    //   const RACE_COUNT = await MissionUtils.Console.readLineAsync(
    //     "시도할 횟수는 몇 회인가요?"
    //   );
    //   return RACE_COUNT;
    // }

    function printResults(CAR_NAMES_LIST) {
      MissionUtils.Console.print("실행 결과");
      for (let i = 0; i < CAR_NAMES_LIST.length; i++) {
        MissionUtils.Console.print(CAR_NAMES_LIST[i]);
      }
    }

    async function main() {
      const CAR_NAMES_LIST = await inputCarNames();
      printResults(CAR_NAMES_LIST);
      // const MOVE_COUNT = InputRaceCount();
    }

    main();
  }
}

export default App;
