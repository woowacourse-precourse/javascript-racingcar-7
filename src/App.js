import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    //  TODO : 자동차 이름 validation 하기

    const carNames = await Console.readLineAsync('자동차 이름을 입력해 주세요');
    console.log(carNames.split(','));
    const finishLine =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    console.log(finishLine);
  }
}

export default App;
