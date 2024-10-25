import { Console } from "@woowacourse/mission-utils";
import updateRunCount from "./updateRunCount.js"

const startCarRace = (carObjectList, raceCount) => {
  Console.print("실행 결과");
  for (let i = 0; i < raceCount; i++) {
    carObjectList.map((car) => {
      updateRunCount(car);
    })
    Console.print("");
  }
}

export default startCarRace