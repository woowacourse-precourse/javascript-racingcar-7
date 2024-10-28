import { Console, Random } from '@woowacourse/mission-utils';

class App {
  parse_input(input) {
    const result = input.split(',').map((str) => str.trim());
    return result;
  }
  get_random_number() {
    return Random.pickNumberInRange(0, 9);
  }
  async run() {
    const input_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const input_number = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const name_list = this.parse_input(input_names);
    Console.print(name_list);
    Console.print(this.get_random_number());
  }
}

export default App;
