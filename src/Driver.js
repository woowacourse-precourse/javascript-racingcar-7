import { Random, Console } from "@woowacourse/mission-utils";

export function Driver(nameList, number) {
  let score = ArrObjConvertor(nameList);

  Console.print(RESULT_TITLE);
  score = EachTimePrinter(score, number);
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
    Console.print(`${car} : ${PROGRESS_BAR * score[bar]}\n`);
  }
  Console.print("\n");
}
