import { Console } from '@woowacourse/mission-utils';

/**
 * @param {Array} resultsPerAttempt - 각 시도별 경주 결과 배열
 * @param {Array} carNames - 자동차 이름 배열
 */
export function printRacingResult(resultsPerAttempt, carNames) {
    Console.print('\n실행 결과');

    const cumulativeResults = carNames.reduce((acc, car) => {
        acc[car] = '';

        return acc;
    }, {});

    resultsPerAttempt.forEach((attemptResult) => {
        carNames.forEach((car) => {
            cumulativeResults[car] += attemptResult[car]; // 누적 결과 갱신하기
            Console.print(`${car} : ${cumulativeResults[car]}`);
        });
        Console.print('');
    });
}
