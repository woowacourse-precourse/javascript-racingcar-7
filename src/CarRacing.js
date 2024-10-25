import { Console, Random } from "@woowacourse/mission-utils";

export const startRace = async () => {
    const carNames = await getCarNames();
    const attemptCount = await getAttemptCount();
    const raceResult = displayRaceResults(carNames, attemptCount);
    displayFinalWinner(raceResult);
}

const getCarNames = async () => {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const trimmedCarNames = carNames.split(',').map(car => car.trim());

    validateCarNames(trimmedCarNames);

    return trimmedCarNames;
}

const validateCarNames = (carNames) => {
    if (carNames.length > 10) {
        throw new Error('[ERROR] 자동차는 최대 10대까지 등록 가능합니다.');
    }
    carNames.forEach((car) => {
        if (car.length === 0) {
            throw new Error('[ERROR] 자동차 이름으로 공백은 허용되지 않습니다.');
        }
        if (car.length > 5) {
            throw new Error('[ERROR] 모든 자동차 이름은 5자 이하여야 합니다.');
        }
    });

    const deduplicatedCarNames = new Set(carNames);

    if (carNames.length !== deduplicatedCarNames.size) {
        throw new Error('[ERROR] 중복되는 자동차 이름이 있습니다.');
    }
}

const getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    validateAttemptCount(attemptCount);

    return Number(attemptCount);
}

const validateAttemptCount = (attemptCount) => {
    const count = Number(attemptCount);

    if (isNaN(count)) {
        throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
    else if (count < 1) {
        throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
    else if (!Number.isInteger(count)) {
        throw new Error('[ERROR] 시도 횟수는 실수가 될 수 없습니다.');
    }
    else if (count > 100) {
        throw new Error('[ERROR] 시도 횟수는 최대 100회까지 가능합니다.');
    }
}

const displayRaceResults = (carNames, attemptCount) => {
    Console.print('\n실행결과\n');
    let carNamesAndResults = initializeRaceState(carNames);

    for (let i = 0; i < attemptCount; i++) {
        carNamesAndResults = moveCars(carNames, carNamesAndResults);
        displayRoundResult(carNames, carNamesAndResults);
    }

    return carNamesAndResults;
}

const initializeRaceState = (carNames) => {
    const carNamesAndResults = {};

    carNames.forEach((car) => {
        carNamesAndResults[car] = '';
    });

    return carNamesAndResults;
}

const moveCars = (carNames, carNamesAndResults) => {
    const updatedResults = {...carNamesAndResults};
    
    carNames.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
            updatedResults[car] += '-'
        }
    })

    return updatedResults;
}

const displayRoundResult = (carNames, carNamesAndResults) => {
    carNames.forEach((car) => {
        Console.print(`${car} : ${carNamesAndResults[car]}\n`);
    })
    Console.print('\n');
}

const displayFinalWinner = (raceResult) => {
    const maxDistance = Math.max(...Object.values(raceResult).map(result => result.length));
    const winners = Object.keys(raceResult).filter((car) => raceResult[car].length === maxDistance);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}