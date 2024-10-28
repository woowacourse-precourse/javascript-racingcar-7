import { Console } from '@woowacourse/mission-utils';
import { initializeCumulativeResults } from './initializeCumulativeResults.js';
import { printSingleAttemptResult } from './printSingleAttemptResult.js';

/**
 * 전체 경주 결과를 출력
 * @param {Array} resultsPerAttempt - 각 시도별 경주 결과 배열
 * @param {Array} carNames - 자동차 이름 배열
 */
export function printRacingResult(resultsPerAttempt, carNames) {
    Console.print('\n실행 결과');

    const cumulativeResults = initializeCumulativeResults(carNames);

    resultsPerAttempt.forEach((attemptResult) => {
        printSingleAttemptResult(attemptResult, carNames, cumulativeResults);
    });
}
