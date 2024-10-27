import { Console } from "@woowacourse/mission-utils";
import { validatePlayerNames, validateTrials } from "./validation.js";

export const InputHandlers = {
  async getPlayerNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const names = input.split(",").map((name) => name.trim());

    validatePlayerNames(names);
    return names;
  },

  async getTrials() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    if (validateTrials(input)) {
      return input;
    }
    return null;
  },
};
