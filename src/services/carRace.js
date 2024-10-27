import { Console, Random } from "@woowacourse/mission-utils";

export const startRaceGame = (carNameArr, raceCount) => {
  const positions = Array(carNameArr.length).fill(0);
  for (let i = 0; i < raceCount; i++) {
    oneRace(carNameArr, positions);
    Console.print("");
  }
};

const isMoveForward = () => {
  const randNum = Random.pickNumberInRange(0, 9);
  return randNum >= 4;
};

const moveCarForward = (carIndex, positions) => {
  if (isMoveForward()) positions[carIndex] += 1;
};

const oneRace = (carNameArr, positions) => {
  carNameArr.forEach((carName, carIndex) => {
    moveCarForward(carIndex, positions);
    Console.print(`${carName} : ${"-".repeat(positions[carIndex])}`);
  });
};
