import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';
import { ErrorMessages, RESULT_PREFIX, InputMessages, EMPTY_STRING, Delimiters, ZERO } from './Constant.js';

class App {
  async run() {
    const NAMES = await MissionUtils.Console.readLineAsync(InputMessages.CARS_MESSAGE);
    const splitNames = NAMES.split(Delimiters.COMMA).map(name => name.trim());
    const cars = [];
    for (const carName of splitNames) cars.push(new RacingCar(carName));

    const TIMES = Number(await MissionUtils.Console.readLineAsync(InputMessages.TIMES_MESSAGE));
    if (isNaN(TIMES) || !Number.isInteger(TIMES) || TIMES <= ZERO) throw new Error(ErrorMessages.INVALID_TIMES_ERROR);

    for (let i = 0; i < TIMES; i++) {
      for (const car of cars) {
        car.move();
        MissionUtils.Console.print(car.result());
      }
      MissionUtils.Console.print(EMPTY_STRING);
    }

    const maxDist = Math.max(...cars.map(car => car.getDistance()));
    const maxDistCars = cars
      .filter(car => car.getDistance() === maxDist)
      .map(car => car.getName())
      .join(Delimiters.COMMA_SPACE);

    MissionUtils.Console.print(RESULT_PREFIX + maxDistCars);
  }
}

export default App;
