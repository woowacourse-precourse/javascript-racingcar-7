import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, IO_MESSAGE } from './common/message.js';
import Car from './car/Car.js';

class App {
  async run() {
    const CAR_NAMES = await this.getInput(IO_MESSAGE.INPUT_CAR_NAME);
    if (!CAR_NAMES) throw new Error(ERROR_MESSAGE.ERROR_EMPTY_STRING);
    const CARS = CAR_NAMES.split(',').map(name => new Car(name));
    const TRY_COUNT = await this.getInput(IO_MESSAGE.INPUT_TRY_COUNT);
  }

  async getInput(message) {
    return Console.readLineAsync(message);
  }
}

export default App;
