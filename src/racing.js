import { Random } from '@woowacourse/mission-utils';

function startRacing(names, times) {
  const carsObject = arrayToObject(names);

  for (let i = 0; i < times; i++) {
    for (let key in carsObject) {
      const isGo = Random.pickNumberInRange(0, 9);
      if (isGo >= 4) {
        carsObject[key] += 1;
      }
    }
    // printResult(carsObject);
  }

  const winner = getWinner(carsObject);

  return winner;
}

function arrayToObject(array) {
  const obj = array.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  return obj;
}

function getWinner(carsObject) {
  const winner = [];
  let max = 0;

  for (let key in carsObject) {
    if (carsObject[key] > max) {
      max = carsObject[key];
    }
  }

  for (let key in carsObject) {
    if (carsObject[key] === max) {
      winner.push(key);
    }
  }

  return winner;
}

export { startRacing };
