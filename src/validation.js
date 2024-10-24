export function isCarNamesValid(cars) {
  if (cars.some((car) => car.length > 5)) return false;
  if (new Set(cars).size !== cars.length) return false;
  if (cars.some((car) => car.trim() === "")) return false;
  return true;
}
