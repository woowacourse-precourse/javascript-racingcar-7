import { Console } from '@woowacourse/mission-utils';

// Random.pickNumberInRange() --> 랜덤 값 추출
// Console.readLineAsync(), Console.print()
// MissionUtils.Random.pickNumberInRange(0, 9); --> 0에서 9까지의 정수 중 한 개의 정수 반환

class App {
  async run() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const attemptNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    Console.print(carNames);
    Console.print(attemptNumber);
  }
}

export default App;
