import { Console, Random } from "@woowacourse/mission-utils";

async function getNames() {
  try {
    let input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return input;
  } catch (error) {
    throw new Error('[ERROR]');
  }
}

async function getCount() {
  try {
    let count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return count;
  } catch (error) {
    throw new Error('[ERROR]');
  }
}

class App {
  async run() {
    try {
      let input = await getNames();
      let count = await getCount();

      let nameArray = input.split(',');
      let moveArray = Array.from({length: nameArray.length}, () => '');

    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
