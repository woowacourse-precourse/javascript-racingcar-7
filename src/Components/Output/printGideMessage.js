import { Console } from "@woowacourse/mission-utils";

const PrintGideMessage = async (gideMessage) => {
  const input = await Console.readLineAsync(gideMessage);
  return String(input);
};
export default PrintGideMessage;
