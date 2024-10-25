import { Console } from '@woowacourse/mission-utils';

const printRacerAndRacingOutput = (carNamesInput, progressionLengthForRacers) => {
  for (let i = 0; i < carNamesInput.length; i += 1) {
    Console.print(`${carNamesInput[i]} : ${progressionLengthForRacers[i]}`);
  }
  Console.print('\n');
};

const printWinners = (MaxNumberNames) => {
  Console.print(`최종 우승자 : ${MaxNumberNames.join(', ')}`);
};

export { printRacerAndRacingOutput, printWinners };
