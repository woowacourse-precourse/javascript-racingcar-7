import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 사용자로부터 자동차 이름 입력 받기
      const carNames = await this.getCarNames();
      
      // 사용자로부터 시도 횟수 입력 받기
      const attemptCount = await this.getAttemptCount();

      // 자동차 데이터를 초기화 (각 자동차의 이름과 위치)
      const carData = carNames.map((name) => ({ name, position: 0 }));
      
      // 게임 진행
      this.playGame(carData, attemptCount);

      // 최종 우승자 발표
      this.announceWinners(carData);
    } catch (error) {
      // 오류 발생 시 오류 메시지 출력
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // 사용자로부터 자동차 이름을 입력받는 함수
  async getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.split(',').map((name) => name.trim());
    if (carNames.some((name) => name.length > 5 || name.length === 0)) {
      throw new Error('자동차 이름은 1자 이상 5자 이하로 입력해주세요.');
    }
    return carNames;
  }
    
  // 사용자로부터 시도 횟수를 입력받는 함수
  async getAttemptCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const attemptCount = Number(input);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error('횟수는 1 이상의 숫자로 입력해주세요.');
    }
    return attemptCount;
  }

  // 게임을 진행하는 함수
  playGame(carData, attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      this.playRound(carData);
      this.printRoundResults(carData);
    }
  }

  // 라운드를 진행하는 함수
  playRound(carData) {
    carData.forEach((car) => this.updateCarPosition(car));
  }

  // 자동차 전진 여부 결정 후 업데이트 함수
  updateCarPosition(car) {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      car.position++;
    }
  }

  // 라운드별 결과를 출력하는 함수
  printRoundResults(carData) {
    carData.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }
  
  // 최종 우승자를 발표하는 함수
  announceWinners(carData) {
    const maxPosition = Math.max(...carData.map((car) => car.position));
    const winners = carData.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
