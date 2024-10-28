import { Console } from "@woowacourse/mission-utils";
import runRace  from "../logic/runRace.js";

export default function printRaceResults(attemptCount, cars) {
  if(isNaN(attemptCount)) {
    throw new Error("[ERROR] 시도 횟수는 숫자로 입력하시오.");
  }
  if(attemptCount < 1) {
    throw new Error("[ERROR] 시도 횟수는 1이상의 양수를 입력하시오.");
  }
  Console.print("실행 결과");
  const raceResults = runRace(attemptCount, cars);
  raceResults.forEach((result) => {
    result.forEach((line) => Console.print(line));
    Console.print("");
  });

}
