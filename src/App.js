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
        throw new Error('[ERROR] 올바른 값을 입력해주세요.');
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

      const positions = {};
      CAR_NAMES_ARRAY.forEach(name => {
        positions[name] = "";
      });

      MissionUtils.Console.print("\n실행 결과");

      for (let i = 0; i < TRY_COUNT; i++) {
        CAR_NAMES_ARRAY.forEach((name) => {
          const ADVANCE_RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);
          if (ADVANCE_RANDOM >= 4) {
            positions[name] += "-";
          }
          MissionUtils.Console.print(`${name} : ${positions[name]}`);
        });
        MissionUtils.Console.print("");
      }

      // 최종 우승자 결정 및 출력
      const maxDistance = Math.max(...Object.values(positions).map(pos => pos.length));
      const winners = CAR_NAMES_ARRAY.filter(name => positions[name].length === maxDistance);
      MissionUtils.Console.print(`\n최종 우승자 : ${winners.join(", ")}`);

    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
