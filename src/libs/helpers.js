import { getRandomNumberInRage } from "./utils.js";

export function isMoveForward() {
  const randomNumber = getRandomNumberInRage(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}
