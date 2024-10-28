import { Console } from "@woowacourse/mission-utils";
import returnWinners from "./returnWinners.js";

const printRacing = (carList, numberCount) => {
  carList.forEach((car, i) => {
    const moves = "-".repeat(numberCount[i]);
    Console.print(`${car} : ${moves}`);
  });
  Console.print("\n");
};

const printFinalWinners = (carList, numberCount) => {
  const winners = returnWinners(carList, numberCount);
  Console.print("최종 우승자 : " + winners);
};

export { printRacing, printFinalWinners };
