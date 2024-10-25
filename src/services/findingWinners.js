import { printWinners } from '../views/outputView.js';

const findWinners = (carNames, progressionNumForRacer) => {
  const maxRacingLength = Math.max(...progressionNumForRacer);

  let maxNumIndex = progressionNumForRacer.indexOf(maxRacingLength);
  const winners = [];

  while (maxNumIndex !== -1) {
    winners.push(carNames[maxNumIndex]);
    maxNumIndex = progressionNumForRacer.indexOf(
      maxRacingLength,
      maxNumIndex + 1,
    );
  }
  printWinners(winners);
};

export { findWinners };
