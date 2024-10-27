// 자동차 이름 입력 검증 함수
export function validateCars(cars) {
  if (cars.length < 2 || cars.length > 10) {
    throw new Error('[ERROR] 자동차의 수는 2대 이상 10대 이하여야 한다.')
  }

  const validNameRegex = /^[a-zA-Z0-9가-힣]+$/;
  let checkedCars = [];

  cars.forEach(car => {
    if (!validNameRegex.test(car)) {
      throw new Error('[ERROR] 자동차의 이름은 한글, 영어, 숫자로 이루어져야 한다.');
    }
    if (car in checkedCars) {
      throw new Error('[ERROR] 자동차의 이름은 중복되면 안 된다.');
    }
    checkedCars.push(car); 
  });

  return;
}  

// 시도할 횟수 입려 검증 함수
export function validateRound(roundInput) {
  const round = Number(roundInput);

  if (isNaN(round)) {
    throw new Error('[ERROR] 시도할 횟수는 숫자로 입력해야 한다.');
  }
  if (!Number.isInteger(round)) {
    throw new Error('[ERROR] 시도할 횟수는 정수로 입력해야 한다.');
  }
  if (round < 1 || round > 50) {
    throw new Error('[ERROR] 시도할 횟수는 1회 이상 50회 이하로 입력해야 한다.');
  }

  return;
}