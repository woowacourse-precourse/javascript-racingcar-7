import { Console } from "@woowacourse/mission-utils";

const printSpace = () => {
  Console.print("");
};

export const printTitle = () => {
  printSpace();
  Console.print("실행 결과");
};

export const printRound = (roundData) => {
  for (let userData of roundData) {
    let distance = "-".repeat(userData.distance);
    Console.print(`${userData.name} : ${distance}`);
  }
  printSpace();
};
