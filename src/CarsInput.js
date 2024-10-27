import { Console } from "@woowacourse/mission-utils";

export class CarsInput {
  async getInput() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분")
    const input = await Console.readLineAsync("");
    const cars = input.split(",").map(car => car.trim());

    this.validateCarNames(cars);

    return cars;
  }

  validateCarNames(cars) {
    if (cars.length < 0 || cars.length > 9) {
      Console.print("올바른 자동차 개수를 입력해주세요.");
    }

    cars.forEach(car => {
      if (car.length < 0 || car.length > 6) {
        Console.print("자동차 이름은 1자 이상 5자 이하로 입력할 수 있습니다.");
      }
    });
  }
}