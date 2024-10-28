import { Random } from '@woowacourse/mission-utils';

/**
 * 자동차가 전진할지 여부를 결정
 * @returns {string} - 전진하면 '-', 멈추면 ''
 */
function getCarMovement() {
	const randomValue = Random.pickNumberInRange(0, 9);

	return randomValue >= 4 ? '-' : '';
}

/**
 * 한 번의 시도에 대한 결과를 생성
 * @param {Array} carNames - 자동차 이름 배열
 * @returns {Object} - 현재 시도의 결과 객체
 */
function generateSingleAttemptResult(carNames) {
	const currentResult = {};

	carNames.forEach((car) => {
		currentResult[car] = getCarMovement();
	});

	return currentResult;
}

/**
 * 전체 경주 결과를 계산
 * @param {Array} carNames - 자동차 이름 배열
 * @param {number} attempts - 시도 횟수
 * @returns {Array} - 각 시도별 경주 결과 배열
 */
export function calculateCarRacing(carNames, attempts) {
	const resultsPerAttempt = [];

	for (let i = 0; i < attempts; i++) {
		const attemptResult = generateSingleAttemptResult(carNames);
		resultsPerAttempt.push(attemptResult);
	}

	return resultsPerAttempt;
}
