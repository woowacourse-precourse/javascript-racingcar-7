import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
async function carNameInput() {
  const carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  if (carNames.split(",").some((carName) => carName.trim().length > 5)) {
    throw new Error("[ERROR]");
  }
  return carNames.split(",");
}
async function countInput() {
  const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  if (Number.isNaN(+count)) {
    throw new Error("[ERROR]");
  }
  return count;
}
class App {
  async run() {
    const Cars = await carNameInput();
    Console.print(Cars);
    const Round = await countInput();
    Console.print(Round);
  }
}

export default App;
