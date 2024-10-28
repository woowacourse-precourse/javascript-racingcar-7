import { Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class Input {
  async getCarNames() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carList = cars.split(",");
    Validation.validateCarNames(carList);
    return carList;
  }

  async getCnt() {
    const cnt = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    Validation.validateCnt(cnt);
    return cnt;
  }
}

export default Input;
