
export function validateCarInput(input) {
  let cars = input.split(",");
  if (input.indexOf(",") === -1 || input === "") {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
  cars.forEach(validateCarNameLength);
  const uniqueCars = new Set(cars);
  if (uniqueCars.size !== cars.length) {
    throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
  }
  return cars.map((car) => ({ name: car, distance: "" }));
}

function validateCarNameLength(car) {
  if (car.length > 5) {
    throw new Error("[ERROR] 각 자동차 이름은 5자를 초과할 수 없습니다.");
  }
}

export function validateTimesInput(input) {
  let times = Number(input);
  if (isNaN(times) || times <= 0 || !Number.isInteger(times)) {
    throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
  }
  return times;
}
