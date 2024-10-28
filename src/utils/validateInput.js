export function validateCarsInput(carsInput) {
  if (carsInput.length === 0) {
    throw new Error("[ERROR] 자동차를 1개 이상 입력하세요");
  }
  const clearedInput = carsInput.split(",").map((car) => car.trim());
  clearedInput.forEach(validateCarName);
}

function validateCarName(car) {
  if (!(car.length > 0 && car.length <= 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다");
  }
}
