import { Console, Random } from '@woowacourse/mission-utils';

class App {
  parse_input(input) {
    const result = input.split(',').map((str) => str.trim());
    return result;
  }
  get_random_number() {
    return Random.pickNumberInRange(0, 9);
  }
  start_race(race_result) {
    for (let i = 0; i < race_result.length; i++) {
      if (this.get_random_number() >= 4) {
        race_result[i] += 1;
      }
    }
  }
  async run() {
    const input_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const input_number = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const name_list = this.parse_input(input_names);
    const race_result = new Array(name_list.length).fill(0);

    for (let repeat = 0; repeat < input_number; repeat++) {
      this.start_race(race_result);
    }
    Console.print(race_result);
  }
}

export default App;
