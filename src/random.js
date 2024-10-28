// 무작위 숫자 생성

import { Random } from "@woowacourse/mission-utils";

export function generateRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}