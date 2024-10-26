import Input from './io/Input.js';
import RacingCarName from './game/RacingCarName.js';

class App {
  async run() {
    const carName = await Input.getCarName();
    RacingCarName.validate(carName);

    const tryNumber = await Input.getTryNumber();
  }
}

export default App;
