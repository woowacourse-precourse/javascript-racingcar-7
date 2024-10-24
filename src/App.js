import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const firstUserInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    const secondUserInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    // 차수별 실행결과를 저장할 변수를 선언합니다.
    const racersProcess = new Map();
    const racers = firstUserInput.split(",");

    racers.map((racer) => {
      racersProcess.set(racer, "");
    });

    // 경주를 진행합니다.
    for (let i = 0; i < secondUserInput; i++) {
      // racer별로 전진 또는 멈추는 조건을 확인합니다.
      for (let j = 0; j < racersProcess.size; j++) {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          racersProcess.set(racers[j], racersProcess.get(racers[j]) + "-");
        }
      }
    }
    const winner = [];
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default App;
