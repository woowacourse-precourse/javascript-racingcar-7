import { Random, Console } from "@woowacourse/mission-utils";

export function Driver(nameList, number) {
  let score = ArrObjConvertor(nameList);

  Console.print("\n실행 결과\n");
  score = EachTimePrinter(score, number);
  WinnerPrinter(score);
}

function ArrObjConvertor(list) {
  let resultObj = {};
  list.forEach((element) => {
    resultObj[element] = 0;
  });
  return resultObj;
}

function EachTimePrinter(score, number) {
  if (number === 0) return score;
  for (let car of score) {
    score[car] += Random.pickNumberInRange(0, 9);
    Console.print(`${car} : ${"-" * score[bar]}\n`);
  }
  Console.print("\n");
}

function WinnerPrinter(score) {
  let max_score = 0;
  for (let car of score) max_score = Math.max(score[car], max_score);
  let winner = score.map((car) => score[car] == max_score);
  Console.print("최종 우승자 : " + winner.join(", "));
}
