import RacingCar from '../models/RacingCar.js';
import RacingGame from '../models/RacingResult.js';

function createRace(carNames, rounds) {
  const cars = carNames.map((name) => new RacingCar(name));
  return new RacingGame(cars, rounds);
}

export default createRace;
