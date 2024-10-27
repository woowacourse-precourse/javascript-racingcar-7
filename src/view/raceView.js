import { Console } from '@woowacourse/mission-utils';
import { Message, RACE_PROGRESS_PHRASE, WINNER_SPACING } from '../utils/constants.js';

export const printRaceRound = (round) => {
  Console.print(Message.OUTPUT.currentRound(round));
};

export const printCarStats = (car, location) => {
  const carName = car;
  const carLocation = RACE_PROGRESS_PHRASE.repeat(location);
  Console.print(Message.OUTPUT.raceCurrentStatus(carName, carLocation));
};

export const printLineSpace = () => {
  Console.print('');
};

export const printRaceWinner = (winner) => {
  const winnerList = winner.join(WINNER_SPACING);
  Console.print(Message.OUTPUT.raceWinner(winnerList));
};
