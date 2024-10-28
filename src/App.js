import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const { PLAYERS, GOING } = setPlayer(INPUT);
    // const INPUT2 = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    // printRace(INPUT2, PLAYERS, GOING);
    // setWinner(PLAYERS, GOING);
  }
}

function setPlayer(INPUT) {
  const PLAYERS = INPUT.split(',');
  const GOING = Array.from({ length: PLAYERS.length }, () => "");
  return { PLAYERS, GOING }
}

// function printRace(INPUT2, PLAYERS, GOING) {
//   MissionUtils.Console.print("실행 결과\n");
//   for (let i = 0; i < INPUT2; i++) {
//     setGoing(GOING);
//     for (let j = 0; j < PLAYERS.length; j++) {
//       MissionUtils.Console.print(PLAYERS[j] + " : " + GOING[j]);
//     }
//     MissionUtils.Console.print("");
//   }
// }

// function setGoing(GOING) {
//   for (let i = 0; i < GOING.length; i++) {
//     if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
//       GOING[i] += "-";
//     }
//   }
// }

// function setWinner(PLAYERS, GOING) {
//   let winner = [];
//   let count = 0;
//   for (let i = 0; i < GOING.length; i++) {
//     if (count < GOING[i].length) {
//       winner = [PLAYERS[i]];
//       count = GOING[i].length;
//     } else if (count === GOING[i].length) {
//       winner.push(PLAYERS[i])
//     }
//     console.log(count, winner)
//   }
//   let theWinner = winner.join(', ')
//   MissionUtils.Console.print("최종 우승자 : " + theWinner);
// }
export default App;