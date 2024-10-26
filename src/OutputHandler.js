import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGES, DELIMITERS } from './constants.js';

export const displayRaceTitle = () => Console.print(INFO_MESSAGES.RACE_TITLE);

export const displayRoundResult = (carNames, carNamesAndResults) => {
    carNames.forEach((car) => {
        Console.print(`${car} : ${carNamesAndResults[car]}\n`);
    });

    Console.print('\n');
}

export const displayFinalWinner = raceResult => {
    const maxDistance = Math.max(...Object.values(raceResult).map(result => result.length));
    const winners = Object.keys(raceResult).filter(car => raceResult[car].length === maxDistance);

    Console.print(`${INFO_MESSAGES.WINNER_TEXT} ${winners.join(DELIMITERS.WINNER)}`);
}