export function splitCarString(carString) {
  return carString.split(',');
}

export function createGameRecord(cars) {
  const gameRecord = {};
  cars.map((car) => {
    gameRecord[car] = 0;
  });
  return gameRecord;
}