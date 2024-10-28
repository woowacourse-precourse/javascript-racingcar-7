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

function EachTimePrinter(_score, number) {
  let score = _score;
  if (number === 0) return score;
  for (const car in score) {
    if (Random.pickNumberInRange(0, 9) > 3) score[car] += 1;
    let output = "";
    if (score[car] != 0) output = "-".repeat(score[car]);
    Console.print(`${car} : ${output}\n`);
  }
  Console.print("\n");
  return EachTimePrinter(score, number - 1);
}

function WinnerPrinter(score) {
  let max_score = 0;
  for (const car in score) max_score = Math.max(score[car], max_score);

  let winner = [];
  for (const car in score) {
    if (score[car] == max_score) winner.push(car);
  }

  Console.print("최종 우승자 : " + winner.join(", "));
}
