import { MissionUtils } from "@woowacourse/mission-utils";

async function getCarname() {
  const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");
  return input;
}

class App {
  async run() {
    const carnames = await getCarname();
  }
}

export default App;
