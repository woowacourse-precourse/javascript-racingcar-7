function getWinners(cars, maxPosition) {
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.carName);
}

//성능을 위해 찾는 즉시 리턴
function checkDuplicate(arr) {
  const seen = new Set();
  for (const name of arr) {
    if (seen.has(name)) {
      return true;
    }
    seen.add(name);
  }
  return false;
}
export { checkDuplicate, getWinners };
