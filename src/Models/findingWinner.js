import { printWinner } from '../Views/outputView.js';

const findWinner = (carNamesInput, progressionNumForRacer) => {
  const maxProgression = Math.max(...progressionNumForRacer);

  let FindingMaxNumIndex = progressionNumForRacer.indexOf(maxProgression);
  let winnerName = [];

  while (FindingMaxNumIndex != -1) {
    winnerName.push(carNamesInput[FindingMaxNumIndex]);
    FindingMaxNumIndex = progressionNumForRacer.indexOf(maxProgression, FindingMaxNumIndex + 1);
  }
  printWinner(winnerName);
};

export { findWinner };
