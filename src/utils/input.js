import { Console } from "@woowacourse/mission-utils";
import { validateCarNames, validateRoundNumber } from "./inputValidator.js";

export const getCarNames = async () => {
  const carNamesInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNameList = validateCarNames(carNamesInput);

  return carNameList;
};

export const getTotalRound = async () => {
  const totalRoundInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );

  const totalRound = validateRoundNumber(totalRoundInput);

  return totalRound;
};
