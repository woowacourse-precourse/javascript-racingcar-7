import InputView from "./view/InputView.js";
import RacingCalc from "./RacingCalc.js";

class App {
  async run() {
    const inputView = new InputView();
    let carName = await inputView.getCarName();
    let attemptCnt = await inputView.getMoveCnt();

    const racingCalc = new RacingCalc(carName);
    racingCalc.moveRacing(attemptCnt);
  }
}

export default App;
