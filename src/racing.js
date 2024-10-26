import * as MissionUtils from '@woowacourse/mission-utils';
import { displayWinner } from "./IO.js";

export function randomRacing(carNames, count, displayResults) {
  let results = carNames.map(name => ({ name, position: "", advanceCount: 0 })); 

  for (let i = 1; i <= count; i++) {
    results = updatePositions(results);
    displayResults(results);
  }
  displayWinner(results);
}

function updatePositions(results) {
  return results.map(car => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) { 
      car.position += "-";
      car.advanceCount ++;
    }
    return car;
  });
}

