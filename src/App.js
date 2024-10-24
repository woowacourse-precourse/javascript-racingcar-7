import { MissionUtils } from '@woowacourse/mission-utils';

function makeCarsMap(carArray) {
  const carsMap = new Map();
  carArray.forEach(car => {
    carsMap.set(car, 0);
  });
  return carsMap;
}

async function userInput(message) {
  const cars = await MissionUtils.Console.readLineAsync(message);
  return cars;
}

function carsValidation(cars) {
  const carArray = cars.split(',').map(car => car.trim());
  if (carArray.length === 1) {
    throw new Error('[ERROR] 인식된 자동차가 없습니다.');
  }

  const hasEmptyName = carArray.some(car => !car || car.trim() === '');
  if (hasEmptyName) {
    throw new Error('[ERROR] 쉼표가 적절히 작성되지 않았습니다.');
  }

  const hasLongName = carArray.some(car => car.length > 5);
  if (hasLongName) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  }

  return carArray;
}

function numberOfGamesValidation(input) {
  const NumberOfGames = parseFloat(input);

  if (Number.isNaN(NumberOfGames)) {
    throw new Error('[ERROR] 숫자가 아닌 값을 입력하셨습니다.');
  }
  if (NumberOfGames < 0) {
    throw new Error('[ERROR] 양수만 입력하실 수 있습니다.');
  }

  if (!Number.isInteger(NumberOfGames)) {
    throw new Error('[ERROR] 정수가 아닌 값을 입력하셨습니다.');
  }
  return NumberOfGames;
}

function printCurrentGame(map) {
  map.forEach((value, key) => {
    const currentGameLine = '-'.repeat(value);
    MissionUtils.Console.print(`${key} : ${currentGameLine}\n`);
  });
  MissionUtils.Console.print('\n');
}

function addOneRandomValue(map) {
  map.forEach((value, key) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    map.set(key, value + randomNumber);
  });
  printCurrentGame(map);
}

function getAfterGameMap(map, NumberOfGames) {
  for (let i = 0; i < NumberOfGames; i += 1) {
    addOneRandomValue(map);
  }
}

function getHighScoreCars(map) {
  let maxHighScore = 0;
  map.forEach(value => {
    maxHighScore = Math.max(maxHighScore, value);
  });

  const highScoreCars = [];
  map.forEach((value, key) => {
    if (value === maxHighScore) highScoreCars.push(key);
  });
  return highScoreCars;
}

function getStringHighScoreCars(carsArray) {
  let carString = '';
  for (let i = 0; i < carsArray.length; i += 1) {
    carString += `${carsArray[i]},`;
  }
  carString = carString.replace(/,\s*$/, '');
  return carString;
}

class App {
  async run() {
    try {
      const cars = await userInput(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      const carArray = carsValidation(cars);

      const carsMap = makeCarsMap(carArray);

      const input = await userInput('시도할 횟수는 몇 회인가요?\n');
      const numberOfGames = numberOfGamesValidation(input);
      MissionUtils.Console.print('\n실행 결과');
      getAfterGameMap(carsMap, numberOfGames);

      const highScoreCarsArray = getHighScoreCars(carsMap);
      const highScoreCarsString = getStringHighScoreCars(highScoreCarsArray);
      MissionUtils.Console.print(`\n최종 우승자 : ${highScoreCarsString}`);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default App;
