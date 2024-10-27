import { Console } from "@woowacourse/mission-utils";

class Input {
  async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const carList = input.split(",").map(this.isValidCarName);
      this.hasAtLeastTwoCars(carList);

      const cars = new Map();
      this.hasDuplicateName(cars, carList);

      return cars;
    } catch (e) {
      throw e;
    }
  }

  async getRounds() {
    const input = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    if (Number.isNaN(input))
      throw new Error("[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.");
    if (input <= 0) throw new Error("[ERROR] 시도 횟수는 최소 1회입니다.");

    return input;
  }

  isValidCarName(name) {
    const carName = name.trim();

    if (carName.length <= 0)
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    if (carName.length > 5)
      throw new Error("[ERROR] 자동차 이름은 5자 이하입니다.");

    return carName;
  }

  hasAtLeastTwoCars(carList) {
    if (carList.length === 1)
      throw new Error("[ERROR] 최소 두 개 이상의 자동차 이름을 작성해주세요.");
  }

  hasDuplicateName(cars, carList) {
    for (const element of carList) {
      // cars map의 value는 이동 횟수를 의미합니다.
      cars.set(element, 0);
    }

    if (cars.size !== carList.length)
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  }
}

export default Input;
