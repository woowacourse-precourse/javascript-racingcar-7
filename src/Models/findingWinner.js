import { printFinalWinner } from '../Views/outputView.js';

const findWinner = (carNamesInput, progressionNumForEachRacer) => {
  const maxProgression = Math.max(...progressionNumForEachRacer);

  let FindingMaxNumIndex = progressionNumForEachRacer.indexOf(maxProgression);
  let winnerName = [];

  while (FindingMaxNumIndex != -1) {
    winnerName.push(carNamesInput[FindingMaxNumIndex]);
    FindingMaxNumIndex = progressionNumForEachRacer.indexOf(maxProgression, FindingMaxNumIndex + 1);
  }
  printFinalWinner(winnerName);
};

export { findWinner };
