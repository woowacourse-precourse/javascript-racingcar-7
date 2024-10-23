import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');
    const attemptCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요\n');

    // 5자가 넘는 이름이 나올 경우 에러
    console.log(carNames, attemptCount);
  }
}

export default App;
