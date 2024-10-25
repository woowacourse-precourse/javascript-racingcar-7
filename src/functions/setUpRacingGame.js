import Car from '../car/Car.js';
import RacingGame from '../racingGame/RacingGame.js';

const setUpRacingGame = function readyToGameFunc(carNamesArray, tryCount) {
  const racingCars = carNamesArray.map((name) => new Car(name));
  return new RacingGame(racingCars, tryCount);
};

export default setUpRacingGame;
