/**
 * @param {Object} racingResults - 각 자동차의 전진 결과를 저장한 객체
 * @returns {Array} - 우승자(들)의 이름을 담은 배열
 */
export function calculateWinner(racingResults) {
    const maxDistance = Math.max(...Object.values(racingResults).map(result => result.length));

    // 가장 긴 전진 거리를 가진 자동차를 배열로 반환 (공동 우승자가 가능하므로 복수개의 자동차가 가능하도록)
    const winners = Object.keys(racingResults)
        .filter(car => racingResults[car].length === maxDistance);

    return winners;
}
