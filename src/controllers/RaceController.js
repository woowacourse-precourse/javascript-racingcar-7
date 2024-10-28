import CONFIG from "../constants/config.js";
import RACE_CONSOLE_VIEW from "../views/raceView.js";
import throwError from "../utils/throwError.js";
import checkString from "../utils/checkString.js";
import Car from "../models/Car.js";

class RaceController {
  async start() {
    const USER_INPUT_CAR_NAME = await RACE_CONSOLE_VIEW.getUserInputCarName();
    const carNameList = USER_INPUT_CAR_NAME.split(",");

    RaceController.checkCarNameUserInput(carNameList);
  }

  static createCarList(carNameList) {
    return carNameList.map((carName) => new Car(carName));
  }

  static checkCarNameUserInput(carList) {
    if (checkString.checkListSameValue(carList)) {
      throwError("중복된 자동차 이름이 있습니다");
    } else if (
      checkString.checkListItemLongerThan(carList, CONFIG.MAX_CAR_NAME_LENGTH)
    ) {
      throwError(`자동차의 이름이 ${CONFIG.MAX_CAR_NAME_LENGTH} 보다 깁니다`);
    } else if (checkString.checkListValueHasSpace(carList)) {
      throwError("공백은 입력하실수 없습니다");
    } else if (checkString.checkListHasVoid(carList)) {
      throwError(`이름이 존재하지 않는 차가 있습니다`);
    } else if (
      !checkString.checkListLengthLongerThan(carList, CONFIG.MIN_CAR_COUNT - 1)
    ) {
      throwError(`자동차는 최소 ${CONFIG.MIN_CAR_COUNT}대이상 입력해주세요`);
    }
  }
}

export default RaceController;
