export function validateCars(carList) {
  carList.forEach (car => {
    if (!car) {
      const errorMessage = '[ERROR] 경주할 자동차가 없습니다.';
      throw new Error(errorMessage);
    }

    if (car.length > 5) {
      const errorMessage = '[ERROR] 자동차 이름은 5자 이하만 가능합니다.';
      throw new Error(errorMessage);
    }
  })
}

export function validateTrial(trial) {
  if (isNaN(trial)) {
    const errorMessage = '[ERROR] 시도 횟수가 정수가 아닙니다.';
    throw new Error(errorMessage);
  }

  if (trial <= 0) {
    const errorMessage = '[ERROR] 시도 횟수는 0보다 커야합니다.';
    throw new Error(errorMessage);
  }
}