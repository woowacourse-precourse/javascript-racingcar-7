import { Console } from "@woowacourse/mission-utils";
import checkTrialCount from "../feature/validate/trialCountValidate";

async function trialCountInput() {
  try {
    const USER_INPUT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const TRIAL_COUNT = Number(USER_INPUT);

    checkTrialCount(TRIAL_COUNT);

    return TRIAL_COUNT;
  } catch (error) {
    throw error;
  }
};

export default trialCountInput;