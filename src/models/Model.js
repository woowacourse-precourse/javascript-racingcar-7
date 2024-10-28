import { MissionUtils } from '@woowacourse/mission-utils';

const DELIMITER = ',';

// -- 자동차 데이터 저장 ---
export function splitCarNamesByDelimiter(input) {
  return input.split(DELIMITER);
}

function initializeCarPositionsArray(length) {
  return new Array(length).fill(0);
}

export function createCarDataArray(carNames) {
  const names = carNames.map((name) => name.trim());
  const positions = initializeCarPositionsArray(names.length);

  return { names, positions };
}

// -- 자동차 이동 ---
function calculateUpdatedPosition(position) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  if (randomNumber >= 4) {
    return position + 1;
  }

  return position;
}

export function updateCarDataPositions(carData) {
  const updatedPositions = carData.positions.map((position) =>
    calculateUpdatedPosition(position),
  );

  return { ...carData, positions: updatedPositions };
}

function formatCarPositionString(carName, position) {
  const carPositionsRepresentation = '-'.repeat(position);

  return `${carName} : ${carPositionsRepresentation}`;
}

export function formatAllCarPositions(carData) {
  return carData.positions.map((position, index) =>
    formatCarPositionString(carData.names[index], position),
  );
}

// -- 우승자 계산 ---
function calculateMaxDistance(positions) {
  return Math.max(...positions);
}

export function findCarWinners(carData) {
  const maxDistance = calculateMaxDistance(carData.positions);

  return carData.names.filter(
    (_, index) => carData.positions[index] === maxDistance,
  );
}
