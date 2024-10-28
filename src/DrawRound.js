import { MissionUtils } from "@woowacourse/mission-utils";
import { RandomNumbers } from "./Random.js";
import { CountWinner } from "./CountWinner.js";
import { FinalWinner } from "./CountWinner.js";

function printRoundResults(names, randomCounts) {
  names.forEach((name, index) => {
    const result = `${name} : ` + "-".repeat(randomCounts[index]);
    MissionUtils.Console.print(result);
  });
  MissionUtils.Console.print("");
}

function updateWinCounts(names, randomCounts, winCounts) {
  CountWinner(names, randomCounts, winCounts);
}

export function DrawRound(names, roundCount) {
  const winCounts = Array(names.length).fill(0);
  MissionUtils.Console.print("실행 결과");
  for (let round = 0; round < roundCount; round++) {
    const randomCounts = RandomNumbers(names.length);
    printRoundResults(names, randomCounts);
    updateWinCounts(names, randomCounts, winCounts);
  }
  const finalWinners = FinalWinner(names, winCounts);
  MissionUtils.Console.print(`최종 우승자 : ${finalWinners.join(", ")}`);
}
