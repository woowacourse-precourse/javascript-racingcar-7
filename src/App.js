import { Console } from "@woowacourse/mission-utils"

class App {
  async run() {
    const NAMES = await this.getNames();
    const TIMES = await this.getTime();
  }

  async getNames() {
    let inputNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    let NameTemp = inputNames.replace(/ /g, '');
    const NAMES = NameTemp.split(',');
    await this.checkName(NAMES);
    return NAMES;
  }

  async getTime() {
    let times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    times = Number(times);
    return times;
  }

  async checkName(NAMES) {
    const SET_NAMES = new Set(NAMES);
    if (SET_NAMES.size !== NAMES.length) {
      throw new Error("[ERROR] 중복되는 자동차 이름이 존재합니다.");
    }
    for (let i = 0; i < NAMES.length; i++) {
      if (NAMES[i].length > 5) {
        throw new Error("[ERROR] 자동차 이름이 5글자 초과입니다.");
      }
    }
  }
}

export default App;
