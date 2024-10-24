import getMovePostion from '../utils/getMovePosition';
import { printCarsMoving, printNewLine } from '../utils/ioModule';

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  printCurrentState() {
    this.cars.forEach((car) => {
      const movePosition = getMovePostion(car);
      printCarsMoving(car.getName(), movePosition);
    });
    printNewLine();
  }
}

export default RacingGame;
