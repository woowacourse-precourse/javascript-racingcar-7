import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/MESSAGE.js';
import CarList from '../carList/CarList.js';

class InputView {
  constructor() {
    this.carList = new CarList();
  }

  async getCarNameInput() {
    let userCarName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    userCarName = this.carList.getUserCarNameList(userCarName);
    return userCarName;
  }
}

export default InputView;
