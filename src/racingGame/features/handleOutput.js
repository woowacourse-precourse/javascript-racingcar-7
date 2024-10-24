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

export const printWinner = (winnerList) => {
  let winner;
  if (winnerList.length === 1) winner = winnerList[0];
  else winner = winnerList.join(", ");
  Console.print(`최종 우승자 : ${winner}`);
};
