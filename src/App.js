import { Console, MissionUtils } from "@woowacourse/mission-utils";

export async function inputCarsNameWithDelimeter() {
  const inputString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  return inputString;
}

export function splitCarsName(inputString) {
  return inputString.split(',')
}

export function checkNameUnique(cars) {
  const uniqueCars = new Set(cars);
  return uniqueCars.size === cars.length;
}

export function checkNameValid(cars) {
  const NAME_PATTERN = /^[A-Za-z0-9]{1,5}$/;
  return cars.every(name => NAME_PATTERN.test(name));
}

export async function inputTrialNumber() {
  const inputString = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const trialNumber = parseInt(inputString, 10);

  if (!isNumberValid(trialNumber)) {
    throw new Error("[ERROR]");
  }

  return trialNumber;
}

export function isNumberValid(number) {
  return Number.isInteger(number) && number >= 1;
}

export function printCurrentResult(gameResult) {
  gameResult.forEach(car => {
    const progress = '-'.repeat(car.position);
    Console.print(`${car.name} : ${progress}`);
  });
}

export function shouldMoveForward() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  
  // 4 이상인 경우에만 전진할 수 있다.
  return randomNumber >= 4;
}

export function updateCarPosition(carInfo) {
  if (shouldMoveForward()) {
    carInfo.position += 1;
  }
}

export function playGame(inputNumber, cars) {
  // 초기 상태 설정. 각 자동차의 position을 0으로 초기화
  const gameResult = cars.map(name => ({ name, position: 0 }));

  // inputNumber 횟수 만큼 게인 진행
  for (let i = 0; i < inputNumber; i++) {
    // 자동차 위치 업데이트
    gameResult.forEach(updateCarPosition);
    // 매 라운드 결과 출력
    printCurrentResult(gameResult);
  }

  return gameResult;
}

export function findWinners(gameResult) {
  // 최대 도달 위치
  const maxPosition = Math.max(...gameResult.map(car => car.position));
  return gameResult
    .filter(car => car.position === maxPosition)
    .map(car => car.name);
}

export function printWinners(winners) {
  const winnerNames = winners.join(", ");
  Console.print(`최종 우승자 : ${winnerNames}`);
}

class App {
  async run() {
    try {
      const inputString = await inputCarsNameWithDelimeter();
      const cars = splitCarsName(inputString);
  
      if (!checkNameUnique(cars) || !checkNameValid(cars)) {
        throw new Error("[ERROR]");
      }
  
      const trialNumber = await inputTrialNumber();
  
      const gameResult = playGame(trialNumber, cars);
  
      const winners = findWinners(gameResult);
  
      printWinners(winners);
    }
    catch (error) {
      throw(error);
    }
  }
}

export default App;