/**
 * 자동차 이름 배열을 기반으로 누적 결과 객체를 초기화
 * @param {Array} carNames - 자동차 이름 배열
 * @returns {Object} - 초기화된 누적 결과 객체
 */
export function initializeCumulativeResults(carNames) {
    return carNames.reduce((acc, car) => {
        acc[car] = '';
        return acc;
    }, {});
}
