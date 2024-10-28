import { Console } from "@woowacourse/mission-utils";

const output = {
  winner(winner) {
    const winnerWithComma = winner.map((car) => car.name).join(", ");
    Console.print(CONSOLE_MESSAGES.WINNER(winnerWithComma));
    Console.exit();
  },
};

export default output;
