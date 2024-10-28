import { CONFIG } from "./constants.js";
import { getRandomNumberInRage } from "./utils.js";

export function isMoveForward() {
  const randomNumber = getRandomNumberInRage(CONFIG.MIN_RANDOM_NUMBER, CONFIG.MAX_RANDOM_NUMBER);
  if (randomNumber >= CONFIG.RACER_MOVING_CONDITION) {
    return true;
  }
  return false;
}
