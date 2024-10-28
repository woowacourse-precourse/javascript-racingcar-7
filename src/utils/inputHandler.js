import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidNumber } from "./validation.js";

export async function askCarName() {
  const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  return carName;
}

export async function askTryTime() {
  const tryTime = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  isValidNumber(tryTime);
  return parseInt(tryTime, 10);
}
