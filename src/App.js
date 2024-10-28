import RacingGame from "./RacingGame.js";
import {PROMPT_MESSAGE} from "./constants/message.js";

class App {
  racingGame = new RacingGame()
  async run() {
     return await this.racingGame.handleRaceSequence(PROMPT_MESSAGE.FIRST)
  }
}

export default App;
