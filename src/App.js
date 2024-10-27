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

function printRacingGame(carsNames, game) {
  Console.print("실행 결과");
  game.map((_, index) => {
    Console.print(`${carsNames[index]} : ${"-".repeat(game[index])}`);
  });
  Console.print("");
}

function startGame(game, round, carNames) {
  for (let i = 0; i < round; i++) {
    game.forEach((_, index) => {
      if (isForward()) {
        game[index]++;
      }
    });
    printRacingGame(carNames, game);
  }
  return game;
}

function getWinners(raceResults, carNames) {
  const topScore = Math.max(...raceResults);
  const winners = carNames.filter(
    (_, index) => raceResults[index] === topScore
  );
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
class App {
  async run() {
    const cars = await carNameInput();
    const round = await roundInput();
    let racingGame = new Array(cars.length).fill(0);
    const finalResult = startGame(racingGame, round, cars);
    getWinners(finalResult, cars);
  }
}

export default App;
