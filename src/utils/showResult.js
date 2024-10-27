import { Console } from "@woowacourse/mission-utils";

export function showResult(winnerArray) {
  try {
    let answer = `최종 우승자 : ${winnerArray.join(',')}`;
    Console.print(answer);
  } catch (error) {
    throw new Error('[ERROR]');
  }
}