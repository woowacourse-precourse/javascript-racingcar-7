/**
 * 각 라운드마다 모든 자동차가 전진하고, 라운드 종료 후 자동차의 위치를 출력하는 함수입니다.
 *
 * @function runRounds
 * @param {Array<Object>} cars - 자동차 경주를 할 자동차 객체들의 배열입니다.
 * @param {number} rounds - 실행할 라운드 횟수입니다. 각 라운드마다 배열의 모든 자동차가 전진합니다.
 * @param {Function} printCarPositions - 각 라운드가 끝날 때마다 자동차의 현재 위치를 출력하는 콜백 함수입니다.
 *
 * @returns {void} 반환값이 없습니다.
 *
 * @example
 * // 예시 사용법:
 * import printCarPositions from 'view';
 *
 * const carNames = await getInput(SYSTEM_MESSAGES.ASK_CARS_NAME);
 * const validatedCarNames = validateCarNames(carNames);
 *
 * const roundsInput = await getInput(SYSTEM_MESSAGES.ASK_ROUNDS);
 * const validatedRounds = validateRounds(roundsInput);
 *
 * const cars = validatedCarNames.map((carName) => new Car(carName));
 * const validatedCars = validateCars(cars);
 *
 * runRounds(validatedCars, validatedRounds, printCarPositions);
 *
 */
export default function runRounds(cars, rounds, printCarPositions) {
  for (let i = 0; i < rounds; i++) {
    cars.forEach((car) => car.tryMove());
    printCarPositions(cars); // 자동차 위치 출력
  }
}
