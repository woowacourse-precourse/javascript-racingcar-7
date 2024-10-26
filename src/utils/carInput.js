import ERROR_MESSAGES from "../constants/errorMessges.js";
import { Console, Random } from "@woowacourse/mission-utils";

const carInput = async () => {
  const cars = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  if (!cars || cars.trim() === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
  const carArr = cars.split(",");
  carArr.forEach((car) => {
    if (car.trim() === "") {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    if (car.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });
  return carArr;
};

export default carInput;
