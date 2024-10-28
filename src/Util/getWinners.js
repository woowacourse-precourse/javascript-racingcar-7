/**
 * 최대 위치에 있는 자동차들의 이름을 반환합니다.
 *
 * @function getWinners
 * @param {Array<Object>} cars - 자동차 객체 배열로, 각 객체는 `carName`과 `position` 속성을 가집니다.
 * @param {number} maxPosition - 최대 위치 값으로, 이 위치에 있는 자동차가 우승자로 간주됩니다.
 * @returns {Array<string>} 우승한 자동차들의 이름을 담은 배열을 반환합니다.
 *
 * @example
 * const cars = [
 *   { carName: 'pobi', position: 5 },
 *   { carName: 'woni', position: 3 },
 *   { carName: 'jun', position: 5 }
 * ];
 * const maxPosition = 5;
 * getWinners(cars, maxPosition); // ['pobi', 'jun']
 */
export default function getWinners(cars, maxPosition) {
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.carName);
}
