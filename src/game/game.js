import { print } from '../handler/ioHandler.js';
import { moveCarEvent, getWinner } from './carAction.js';
import { makeOutput, formatWinners } from './outputCar.js';
import { initRandomName } from './makeRandomName.js';

export const initGame = ({ car, count }) => {
  const carNamesWithRandom = initRandomName(...car);
  let carAndLocationList = carNamesWithRandom.map((carName) => ({
    name: carName,
    location: 0,
  }));
  for (let idx = 0; idx < count; idx++) {
    carAndLocationList = moveCarEvent(carAndLocationList);
    print(makeOutput(carAndLocationList));
  }
  const winner = getWinner(carAndLocationList);
  print(formatWinners(winner));
};
