import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const participant_input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!participant_input) {
      // ERROR 경주할 자동차를 입력해주세요.
    }
    
    const participant_list = participant_input.split(',');
    
  }
}

export default App;
