export default function prepareGameData(carNames) {
  const carNameArray = extractCarName(carNames);
  const carDataList = carNameArray.map(initializeCarData);
}

function extractCarName(carNames) {
  return carNames.split(',');
}

function initializeCarData(carName) {
  return {
    name: carName,
    totalMoveValue: 0,
  };
}
