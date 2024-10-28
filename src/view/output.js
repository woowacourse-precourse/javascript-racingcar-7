import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGES } from "../constants/messages.js";

const output = {
  winner(winner) {
    const winnerWithComma = winner.map((car) => car.name).join(", ");
    Console.print(CONSOLE_MESSAGES.WINNER(winnerWithComma));
  },

  carPosition(car) {
    Console.print(CONSOLE_MESSAGES.CAR_POSITION(car.name, car.position));
  },

  carRaceResult(result) {
    result.map((round) => {
      round.map((car) => this.carPosition(car));
      Console.print("");
    });
  },

  raceResultTitle() {
    Console.print("");
    Console.print(CONSOLE_MESSAGES.RACE_RESULT);
  },
};

export default output;
