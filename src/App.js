import { Console } from "@woowacourse/mission-utils";

export async function inputCarsNameWithDelimeter() {
  const inputString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  return inputString;
}

export function splitCarsName(inputString) {
  return inputString.split(',')
}

class App {
  async run() {}
}

export default App;