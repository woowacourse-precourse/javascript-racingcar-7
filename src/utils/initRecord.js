export function splitCarString(carString) {
  return carString.split(',');
}

export function initRecord(carString) {
  const gameRecord = {};
  const cars = splitCarString(carString);
  cars.forEach((car) => {
    gameRecord[car] = 0;
  });
  return gameRecord;
}
