import { MissionUtils } from "@woowacourse/mission-utils";

export function processRace(names, tries) {
  const carNames = initializeCars(names); // initialize cars with empty arrays
  console.log("\n실행 결과");
  performRace(carNames, tries);
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
    updateCarNamesForTries(carNames);
    displayRoundResult(carNames);
  }
}

function updateCarNamesForTries(carNames) {
  Object.keys(carNames).forEach(carName => {
    const randomNumber = generateRandomNumbers();
    const moves = randomNumber > 4 ? randomNumber - 4 : 0;
    carNames[carName].push("-".repeat(moves));
  });
}

function displayRoundResult(carNames) {
  Object.keys(carNames).forEach(carName => {
    const moves = carNames[carName].join("");
    console.log(`${carName} : ${moves}`);
  });
  console.log(""); // separate lines for every round
}