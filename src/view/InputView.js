import { Console } from "@woowacourse/mission-utils";
import CheckValid from "./CheckValid.js";
import { MESSAGE_INPUT } from "../Constant.js";

class InputView {
  constructor() {
    this.checkValid = new CheckValid();
  }

  async getCarName() {
    const carArrStr = await Console.readLineAsync(MESSAGE_INPUT.CAR_NAME_INPUT);
    const carArr = carArrStr.split(",");

    this.checkValid.carNameException(carArr);
    return carArr;
  }

  async getMoveCnt() {
    let moveCnt = await Console.readLineAsync(MESSAGE_INPUT.MOVE_CNT_INPUT);

    this.checkValid.moveCntCheckValid(moveCnt);
    return Number(moveCnt);
  }
}

export default InputView;
