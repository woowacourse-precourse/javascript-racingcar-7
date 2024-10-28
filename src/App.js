import { Console, Random } from "@woowacourse/mission-utils"

class App {
  async run() {
    const NAMES = await this.getNames();
    const TIMES = await this.getTime();
    const NAMES_COUNT = NAMES.length;
    let gameInfo = Array.from({ length: NAMES.length }, () => 0);
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
    await this.checkTime(times)
    return Number(times);
  }

  async checkTime(times) {
    if (Number.isInteger(Number(times)) === false) {
      throw new Error("[ERROR] 잘못된 입력 형식입니다.");
    }
    if (Number(times) <= 0) {
      throw new Error("[ERROR] 0이하 수가 입력 되었습니다.");
    }
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

  async makeRandomNum(gameInfo, NAMES_LENGTH) {
    for (let i = 0; i < NAMES_LENGTH; i++) {
      let random = Random.pickNumberInRange(0, 9);
      if (random >= 4) {
        gameInfo[i] += 1;
      }
    }
    return gameInfo;
  }

  async printGame(gameInfo, NAMES, NAMES_COUNT) {
    for (let i = 0; i < NAMES_COUNT; i++) {
      Console.print(NAMES[i] + ' : ' + '-'.repeat(gameInfo[i]));
    }
  }
}

export default App;
