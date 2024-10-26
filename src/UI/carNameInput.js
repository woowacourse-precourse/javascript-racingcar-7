import { Console } from "@woowacourse/mission-utils"
import checkCarName from "../feature/validate/carNameValidate.js";

async function carNameInput() {
  try {
    const USER_INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const CAR_LIST = USER_INPUT.split(',');

    checkCarName(CAR_LIST);
  
    return CAR_LIST;
  } catch (error) {
    throw error;
  }
};

export default carNameInput;