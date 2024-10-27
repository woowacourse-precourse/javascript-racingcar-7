import { Console } from "@woowacourse/mission-utils";

export const printResult = (racingCars, carsMovement) => {
  Console.print("\n실행 결과\n");
  racingCars.map((car, index) => {
    Console.print(`${car} : ${"-".repeat(carsMovement[index])}`);
  });
  Console.print("\n");
};
