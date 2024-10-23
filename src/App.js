import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

const inputStringMessage = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const inputCountMessage = '시도할 횟수는 몇 회인가요?';
const errorMessage = '[ERROR] : 잘못된 입력입니다';

class App {
  constructor() {
    /// 입력 받은 문자열
    this.stringFromConsole = '';

    /// 입력받은 시행 횟수
    this.testCount = null;

    /// 구분자로 구분된 이름과 거리값으로 정규화한 배열
    this.stateList =[];

    /// 디버깅을 위한 에러 플래그
    this.error = false;
  }

  async input() {
    this.stringFromConsole = await Console.readLineAsync(inputStringMessage);
    this.testCount = await Console.readLineAsync(inputCountMessage);

    /// 입력받은 문자열이 없는 경우에 대해서 에러 처리
    if(this.testCount === null || this.stringFromConsole === null ||
      this.testCount === '' || this.stringFromConsole === '' ||
      this.testCount === undefined || this.stringFromConsole === undefined ||
      this.testCount < 0
    ) {
      throw new Error(errorMessage);
    }
  }
  
  seperatedBySeperator() {
    const names = this.stringFromConsole.split(',');
    const stateList = names.map(name => {

      /// 입력받은 이름들의 길이가 5보다 큰 경우에 대해서 에러 처리
      if(name.length > 5 || name === '') {
        throw new Error(errorMessage);
      }
      
      /// 디버깅용 콘솔 출력
      if(this.debug) { Console.print(name); }

      return [name, 0];
    });

    this.stateList = [...stateList];
  }

  createRandomBoolean() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);

    if(randomValue >= 4) { return true; }
      
    return false;
  }

  async whoIsWinner() {
    let max = 0;

    Console.print('\n실행 결과');

    for(let i = 0; i < this.testCount; i++) {
      this.stateList.forEach((state, j) => {
        /**
         * state[0]은 이름이다.
         * staet[1]은 간 거리이다.
         */
        const randBoolean = this.createRandomBoolean();

        if(randBoolean) {
          this.stateList[j][1] += 1;
        }

        if(this.stateList[j][1] > max) {
          max = this.stateList[j][1];
        }
        
        Console.print(state[0] + ' : ' + `${'-'.repeat(state[1])}`);
      });

      Console.print('');
    }

    
    const winnerStateList = this.stateList.filter((state) => {
      /**
       * state[1]은 간 거리이다.
       * 간거리가 이전에 구한 최댓값인 경우 가장 멀리간 사람임을 알 수 있다.
       */

      return state[1] === max;
    });

    const winnerList = winnerStateList.map(state => {
      /**
       * state[0]은 이름이다.
       * 가장 멀리간 사람의 이름을 Array에 담는다.
       */

      return state[0];
    });

    Console.print('최종 우승자 : ' + `${winnerList.join(', ')}`);
  }

  async run() {
    this.debug = false;

    /// 테스트용
    if(!this.debug) {
      await this.input();
      this.seperatedBySeperator();
      this.whoIsWinner();

      /// 디버깅용
    } else { 
      const testCase = [['pobi,woni,janm', '1']];
      testCase.forEach(test => {
        /**
         * test는 테스트 케이스 입력이다.
         * test[0]은 입력 문자열이다.
         * test[1]은 입력받은 실행 횟수이다.
         */

        this.stringFromConsole = test[0]; 
        this.testCount = Number(test[1]);
        this.seperatedBySeperator();
        this.whoIsWinner();
      });
    }
  }
}

export default App;
