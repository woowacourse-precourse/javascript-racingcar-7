import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES as ERROR } from "../constants/errorMsg.js";

const getRaceNumber = async () => {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const num = Number(input.trim());

  checkNumberError(num);

  return num;
};

const checkNumberError = (num) => {
  const isInvalidNumber = !Number.isInteger(num) || num <= 0;

  switch (true) {
    case !num:
      throw new Error(ERROR.NO_INPUT_RACE_NUMBER);
    case isInvalidNumber:
      throw new Error(ERROR.INVALID_RACE_NUMBER);
    default:
      break;
  }
};

export default getRaceNumber;
