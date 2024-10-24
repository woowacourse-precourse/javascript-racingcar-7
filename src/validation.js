export function validateCars(carList) {
  carList.forEach((car) => {
    if (!car) {
      throw new Error('[ERROR] 경주할 자동차가 없습니다.');
    }

    if (car.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  })
}

export function validateTrial(trial) {
  if (Number.isNaN(trial)) {
    throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
  }

  if (trial <= 0) {
    throw new Error('[ERROR] 시도 횟수는 0보다 커야 합니다.');
  }
}