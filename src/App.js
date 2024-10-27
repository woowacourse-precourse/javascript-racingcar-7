import { Console } from "@woowacourse/mission-utils";
import { getCars, getRound } from "./InputHandler.js";


class App {
  async run() {
    try {
      const cars = await getCars();
      const round = await getRound();

    } catch(error) {
      throw error;
    }
  }
}

export default App;
