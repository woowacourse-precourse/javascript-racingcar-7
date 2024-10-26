import InputView from "./view/InputView.js";
import RacingCalc from "./RacingCalc.js";

class App {
  async run() {
    const inputView = new InputView();
    let carName = await inputView.getCarName();
    let attemptCnt = await inputView.getMoveCnt();

    const racingCalc = new RacingCalc(carName);
  }
}

export default App;
