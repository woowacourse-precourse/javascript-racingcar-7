import { printWinners } from '../Views/outputView.js';

const findWinners = (carNames, progressionNumForRacer) => {
  const maxRacingLength = Math.max(...progressionNumForRacer);

  let maxNumIndex = progressionNumForRacer.indexOf(maxRacingLength);
  let winners = [];

  while (maxNumIndex != -1) {
    winners.push(carNames[maxNumIndex]);
    maxNumIndex = progressionNumForRacer.indexOf(maxRacingLength, maxNumIndex + 1);
  }
  printWinners(winners);
};

export { findWinners };
