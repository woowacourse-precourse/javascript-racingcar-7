import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const names = await this.getNames();
    const move = await this.getMove();
  }

  async getNames() {
    try{
      const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      return this.splitNames(input);
    } catch(error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }

  async getMove() {
    try{
      const input = Number(await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n"));
      return input;
    } catch(error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }

  splitNames(input) {
    let names = input.split(',');
    for(let name of names){
      if (name.length > 6){
        throw new Error ('[ERROR]: 자동차의 이름은 5자 이하여야한다.');
      }
    }
    return names;
  }
}

export default App;
