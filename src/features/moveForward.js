import { isForwardable } from "./isForwardable.js";
import { Console } from "@woowacourse/mission-utils";

export const moveFoward = (carList) => {
  let result = "";

  for (let car of carList) {
    if (isForwardable()) {
      car.moveForward();
    }

    result += car.getStatus() + "\n";
  }

  Console.print(result);
  return carList;
};
