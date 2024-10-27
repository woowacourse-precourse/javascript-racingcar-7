import { printWinner } from './display.js';
import filterWinner from './filterWinner.js';
import runRace from './runRace.js';

const Race = (cars, count) => {
  const finalPositions = runRace(cars, count);
  const winnerIndices = filterWinner(finalPositions);

  printWinner(cars, winnerIndices);
};

export default Race;
