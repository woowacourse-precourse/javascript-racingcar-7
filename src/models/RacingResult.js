import Race from './Race.js';

class RacingGame extends Race {
  runRound() {
    this.cars.forEach((car) => car.move());
  }
}

export default RacingGame;
