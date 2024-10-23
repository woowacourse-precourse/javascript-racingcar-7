import { Console } from "@woowacourse/mission-utils";
import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      //자동차 이름 부여 기능
      const CAR_NAME = await Console.readLineAsync(
      "자동차 이름은 무엇입니까?"
    );

      //자동차 이름 검사
      this.Separator(CAR_NAME);

      //이동 횟수 입력받기
      const FORWARD_TIME = await Console.readLineAsync("이동 횟수를 입력하세요.");

      //이동 로직 실행
      this.moveCar(Number(FORWARD_TIME));
    } catch (error) {
      Console.print(error.message);
      }
    }

    //자동차 이름 유효성 검사
    Separator(CAR_NAME) {
      const CAR_NAMES = CAR_NAME.split(',');

      //자동차 이름 5자 이하 검사
      CAR_NAMES.forEach(name => {
        if (name.length >= 6) {
          throw new Error("[Error] 자동차 이름은 5자 이하만 가능합니다.")
        }
      });
    }

    //이동 로직
    moveCar(FORWARD_TIME) {
      for (let i = 0; i < FORWARD_TIME; i++) {
        const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOM_NUM >= 4) {
          Console.print(`이동 성공! 랜덤 숫자: ${RANDOM_NUM}`);
        } else {
          Console.print(`이동 실패. 랜덤 숫자: ${RANDOM_NUM}`);
        }
    }
  }
}



export default App;
