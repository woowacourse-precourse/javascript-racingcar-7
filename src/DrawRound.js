import { MissionUtils } from "@woowacourse/mission-utils";
import { RandomNumbers } from "./Random.js";

export function DrawRound(names, roundCount) {
  for (let round = 0; round < roundCount; round++) {
    const randomCounts = RandomNumbers(names.length);
    names.forEach((name, index) => {
      let result = `${name} : ` + "-".repeat(randomCounts[index]);
      MissionUtils.Console.print(result);
    });
    MissionUtils.Console.print("\n");
  }
}
