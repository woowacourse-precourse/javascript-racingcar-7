import { Console, MissionUtils } from "@woowacourse/mission-utils";

export function processRace(names, tries) {
  const carNames = initializeCars(names); // initialize cars with empty arrays
  Console.print("\n실행 결과");
  performRace(carNames, tries);
  announceWinner(carNames);
}

function generateRandomNumbers() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

function initializeCars(names) {
  let carNames = {};
  names.forEach(name => {
    carNames[name] = 0;
  });
  return carNames;
}

function performRace(carNames, tries) {
  for (let i = 0; i < tries; i++) {
    const moves = updateCarNamesForTries(carNames);
    displayRoundResult(moves);
  };
}

function updateCarNamesForTries(carNames) {
  const moves = {};

  Object.keys(carNames).forEach(carName => {
    const randomNumber = generateRandomNumbers();
    const moveCount = getMoveCount(randomNumber);
    updateCarMove(moves, carName, moveCount);
    updateCarTotalDistance(carNames, carName, moveCount);
  });

  return moves;
}

function getMoveCount(randomNumber) {
  let moveCount = 0;
  if (randomNumber >= 4) {
    moveCount = randomNumber - 3;
  }
  return moveCount;
}

function updateCarMove(moves, carName, moveCount) {
  moves[carName] = moveCount;
}

function updateCarTotalDistance(carNames, carName, moveCount) {
  carNames[carName] += moveCount;
}

function displayRoundResult(moves) {
  Object.keys(moves).forEach(carName => {
    const moveDisplay = "-".repeat(moves[carName]);
    Console.print(`${carName} : ${moveDisplay}`);
  })
  Console.print("");
}

function announceWinner(carNames) {
  const maxDistance = Math.max(...Object.values(carNames));

  const winners = Object.keys(carNames).filter(
    carName => carNames[carName] === maxDistance
  );

  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}