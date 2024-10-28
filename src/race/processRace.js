import { MissionUtils } from "@woowacourse/mission-utils";

export function processRace(names, tries) {
  const carNames = initializeCars(names); // initialize cars with empty arrays
  console.log("\n실행 결과");
  const totalDistance = performRace(carNames, tries);
  console.log('total distance:', totalDistance);
}

function generateRandomNumbers() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

function initializeCars(names) {
  let carNames = {};
  names.forEach(name => {
    carNames[name] = [];
  });
  return carNames;
}

function performRace(carNames, tries) {
  for (let i = 0; i < tries; i++) {
    const moves = updateCarNamesForTries(carNames);
    displayRoundResult(moves);
  };
  return carNames;
}

function updateCarNamesForTries(carNames) {
  const moves = {};
  Object.keys(carNames).forEach(carName => {
    const randomNumber = generateRandomNumbers();
    const moveCount = randomNumber > 4 ? randomNumber - 4 : 0;
    moves[carName] = moveCount;
  });
  return moves;
}

function displayRoundResult(moves) {
  Object.keys(moves).forEach(carName => {
    const moveDisplay = "-".repeat(moves[carName]);
    console.log(`${carName} : ${moveDisplay}`);
  })
  console.log("");
}