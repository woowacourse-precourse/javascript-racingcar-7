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
class App {
  async run() {
    const Cars = await carNameInput();
  }
}

export default App;
