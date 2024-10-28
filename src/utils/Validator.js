import ErrorMessages from "../constants/ErrorMessages";

// 자동차 이름 입력 검증 함수
export function validateCars(cars) {
  if (cars.length < 2 || cars.length > 10) {
    throw new Error(ErrorMessages.CAR_COUNT_INVALID);
  }

  const validNameRegex = /^[a-zA-Z0-9가-힣]+$/;
  let checkedCars = [];

  cars.forEach(car => {
    if (car.length < 1 || car.length > 5) {
      throw new Error(ErrorMessages.CAR_NAME_LENGTH);
    }
    if (!validNameRegex.test(car)) {
      throw new Error(ErrorMessages.CAR_NAME_FORMAT);
    }
    if (checkedCars.includes(car)) {
      throw new Error(ErrorMessages.CAR_NAME_DUPLICATE);
    }
    checkedCars.push(car); 
  });

  return;
}  

// 시도할 횟수 입려 검증 함수
export function validateRound(roundInput) {
  const round = Number(roundInput);

  if (isNaN(round)) {
    throw new Error(ErrorMessages.ROUND_NOT_NUMERIC);
  }
  if (!Number.isInteger(round)) {
    throw new Error(ErrorMessages.ROUND_NOT_INTEGER);
  }
  if (round < 1 || round > 50) {
    throw new Error(ErrorMessages.ROUND_OUT_OF_RANGE);
  }

  return;
}