import { Random } from '@woowacourse/mission-utils';

/**
 * 각 시도별 자동차의 전진 결과를 계산
 * @param {Array} carNames - 자동차 이름 배열
 * @param {number} attempts - 시도 횟수
 * @returns {Array} - 각 시도별 경주 결과 배열
 */
export function calculateCarRacing(carNames, attempts) {
    const resultsPerAttempt = [];

    for (let i = 0; i < attempts; i++) {
        const currentResult = {};

        carNames.forEach((car) => {
            const randomValue = Random.pickNumberInRange(0, 9);
            currentResult[car] = randomValue >= 4 ? "-" : "";
        });

        resultsPerAttempt.push(currentResult); // 현재 시도의 결과 저장
    }

    return resultsPerAttempt;
}
