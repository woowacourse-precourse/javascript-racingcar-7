import { Console } from "@woowacourse/mission-utils";
import CheckValid from "./CheckValid.js";

class InputView {
  constructor() {
    this.checkValid = new CheckValid();
  }

  async getCarName() {
    const carArrStr = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carArr = carArrStr.split(",");

    this.checkValid.carNameException(carArr);
    return carArr;
  }

  async getMoveCnt() {
    let moveCnt = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    this.checkValid.moveCntCheckValid(moveCnt);
    return Number(moveCnt);
  }
}

export default InputView;
