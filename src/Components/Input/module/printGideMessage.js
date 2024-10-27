import { Console } from "@woowacourse/mission-utils";

const printGideMessage = async (gideMessage) => {
  const input = await Console.readLineAsync(gideMessage);
  return String(input);
};
export default printGideMessage;
