import { Console } from "@woowacourse/mission-utils";

export const startRace = async () => {
    const carNames = await getCarNames();
    const attemptCount = await getAttemptCount();
    Console.print(carNames);
    Console.print(attemptCount);
}

const getCarNames = async () => {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const trimmedCarNames = carNames.split(',').map(car => car.trim());

    validateCarNames(trimmedCarNames);

    return trimmedCarNames;
}

const validateCarNames = (carNames) => {
    carNames.forEach((car) => {
        if (car.length > 5) {
            throw new Error('[ERROR] 모든 자동차 이름은 5자 이하여야 합니다.');
        }
    });
}

const getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    validateAttempCount(attemptCount);

    return attemptCount;
}

const validateAttempCount = (attempCount) => {
    const count = Number(attempCount);

    if (isNaN(count)) {
        throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
    else if (count < 1) {
        throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
}