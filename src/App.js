import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    //경주할 자동차 이름 부여하는 기능
    const CAR_NAME = await Console.readLineAsync(
      "자동차 이름은 무엇입니까?"
    );
    function Separator(CAR_NAME) {
      const CAR = CAR_NAME.indexOf(',');

      if (CAR.length < 6) {
        throw new Error("[Error] 자동차 이름은 5자 이하만 가능합니다.")
      }
    }

    const FIRST = Separator(CAR_NAME);

    


    //결과 출력
    Console.print(FIRST);
  }
}

export default App;
