import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import {
  getCarNames,
  assertCondition,
  hasDuplicate,
  hasInvalidCarNameLength,
  getTryCount,
  isNotPositiveInteger,
  carsInfoController,
  advanceCars,
  getAdvanceResult,
  printResult,
  executionLoop,
  getWinner,
  printWinner,
} from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      assertCondition([
        { condition: hasDuplicate(carNames), message: MESSAGES.DUPLICATE_CAR_NAME },
        { condition: hasInvalidCarNameLength(carNames), message: MESSAGES.INVALID_CAR_NAME_LENGTH },
      ]);

      const tryCount = await getTryCount();
      assertCondition([{ condition: isNotPositiveInteger(tryCount), message: MESSAGES.INVALID_TRY_COUNT }]);

      const { getCarsInfoEntries, getAdvanceCounts, incrementAdvanceCount } = carsInfoController(carNames);

      Console.print(MESSAGES.EXECUTION_RESULT);
      executionLoop(tryCount, [
        () => advanceCars(carNames, incrementAdvanceCount),
        () => printResult(getAdvanceResult(getCarsInfoEntries())),
      ]);

      const winner = getWinner(getAdvanceCounts(), getCarsInfoEntries());
      printWinner(winner);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
