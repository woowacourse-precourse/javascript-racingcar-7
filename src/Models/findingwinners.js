import { printFinalWinners } from '../Views/outputView.js';

const findWinner = (carNamesInput, progressionNumberForEachRacer) => {
  const max = Math.max(...progressionNumberForEachRacer);

  let FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max);
  let MaxNumberNames = [];

  while (FindingMaxNumIndex != -1) {
    MaxNumberNames.push(carNamesInput[FindingMaxNumIndex]);
    FindingMaxNumIndex = progressionNumberForEachRacer.indexOf(max, FindingMaxNumIndex + 1);
  }
  printFinalWinners(MaxNumberNames);
};

export { findWinner };
