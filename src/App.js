import { MissionUtils } from '@woowacourse/mission-utils';

function makeCarsMap(carArray) {
  const carsMap = new Map();
  carArray.forEach(car => {
    carsMap.set(car, 0);
  });
  return carsMap;
}

async function UserInput(message) {
  const cars = await MissionUtils.Console.readLineAsync(message);
  return cars;
}

function CarsValidation(cars) {
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

function NumberOfGamesValidation(userInput) {
  const NumberOfGames = parseFloat(userInput);

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

class App {
  async run() {
    try {
      const cars = await UserInput(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      const carArray = CarsValidation(cars);

      const carsMap = makeCarsMap(carArray);

      const input = await UserInput('시도할 횟수는 몇 회인가요?\n');
      const NumberOfGames = NumberOfGamesValidation(input);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default App;
