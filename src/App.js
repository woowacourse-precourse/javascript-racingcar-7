import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run()

async getUserCarNames(){
  Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const input = await Console.readLineAsync("");
  const carNames = input.split(",").map(name => name.trim());

  this.checkMinCars(carNames);
  this.checkDuplicateNames(carNames);
  this.validCarNameLengthAndBlank(carNames);

  return carNames;
}

checkMinCars(carNames) {
  if (carNames.length < 2 || carNames.includes("")) {
    throw new Error("자동차는 최소 2대 이상이어야 합니다.");
  }
}

checkDuplicateNames(carNames) {
  const uniqueNames = new Set(carNames);
  if (uniqueNames.size !== carNames.length) {
    throw new Error("자동차 이름은 중복될 수 없습니다.");
  }
}

validCarNameLengthAndBlank(carNames) {
  if (carNames.some(name => name.length > 5 || name.length === 0)) {
    throw new Error("자동차 이름은 5자 이하만 가능하며, 공백이 불가합니다.");
  }
}
async getUserTryNumbers() {
  Console.print("시도할 횟수는 몇 회인가요?");
  const input = await Console.readLineAsync("");
  const tryNumber = parseInt(input, 10);

  if (isNaN(tryNumber) || tryNumber <= 0) {
    throw new Error("시도 횟수는 양수가 아닌 다른 입력값을 받아들일 수 없습니다.");
  }

  return tryNumber;
}
}