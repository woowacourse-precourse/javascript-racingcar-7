import { MissionUtils } from "@woowacourse/mission-utils";

async function woowahanInput(prompt) {
  const input = await MissionUtils.Console.readLineAsync(prompt);
  return input;
}

async function inputCarNames() {
  const input = await woowahanInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  return input;
}

async function inputPlayTime() {
  const input = await woowahanInput('시도할 횟수는 몇 회인가요?\n');
  return parseInt(input);
}

export { inputCarNames, inputPlayTime };