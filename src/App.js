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

function checkNames(arr) {
  let isError = false;

  arr.forEach((name) => {
    if (name.length() > 5) isError = true;
  });
  if (arr.length < 2) {
    isError = true;
  }
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const names = getNames(input);
    if (checkNames(names)) {
      throw new Error('[ERROR]');
    } else {
      // TODO: 정상적인 입력에 대한 수행
    }
  }
}

export default App;
