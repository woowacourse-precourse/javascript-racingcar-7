import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 사용자로부터 자동차 이름 입력 받기
      const carNames = await this.getCarNames();
      
      // 사용자로부터 시도 횟수 입력 받기
      
      // 자동차 데이터를 초기화 (각 자동차의 이름과 위치)
      
      // 게임 진행
      
      // 최종 우승자 발표
      
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
}

export default App;
