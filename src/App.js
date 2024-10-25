import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const participant_input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const try_input = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (!participant_input) {
      // ERROR 경주할 자동차를 입력해주세요.
    }

    if (try_input <= 0) {
      // ERROR 1 이상의 숫자부터 입력가능
    }
    
    const participant_list = participant_input.split(',');
    
  }

  isRamdomAbove(threshold) {
    const random_value = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random_value >= threshold) {
      return true
    }
    return false
  }
}

export default App;
