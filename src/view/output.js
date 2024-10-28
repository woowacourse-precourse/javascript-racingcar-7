import { Console } from "@woowacourse/mission-utils";

export const getOutput = async (message) => {
  return await Console.print(message);
};

export const getWinner = async (message, winners) => {
  return await Console.print(message + winners.join(", "));
};

export const getResult = async (raceStates) => {
  for (const state of raceStates) {
    await Console.print(state.join("\n") + "\n");
  }
};
