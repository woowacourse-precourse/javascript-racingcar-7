import { Console } from "@woowacourse/mission-utils";

export const ViewUtils = {
  async input(guideMessage) {
    return await Console.readLineAsync(guideMessage);
  },
  output(resultMessage) {
    Console.print(resultMessage);
  },
};
