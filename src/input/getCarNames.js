import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../errorMessage.js";

export const getCarNames = async () => {
  const racingCarsInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력 하세요.(이름은 쉼표(,) 기준 으로 구분)\n",
  );
  const racingCars = racingCarsInput
    .split(",")
    .map(racingCar => racingCar.trim());

  racingCars.map(racingCar => {
    if (racingCar.length > 5) {
      throw new Error(ERROR_MESSAGE.WORD_LIMIT);
    }
  });

  const setRacingCars = new Set(racingCars);
  if (setRacingCars.size !== racingCars.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);
  }

  return racingCars;
};
