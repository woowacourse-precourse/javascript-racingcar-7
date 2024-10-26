import { print } from '../handler/IoHandller.js';
import { moveCarEvent, getWinner } from './carAction.js';
import { makeOutput, formatWinners } from './outputCar.js';
import { initRandomName } from './MakeRandomName.js';

export const initGame = ({ car, count }) => {
  const carNamesWithRandom = initRandomName(...car);
  let carCountList = carNamesWithRandom.map((carName) => [carName, 0]);
  for (let idx = 0; idx < count; idx++) {
    carCountList = moveCarEvent(carCountList);
    print(makeOutput(carCountList));
  }
  const winner = getWinner(carCountList);
  print(formatWinners(winner));
};
