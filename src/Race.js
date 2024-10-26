import { Random } from '@woowacourse/mission-utils';
import { getCarNames, getAttemptCount } from './InputHandler.js';
import { displayRaceTitle, displayRoundResult, displayFinalWinner } from './OutputHandler.js';
import { MIN_RANDOM_VALUE, MAX_RANDOM_VALUE, MOVE_THRESHOLD } from './constants.js';

export const startRace = async () => {
    const carNames = await getCarNames();
    const attemptCount = await getAttemptCount();
    let carNamesAndResults = initializeRaceState(carNames);

    displayRaceTitle();

    for (let i = 0; i < attemptCount; i++) {
        carNamesAndResults = moveCars(carNames, carNamesAndResults);
        displayRoundResult(carNames, carNamesAndResults);
    }

    displayFinalWinner(carNamesAndResults);
}

export const initializeRaceState = (carNames) => {
    const carNamesAndResults = {};

    carNames.forEach((car) => {
        carNamesAndResults[car] = '';
    });

    return carNamesAndResults;
}

export const moveCars = (carNames, carNamesAndResults) => {
    const updatedResults = {...carNamesAndResults};
    
    carNames.forEach((car) => {
        if (Random.pickNumberInRange(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE) >= MOVE_THRESHOLD) {
            updatedResults[car] += '-'
        }
    })

    return updatedResults;
}