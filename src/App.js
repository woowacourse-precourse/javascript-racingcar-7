import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 자동차 이름 부여 기능
      const CAR_NAME = await Console.readLineAsync("자동차 이름은 무엇입니까?");
      const CAR_NAMES = this.Separator(CAR_NAME);

      // 이동 횟수 입력
      const FORWARD_TIME = await Console.readLineAsync(
        "이동 횟수를 입력하세요."
      );

      // 이동 로직 실행
      const CAR_POSITIONS = this.moveCar(CAR_NAMES, Number(FORWARD_TIME));

      // 우승자 로직 실행
      this.victoryCar(CAR_NAMES, CAR_POSITIONS);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 자동차 이름 유효성 검사
  Separator(CAR_NAME) {
    const CAR_NAMES = CAR_NAME.split(",");

    // 자동차 이름 글자수 제한
    CAR_NAMES.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    return CAR_NAMES;
  }

  // 이동 로직
  moveCar(CAR_NAMES, FORWARD_TIME) {
    const CAR_POSITIONS = CAR_NAMES.reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});

    CAR_NAMES.forEach((name) => {
      for (let i = 0; i < FORWARD_TIME; i++) {
        const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOM_NUM >= 4) {
          CAR_POSITIONS[name] += 1; // 이동 성공 시 위치 증가
        }
      }
      // 각 자동차의 이동 결과 출력
      Console.print(`${name} : ${"-".repeat(CAR_POSITIONS[name])}`);
    });

    return CAR_POSITIONS;
  }

  // 우승자 로직
  victoryCar(CAR_NAMES, CAR_POSITIONS) {
    // 자동차의 최대값을 찾기
    const maxPosition = Math.max(...Object.values(CAR_POSITIONS));

    // 우승자 찾기
    const WINNER = CAR_NAMES.filter(
      (name) => CAR_POSITIONS[name] === maxPosition
    ).join(", ");

    // 쉼표로 구분하여 우승자 출력
    Console.print(`최종 우승자 : ${WINNER}`);
  }
}

export default App;
