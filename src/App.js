import { MissionUtils } from "@woowacourse/mission-utils";
import CarGame from "./CarGame.js";

class App {
  async run() {
    const carGame = new CarGame();
    await carGame.start();
  }
}

export default App;
