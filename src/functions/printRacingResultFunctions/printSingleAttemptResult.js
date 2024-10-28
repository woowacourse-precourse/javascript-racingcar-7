import { Console } from '@woowacourse/mission-utils';

/**
 * 단일 시도 결과를 출력
 * @param {Object} attemptResult - 해당 시도의 결과 객체
 * @param {Array} carNames - 자동차 이름 배열
 * @param {Object} cumulativeResults - 누적 결과 객체
 */
export function printSingleAttemptResult(attemptResult, carNames, cumulativeResults) {
	carNames.forEach((car) => {
		cumulativeResults[car] += attemptResult[car]; // 누적 결과 갱신
		Console.print(`${car} : ${cumulativeResults[car]}`);
	});
	Console.print('');
}
