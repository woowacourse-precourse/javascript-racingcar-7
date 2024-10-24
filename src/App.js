import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }
}

function getNames(str) {
  const names = str.split(',');
  return names;
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const names = getNames(input);
  }
}

export default App;
