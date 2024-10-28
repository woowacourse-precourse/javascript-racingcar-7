import { Console } from "@woowacourse/mission-utils";

export const printResult = (racingCars, carsMovement) => {
  racingCars.map((car, index) => {
    Console.print(`${car} : ${"-".repeat(carsMovement[index])}`);
  });
  Console.print("\n");
};
