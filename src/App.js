import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    function throwError(ERROR_MESSAGE) {
      MissionUtils.Console.print(`[ERROR] ${ERROR_MESSAGE}`);
      throw new Error();
    }

    function checkCarNames(CAR_NAMES_LIST) {
      for (let IDX = 0; IDX < CAR_NAMES_LIST.length; IDX++) {
        if (CAR_NAMES_LIST[IDX].length > 5)
          throwError("차 이름이 5자를 넘습니다");
        else if (
          (CAR_NAMES_LIST[IDX] == undefined) |
          (CAR_NAMES_LIST[IDX].trim() == "")
        )
          throwError("쉼표로 입력을 끝냈습니다");
      }
      return CAR_NAMES_LIST;
    }

    async function inputCarNames() {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) "
      );
      if ((USER_INPUT == undefined) | (USER_INPUT.trim() == "")) {
        throwError("이름을 입력하시지 않으셨습니다");
      } else {
        return checkCarNames(USER_INPUT.split(","));
      }
    }

    async function inputRaceCount() {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? "
      );
      const NUM = parseInt(USER_INPUT.trim());
      if (NUM.toString() == USER_INPUT) return NUM;
      else throwError("숫자가 아닌 것을 입력하셨습니다");
    }

    function startRace(CAR_NAMES_LIST, RACE_COUNT) {
      let TRACK_CARS = {};
      for (let IDX = 0; IDX < CAR_NAMES_LIST.length; IDX++)
        TRACK_CARS[CAR_NAMES_LIST[IDX]] = parseInt(0);
      MissionUtils.Console.print("실행 결과");
      for (let COUNT = 0; COUNT < RACE_COUNT; COUNT++) {
        TRACK_CARS = raceStatus(CAR_NAMES_LIST, TRACK_CARS);
      }
      return TRACK_CARS;
    }

    function raceStatus(CAR_NAMES_LIST, TRACK_CARS) {
      for (let IDX = 0; IDX < CAR_NAMES_LIST.length; IDX++) {
        if (moveOrStop()) TRACK_CARS[CAR_NAMES_LIST[IDX]] += 1;
        MissionUtils.Console.print(
          `${CAR_NAMES_LIST[IDX]} : ${"-".repeat(
            TRACK_CARS[CAR_NAMES_LIST[IDX]]
          )}`
        );
      }
      MissionUtils.Console.print("");
      return TRACK_CARS;
    }

    function moveOrStop() {
      let RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 10);
      if (RANDOM_NUM >= 4) return true;
      return false;
    }

    function findWinners(TRACK_CARS) {
      let MAX_STEP = 0;
      let WINNERS_LIST = [];
      for (let CAR in TRACK_CARS) {
        if (TRACK_CARS[CAR] > MAX_STEP) {
          MAX_STEP = TRACK_CARS[CAR];
          WINNERS_LIST = [];
        }
        if (TRACK_CARS[CAR] >= MAX_STEP) WINNERS_LIST.push(CAR);
      }
      return WINNERS_LIST;
    }

    function nameWinners(TRACK_CARS) {
      let WINNERS_LIST = findWinners(TRACK_CARS);
      let PRINT_WINNERS = "";
      for (let IDX = 0; IDX < WINNERS_LIST.length - 1; IDX++) {
        PRINT_WINNERS += WINNERS_LIST[IDX] + ", ";
      }
      PRINT_WINNERS += WINNERS_LIST[WINNERS_LIST.length - 1];
      MissionUtils.Console.print(`최종 우승자 : ${PRINT_WINNERS}`);
    }

    async function main() {
      const CAR_NAMES_LIST = await inputCarNames();
      const RACE_COUNT = await inputRaceCount();
      const TRACK_CARS = startRace(CAR_NAMES_LIST, RACE_COUNT);
      const WINNERS = nameWinners(TRACK_CARS);
    }

    main();
  }
}

export default App;
