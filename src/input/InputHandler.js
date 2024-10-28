import { Console } from "@woowacourse/mission-utils";
import { validateCarNames } from "./Validator.js";

export async function getCarNames() {
  const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
  const carNames = input.split(",").map(name => name.trim());
  if (!validateCarNames(carNames)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하로, 중복되지 않게 입력해야 합니다.");
  }
  return carNames;
}