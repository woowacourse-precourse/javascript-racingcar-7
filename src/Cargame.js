import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Cargame {
  runRace(userNames, userCounts) {
    for (let j = 0; j < userNames.length; j++) {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        userCounts[j]++;
      }
    }
    this.printRaceResults(userNames, userCounts);
  }

  printRaceResults(userNames, userCounts) {
    for (let j = 0; j < userNames.length; j++) {
      let dashes = "-".repeat(userCounts[j]);
      Console.print(`${userNames[j]} : ${dashes}`);
    }
    Console.print("");
  }
}

export default Cargame;
