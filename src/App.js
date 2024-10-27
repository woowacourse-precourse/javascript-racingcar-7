import { Console } from '@woowacourse/mission-utils'

const validateCarName = (input) => {

  if (input.length > 5){
    throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
  }

}
const determineCarName = (input) => {
  const names = input.split(',');
  names.forEach((name)=>validateCarName(name));
}

class App {
  async run() {
  const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  determineCarName(input);
  const raceNumber = await  Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
