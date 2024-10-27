import { MissionUtils } from "@woowacourse/mission-utils";

async function woowahanInput(prompt) {
  const input = await MissionUtils.Console.readLineAsync(prompt);
  return input;
}

export { woowahanInput };