import { Console, MissionUtils } from "@woowacourse/mission-utils";

export async function inputCarsNameWithDelimeter() {
  const inputString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
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
  const inputString = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
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

class App {
  async run() {}
}

export default App;