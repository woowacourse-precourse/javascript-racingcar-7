import { Random } from "@woowacourse/mission-utils";
import { RACE_MOVE } from "../constants/race.js";

export const generateRandomNumber = () =>
  Random.pickNumberInRange(RACE_MOVE.MIN, RACE_MOVE.MAX);
