import { Console, Random } from "@woowacourse/mission-utils";

export function randomMoveHandler(count, nameArray, moveArray) {
  try {
    for (let i = 0; i < count; i++) {
      nameArray.map((value, index) => {
        var randNum = Random.pickNumberInRange(0, 9);
        if (randNum >= 4) moveArray[index] += "-";
        Console.print(`${value} : ${moveArray[index]}`);
      });
      Console.print("");
    }
    return moveArray;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
