import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Cargame {
  runRace(userNames, userCounts) {
    for (let j = 0; j < userNames.length; j++) {
      // 0에서 9 사이의 무작위 값을 구한 후, 4 이상일 경우 전진
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        userCounts[j]++;
      }
    }
    // 전진한 결과 출력
    this.printRaceResults(userNames, userCounts);
  }

  printRaceResults(userNames, userCounts) {
    for (let j = 0; j < userNames.length; j++) {
      let dashes = "-".repeat(userCounts[j]); //     // 자동차가 전진한 만큼 -를 추가
      Console.print(`${userNames[j]} : ${dashes}`); // 이름과 함께 출력
    }
    Console.print("");
  }

  findWinners(userNames, userCounts, winnerNumber) {
    let winners = "";

    // 가장 이동한 거리가 긴 자동차의 이름 목록을 반환
    for (let i = 0; i < userCounts.length; i++) {
      if (userCounts[i] === winnerNumber) {
        winners += `${userNames[i]}, `; // 여럿일 경우 쉼표로 구분
      }
    }
    return winners.slice(0, -2);
  }
}

export default Cargame;
