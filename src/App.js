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

    // 3. 라운드 실행 및 결과 출력
    for (let i = 0; i < tries; i++) {
      racing_start = this.racing_play(racing_start);
      this.racing_result(racing_start);
    }

    // 4. 최종 우승자 출력
    this.racing_winner(racing_start);
  }

  // 5. 무작위 랜덤 숫자 추출
  random_car() {
    const random = Random.pickNumberInRange(0, 9);
    return random >= 4;
  }

  // 6. 자동차 경주 - 초기값설정
  car_result(cars) {
    return cars.map(car => ({
      name: car,
      position: 0,
    }));
  }

  // 7. 자동차 경주 - 전진 혹은 전진안함 
  racing_play(racing_start) {
    return racing_start.map(car => {
      if (this.random_car()) {
        car.position += 1;
      }
      return car;
    });
  }

  
   // 8. 자동차경주 - 결과
   racing_result(racing_start) {
    racing_start.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
  }



  // 9. 최종우승자 결과출력
  racing_winner(racing_start) {
    const maxPosition = Math.max(...racing_start.map(car => car.position));
    const winners = racing_start
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
    Console.print('최종 우승자 : ' + winners.join(', '));
  }

// 10. 에러검사 - 자동차이름 유효성
check_name(cars) {
  cars.forEach(car => {
    if (car.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
  });
}
}

export default App;
