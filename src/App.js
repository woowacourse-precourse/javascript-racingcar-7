import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const names = await this.getNames();
    const move = await this.getMove();
    let currentMove = Array(names.length).fill('');
    MissionUtils.Console.print('\n실행 결과');
    for(let i=0; i<move; i++){
      this.play(names, currentMove);
    }
    this.checkWinner(names, currentMove);
  }

  async getNames() {
    try{
      const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      if (!input){
        throw new Error('[ERROR]: 자동차의 이름이 입력되지 않았습니다.')
      }
      return this.splitNames(input);
    } catch(error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }

  async getMove() {
    try{
      const input = Number(await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n"));
      if(input <= 0 || !Number.isInteger(input)){
        throw new Error('시도 횟수는 1이상의 정수여야합니다.')
      }
      return input;
    } catch(error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }

  splitNames(input) {
    let splitedNames = input.split(',');
    let names = [];
    splitedNames.forEach((name) => {
      const trimmedName = name.trim();
      if (trimmedName.length) {
        names.push(trimmedName);
      }
    });
    console.log(names);
    for(let name of names){
      if (name.length > 6){
        throw new Error ('[ERROR]: 자동차의 이름은 5자 이하여야한다.');
      }
    }
    return names;
  }

  getRandomNumber(){
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  printCurrent(names, currentMove){
    names.map((_, i) => {
      MissionUtils.Console.print(`${names[i]} : ${currentMove[i]}`);
    })
    MissionUtils.Console.print('\n');
  }

  play(names, currentMove){
    names.forEach((_, index) => {
      let randomNumber = this.getRandomNumber();
      if(randomNumber >= 4){
        currentMove[index] += '-';
      }
    })
    this.printCurrent(names, currentMove);
  }

  checkWinner(names, currentMove){
    const max = [...currentMove].sort().at(-1).length;
    let winner = [];
    names.forEach((name, i) => {
      if(currentMove[i].length === max){
        winner.push(name);
      }
    })

    if(winner.length === 1){
      MissionUtils.Console.print(`최종 우승자 : ${winner[0]}`);
    } else {
      MissionUtils.Console.print(`공동 우승자 : ${winner.join(', ')}`);
    }
  }
}

export default App;
