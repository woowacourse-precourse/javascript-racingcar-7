import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    function validateCarNames(carNames) {
      if (!carNames.trim()) {
        throw new Error('[ERROR]');
      }
      const CAR_NAME_ARRAY = carNames.split(",").map(name => name.trim());
      CAR_NAME_ARRAY.forEach(name => {
        if (name.length > 5) {
          throw new Error('[ERROR]');
        }
        if (/\d/.test(name)) {
          throw new Error('[ERROR]');
        }
      });
      return CAR_NAME_ARRAY;
    }

    function validateTryCount(tryCount) {
      if (isNaN(tryCount) || tryCount.trim() === "") {
        throw new Error('[ERROR]');
      }
      return parseInt(tryCount);
    }

    async function getCarNames() {
      const CAR_NAMES = await MissionUtils.Console.readLineAsync(
          "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
      );
      return validateCarNames(CAR_NAMES);
    }

    async function getTryCount() {
      const TRY_COUNT = await MissionUtils.Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?\n"
      );
      return validateTryCount(TRY_COUNT);
    }

    try {
      const CAR_NAMES_ARRAY = await getCarNames();
      const TRY_COUNT = await getTryCount();

      const POSITIONS = {};
      CAR_NAMES_ARRAY.forEach(name => {
        POSITIONS[name] = "";
      });

      MissionUtils.Console.print("\n실행 결과");

      for (let i = 0; i < TRY_COUNT; i++) {
        CAR_NAMES_ARRAY.forEach((name) => {
          const ADVANCE_RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);
          if (ADVANCE_RANDOM >= 4) {
            POSITIONS[name] += "-";
          }
          MissionUtils.Console.print(`${name} : ${POSITIONS[name]}`);
        });
        MissionUtils.Console.print("");
      }

      // 최종 우승자 결정 및 출력
      const MAX_DISTANCE = Math.max(...Object.values(POSITIONS).map(pos => pos.length));
      const WINNERS = CAR_NAMES_ARRAY.filter(name => POSITIONS[name].length === MAX_DISTANCE);
      MissionUtils.Console.print(`\n최종 우승자 : ${WINNERS.join(", ")}`);

    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
