import { Console, Random } from '@woowacourse/mission-utils';

const LIMIT_NAME_LENGTH = 5;

function getCarNames(userInput) {
  const carNames = userInput.split(',');
  carNames.map((carName) => {
    handleBlankNameError(carName);
    handleNameLengthError(carName);
  });
  return carNames;
}

function permissionToGo() {
  const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  let permission = false;

  if (RANDOM_NUMBER >= 4) {
    permission = true;
  }
  return permission;
}

function proceedOneCycle(permissionToGo, count, carsResults) {
  for (let i = 0; i < count; i++) {
    const permission = permissionToGo();
    moveCar(permission, carsResults, i);
    Console.print(`${carsResults[i].name} : ${carsResults[i].position}`);
  }
}

function moveCar(permission, car, index) {
  if (permission) {
    car[index].position += '-';
  }
}

function maxPositionUpdater(position, maxPosition) {
  if (position >= maxPosition) {
    maxPosition = position;
  }
  return maxPosition;
}

function findMaxPosition(carList) {
  let MAX_POSITION = 0;
  carList.map((car) => {
    MAX_POSITION = maxPositionUpdater(car.position.length, MAX_POSITION);
  });
  return MAX_POSITION;
}

function selectWinners(position, maxPosition, winners) {
  if (position.position.length == maxPosition) {
    winners.push(position.name);
  }
  return winners;
}

function returnWinners(carsResults, maxPosition) {
  let winners = [];
  carsResults.forEach((car) => {
    winners = selectWinners(car, maxPosition, winners);
  });
  return winners;
}

function checkDuplicationName(carsNames) {
  let trimedNames = [];
  carsNames.forEach((carName) => {
    trimedNames.push(carName.trim());
  });
  const CARS_NAMES = new Set(trimedNames);

  handleDuplicationNameError(trimedNames, CARS_NAMES);
}

function handleBlankNameError(name) {
  if (name.trim() === '') {
    throw new Error('[ERROR] 공백은 이름이 될 수 없습니다.');
  }
  return;
}

function handleNameLengthError(name) {
  if (name.length > LIMIT_NAME_LENGTH) {
    throw new Error(
      `[ERROR] 이름은 ${LIMIT_NAME_LENGTH}글자를 초과할 수 없습니다.`
    );
  }
  return;
}

function handleCountTypeError(count) {
  const MINUS_REGEX = /-\d+/;

  if (MINUS_REGEX.test(count)) {
    throw new Error('[ERROR] 음수를 입력할 수 없습니다.');
  }

  if (isNaN(count)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  return count;
}

function handleDuplicationNameError(nameList, nameListSet) {
  if (nameList.length !== nameListSet.size) {
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
    checkDuplicationName(carNames);
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    handleCountTypeError(count);

    Console.print('실행 결과');
    for (let i = 0; i < count; i++) {
      proceedOneCycle(permissionToGo, carNames.length, carsResults);
      Console.print('');
    }
    const winners = returnWinners(carsResults, findMaxPosition(carsResults));
    Console.print(`최종 우승자 : ${winners.join()}`);
  }
  return;
}

export default App;
