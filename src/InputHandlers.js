import { Console } from "@woowacourse/mission-utils";
import { validatePlayerNames, validateTrials } from "./validation.js";
import { CONSTANTS, INPUT_MESSAGES } from "./constants.js";

export const InputHandlers = Object.freeze({
  async getPlayerNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PLAYER_NAMES);
    const names = input.split(CONSTANTS.NAME_SEPARATOR).map((name) => name.trim());

    validatePlayerNames(names);
    return names;
  },

  async getTrials() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.TRIALS);

    validateTrials(input);
    return input;
  },
});
