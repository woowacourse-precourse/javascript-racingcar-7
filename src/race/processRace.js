import { MissionUtils } from "@woowacourse/mission-utils";

export function processRace(names, tries) {

  const carNames = initializeCars(names); // 각 carnames에 [] 줘서 안에 값을 넣는다
  const results = performRace(carNames, tries);
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
    updateCarNumbersForTries(carNames);
  }
  return carNames;
}

function updateCarNumbersForTries(carNames) {
  Object.keys(carNames).forEach(carName => {
    const randomNumbers = generateRandomNumbers();
    carNames[carName].push(randomNumbers);
  });
}