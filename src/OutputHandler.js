import { Console } from '@woowacourse/mission-utils';

export const displayRaceTitle = () => {
    Console.print('\n실행결과\n');
};

export const displayRoundResult = (carNames, carNamesAndResults) => {
    carNames.forEach((car) => {
        Console.print(`${car} : ${carNamesAndResults[car]}\n`);
    });

    Console.print('\n');
}

export const displayFinalWinner = (raceResult) => {
    const maxDistance = Math.max(...Object.values(raceResult).map(result => result.length));
    const winners = Object.keys(raceResult).filter((car) => raceResult[car].length === maxDistance);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}