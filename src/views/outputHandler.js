import { Console } from "@woowacourse/mission-utils";

import { GAME_MESSAGES } from "../constants/index.js";

export const outputHandler = {
  printMessage: (message) => {
    return Console.print(message);
  },

  printRoundResult: (cars) => {
    cars.forEach((car) => {
      const progress = GAME_MESSAGES.PROGRESS_BAR.repeat(car.getCarPosition());
      Console.print(`${car.getCarName()} : ${progress}`);
    });
  },
};
