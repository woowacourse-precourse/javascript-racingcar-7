import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const INPUT = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const { PLAYERS, GOING } = setPlayer(INPUT);
      const INPUT2 = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      MissionUtils.Console.print("");
      printRace(INPUT2, PLAYERS, GOING);
      setWinner(PLAYERS, GOING);
    } catch (error) {
      throw new Error("[ERROR]" + error.message);
    }
  }
}

function setPlayer(INPUT) {
  const PLAYERS = INPUT.split(',');
  PLAYERS.forEach(element => {
    if (element.length > 5) {
      throw new Error("이름의 길이가 5 보다 큽니다.");
    }
  });
  const GOING = Array.from({ length: PLAYERS.length }, () => "");
  return { PLAYERS, GOING }
}

function printRace(INPUT2, PLAYERS, GOING) {
  if (isNaN(Number(INPUT2))) {
    throw new Error("숫자가 아닙니다.");
  } else if (Number(INPUT2) < 0) {
    throw new Error("숫자가 음수입니다.");
  } else if (!Number.isInteger(Number(INPUT2))) {
    throw new Error("숫자가 정수가 아닙니다.");
  }
  MissionUtils.Console.print("실행 결과");
  for (let i = 0; i < INPUT2; i++) {
    setGoing(GOING);
    for (let j = 0; j < PLAYERS.length; j++) {
      MissionUtils.Console.print(PLAYERS[j] + " : " + GOING[j]);
    }
    MissionUtils.Console.print("");
  }
}

function setGoing(GOING) {
  for (let i = 0; i < GOING.length; i++) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      GOING[i] += "-";
    }
  }
}

function setWinner(PLAYERS, GOING) {
  let winner = [];
  let count = 0;
  for (let i = 0; i < GOING.length; i++) {
    if (count < GOING[i].length) {
      winner = [PLAYERS[i]];
      count = GOING[i].length;
    } else if (count === GOING[i].length) {
      winner.push(PLAYERS[i])
    }
  }
  let theWinner = winner.join(', ')
  MissionUtils.Console.print("최종 우승자 : " + theWinner);
}
export default App;