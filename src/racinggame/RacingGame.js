import getMovePostion from '../utils/getMovePosition';
import { printCarsMoving, printNewLine } from '../utils/ioModule';

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  play() {
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach((car) => car.move());
      this.printCurrentState();
    }
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
