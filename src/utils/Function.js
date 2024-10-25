import { NUMBER } from "./constants.js";
import { Random } from "@woowacourse/mission-utils";

export class Function {
  static async getRandomNumber() {
    return Random.pickNumberInRange(NUMBER.RANDOM_MIN, NUMBER.RANDOM_MAX);
  }

  static checkJoint(arr, winnersPosition, winnersName) {
    let winners = [winnersName];

    for (let i = 1; i < arr.length; i++) {
      const isSamePosition = winnersPosition === arr[i].position;

      if (isSamePosition) {
        winners.push(arr[i].name);
      }

      if (!isSamePosition) break;
    }

    return winners;
  }
}
