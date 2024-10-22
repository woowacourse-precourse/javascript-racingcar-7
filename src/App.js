import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const { Random } = MissionUtils;
async function carNameInput() {
  const carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  if (carNames.split(",").some((carName) => carName.trim().length > 5)) {
    throw new Error("[ERROR]");
  }
  return carNames.split(",");
}
async function roundInput() {
  const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  if (Number.isNaN(+count)) {
    throw new Error("[ERROR]");
  }
  return +count;
}

function makeRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}

function isForward() {
  const number = makeRandomNumber();
  return number >= 4;
}

function startGame(Game, round) {
  for (let i = 0; i < round; i++) {
    Game.map((_, index) => {
      if (isForward()) {
        Game[index]++;
      }
    });
  }
}

class App {
  async run() {
    const cars = await carNameInput();
    const round = await roundInput();
    let racingGame = new Array(cars.length).fill(0);
    startGame(racingGame, round);
  }
}

export default App;
