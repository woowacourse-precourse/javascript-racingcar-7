import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.stringFromConsole = '';
    this.testCount = 0;

    this.stateList =[];
  }

  async input() {
    this.stringFromConsole = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.testCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    // await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  }
  
  seperatedBySeperator() {
    const names = this.stringFromConsole.split(',');
    const stateList = names.map(e => [e, 0]);

    this.stateList = [...stateList];
  }

  createRandomBoolean() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);

    if(randomValue >= 4) return true;
    else return false;

    /// 호출시 await 해줌
  }

  async whoIsWinner() {
    let max = 0;

    Console.print("\n실행 결과");
    for(let i = 0; i < this.testCount; i++) {
      this.stateList.forEach((state, j) => {
        const randBoolean = this.createRandomBoolean();

        if(randBoolean) this.stateList[j][1] += 1;

        if(this.stateList[j][1] > max) max = this.stateList[j][1];

        Console.print(state[0] + " : " + `${'-'.repeat(state[1])}`);
      });

      Console.print('');
    }

    const winnerStateList = this.stateList.filter((e) => e[1] === max);
    const winnerList = winnerStateList.map(e => e[0]);
    
    Console.print("최종 우승자 : " + `${winnerList.join(', ')}`);
  }

  async run() {
    await this.input();
    this.seperatedBySeperator();
    this.whoIsWinner();
  }
}

export default App;
