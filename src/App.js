import Input from './io/Input.js';
import RacingCarName from './game/RacingCarName.js';
import RacingTryNumber from './game/RacingTryNumber.js';

class App {
  async run() {
    const carName = await Input.getCarName();
    RacingCarName.validate(carName);

    const tryNumber = await Input.getTryNumber();
    RacingTryNumber.validate(tryNumber);
  }
}

export default App;
