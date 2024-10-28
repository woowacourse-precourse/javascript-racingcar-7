import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async run() {
    const LINE = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const CARS = LINE.split(',');
    console.log(CARS);
  }
}

const APP = new App();
APP.run();
export default App;