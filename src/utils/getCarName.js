import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES as ERROR } from "../constants/errorMsg.js";

const getCarName = async () => {
  const input = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const cars = input.split(",").map((name) => {
    checkNameLength(name);

    return name.trim();
  });

  checkIsDuplicatedName(cars);

  return cars;
};

const checkNameLength = (name) => {
  if (name.length > 5) {
    throw new Error(ERROR.INVALID_CAR_NAME);
  }
  if (name.length === 0) {
    throw new Error(ERROR.NO_INPUT_CAR_NAME);
  }
};

const checkIsDuplicatedName = (cars) => {
  if (cars.length !== new Set(cars).size) {
    throw new Error(ERROR.DUPLICATED_CAR_NAME);
  }
};

export default getCarName;
