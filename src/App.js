import { Console, Random } from '@woowacourse/mission-utils';

function getCarNames(userInput) {
  const carNames = userInput.split(',');
  carNames.map((carName) => {
    handleBlankError(carName);
    handleLengthError(carName);
  });
  return carNames;
}

function permissionToGo() {
  const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  let go = false;

  if (RANDOM_NUMBER >= 4) {
    go = true;
  }
  return go;
}

function proceedOneCycle(permissionToGo, N, carsResults) {
  for (let i = 0; i < N; i++) {
    const permission = permissionToGo();
    moveCar(permission, carsResults, i);
    Console.print(`${carsResults[i].name} : ${carsResults[i].position}`);
  }
}

function moveCar(permission, value, index) {
  if (permission) {
    value[index].position += '-';
  }
}

function maxPositionUpdater(value, maxValue) {
  if (value >= maxValue) {
    maxValue = value;
  }
  return maxValue;
}

function findMaxPosition(carsResults) {
  let MAX_POSITION = 0;
  carsResults.map((car) => {
    MAX_POSITION = maxPositionUpdater(car.position.length, MAX_POSITION);
  });
  return MAX_POSITION;
}

function selectWinner(value, maxValue, winners) {
  if (value.position.length == maxValue) {
    winners.push(value.name);
  }
  return winners;
}

function getWinners(carsResults, maxPosition) {
  let winners = [];
  carsResults.forEach((car) => {
    winners = selectWinner(car, maxPosition, winners);
  });
  return winners;
}

function checkDuplication(carsNames) {
  let trimedNames = [];
  carsNames.forEach((carName) => {
    trimedNames.push(carName.trim());
  });
  const CARS_NAMES = new Set(trimedNames);

  handleDuplicationError(trimedNames, CARS_NAMES);
}

function handleBlankError(value) {
  if (value.trim() === '') {
    throw new Error('[ERROR] 공백은 이름이 될 수 없습니다.');
  }
  return;
}

function handleLengthError(name) {
  if (name.length > 5) {
    throw new Error('[ERROR] 이름은 5글자를 초과할 수 없습니다.');
  }
  return;
}

function handleTypeError(N) {
  const MINUS_REGEX = /-\d+/;

  if (MINUS_REGEX.test(N)) {
    throw new Error('[ERROR] 음수를 입력할 수 없습니다.');
  }

  if (isNaN(N)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  return N;
}

function handleDuplicationError(firstValue, secondValue) {
  if (firstValue.length !== secondValue.size) {
    throw new Error('[ERROR] 중복된 이름이 있습니다.');
  }
  return;
}

class App {
  async run() {
    const carNamesUserInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.\n'
    );
    const carNames = getCarNames(carNamesUserInput);

    let carsResults = carNames.map((carName) => ({
      name: carName.trim(),
      position: '',
    }));
    checkDuplication(carNames);
    const N = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    handleTypeError(N);

    Console.print('실행 결과');
    for (let i = 0; i < N; i++) {
      proceedOneCycle(permissionToGo, carNames.length, carsResults);
      Console.print('');
    }
    const winners = getWinners(carsResults, findMaxPosition(carsResults));
    Console.print(`최종 우승자 : ${winners.join()}`);
  }
  return;
}

export default App;
