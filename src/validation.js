export function isCarNamesValid(cars) {
  if (cars.some((car) => car.length > 5)) return false;
  if (new Set(cars).size !== cars.length) return false;
  if (cars.some((car) => car.trim() === "")) return false;
  return true;
}

export function isTrialInputValid(input) {
  if (isNaN(input)) return false;
  if (input < 0) return false;
  return true;
}
