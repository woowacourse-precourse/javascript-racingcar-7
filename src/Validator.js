import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./Constants.js";

class Validator {
  static validateCarName(cars) {
    cars.forEach((car) => {
      if (car.length > 5 || !car.length) {
        Console.print(ERROR_MESSAGES.invalidCarName);
        throw new Error("[ERROR]");
      }
    });

    if (cars.length < 2) {
      Console.print(ERROR_MESSAGES.insufficientCars);
      throw new Error("[ERROR]");
    }

    if (cars.length !== new Set([...cars]).size) {
      Console.print(ERROR_MESSAGES.duplicateCarName);
      throw new Error("[ERROR]");
    }

    return true;
  }

  // 인자로 넘겨주는 값의 type이 string이었기에 count를 number로 형변환해줌
  static validateTryCount(count) {
    if (Number(count) <= 0 || !Number.isInteger(Number(count))) {
      Console.print(ERROR_MESSAGES.invalidTryCount);
      throw new Error("[ERROR]");
    }
    return true;
  }
}

export default Validator;
