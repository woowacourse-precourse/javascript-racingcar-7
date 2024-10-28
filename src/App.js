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
}