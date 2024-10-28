import { Random } from "@woowacourse/mission-utils";

export default function getRandomDigit() {
  const randomDigit = Random.pickNumberInRange(0, 9);
  return randomDigit;
}
