import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.name_list = [];
    this.race_result = [];
    this.try_count = 0;
  }

  parse_input(input) {
    const result = input.split(',').map((str) => str.trim());
    return result;
  }

  validate_name(names) {
    names.forEach((name) => {
      if (name.trim() === '' || name.trim().length > 5) {
        throw new Error('[ERROR]');
      }
    });
    return true;
  }

  get_random_number() {
    return Random.pickNumberInRange(0, 9);
  }

  get_race_winner() {
    const max_value = Math.max(...this.race_result);
    return this.name_list.filter(
      (_, index) => this.race_result[index] === max_value
    );
  }

  print_race_process() {
    this.name_list.forEach((name, index) => {
      Console.print(`${name} : ${'-'.repeat(this.race_result[index])}`);
    });
    Console.print('');
  }

  start_race() {
    this.race_result.forEach((_, index) => {
      if (this.get_random_number() >= 4) {
        this.race_result[index] += 1;
      }
    });
  }

  async run() {
    const input_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const input_number = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const parsed_names = this.parse_input(input_names);
    if (this.validate_name(parsed_names)) {
      this.name_list = parsed_names;
    }
    this.race_result = new Array(this.name_list.length).fill(0);
    this.try_count = Number(input_number);

    Console.print('실행 결과');

    for (let repeat = 0; repeat < input_number; repeat++) {
      this.start_race();
      this.print_race_process();
    }

    const winner = this.get_race_winner();
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
