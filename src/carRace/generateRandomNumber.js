import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MAX_RANDOM_NUMBER,
  MIN_RANDOM_NUMBER,
} from "../constants/constants.js";

export function generateRandomNumber() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    MIN_RANDOM_NUMBER,
    MAX_RANDOM_NUMBER
  );

  return randomNumber;
}
