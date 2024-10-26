import * as MissionUtils from '@woowacourse/mission-utils';

export function randomRacing(carNames, count, displayResults) {
  let results = carNames.map(name => ({ name, position: "" })); 

  for (let i = 1; i <= count; i++) {
    results.forEach(car => { 
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) { 
        car.position += "-";
      }
    });
    displayResults(results);
  }
}
