import { Console } from "@woowacourse/mission-utils";
const totalTryInput = async () => {
  const total = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  if (!total || total.trim() === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  } else if (isNaN(total)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
  else if(total < 1){
    throw new Error(ERROR_MESSAGES.POSITIVE_NUMBER);
  }
  return total;
};
export default totalTryInput;
