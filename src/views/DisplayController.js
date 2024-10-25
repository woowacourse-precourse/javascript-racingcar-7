import RACING_VARIABLES from "../constants/RacingVariables";
import { Console } from "@woowacourse/mission-utils";

class DisplayController {

  async displayPlayerPositions(players, positions) {
    for (let i = 0; i < players.length; i++) {
      Console.print(`${players[i]} : ${RACING_VARIABLES.POSITION_MARKER.repeat(positions[i])}`);
    }
    Console.print("");
  }

  async displayWinners(players, winners) {
    const winnerArray = winners.map(idx => players[idx])

    Console.print(`${RACING_VARIABLES.WINNER_PROMPT} : ${winnerArray.join(',')}`)
  }
}

export default DisplayController;