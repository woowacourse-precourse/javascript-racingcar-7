import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.console = Console;
    this.random = MissionUtils.Random;
  }

  validateInput(input) {
    const items = input.split(',').map(item => item.trim());
    if (items.some(item => item.length === 0 || item.length > 5)) {
      throw new Error("[ERROR] 입력 오류: 각 항목은 1자 이상 5자 이하로 입력해야 합니다.");
    }
    return items;
  }

  validateAttempt(input) {
    const attempt = parseInt(input, 10);
    if (isNaN(attempt) || attempt <= 0) {
      throw new Error("[ERROR] 입력 오류: 시도 횟수는 양의 정수로 입력해야 합니다.");
    }
    return attempt;
  }

  randomMove(cars) {
    return cars.map(car => {
      const randomNumber = this.random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.position.push('-'); // 이동 시 '-' 추가
      }
      return car;
    });
  }

  printCurrentStatus(cars) {
    cars.forEach(car => {
      const track = car.position.join(''); // 위치 배열을 문자열로 변환
      this.console.print(`${car.name} : ${track}`); // 빈 문자열로 출력하지 않도록 조정
    });
    this.console.print(''); // 줄바꿈 추가
  }

  async run() {
    try {
      const input = await this.console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const validInput = this.validateInput(input);

      const attemptInput = await this.console.readLineAsync("시도할 횟수를 입력하세요.\n");
      const attemptCount = this.validateAttempt(attemptInput);

      let cars = validInput.map(name => ({
        name,
        position: [] // 빈 배열로 초기화
      }));

      for (let i = 0; i < attemptCount; i++) {
        cars = this.randomMove(cars); // 각 시도마다 랜덤 이동 적용
        this.printCurrentStatus(cars); // 현재 상태 출력
      }

    } catch (error) {
      this.console.print(error.message);
    }
  }
}

export default App;
