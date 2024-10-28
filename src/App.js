import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 1. 사용자에게 입력값 받기
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const cars = input.split(',').map(car => car.trim());
    this.check_name(cars);

    const cars_count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    const tries = Number(cars_count);

    // 2. 자동차 초기 상태 설정
    let racing_start = this.car_result(cars);

  }
}

export default App;
