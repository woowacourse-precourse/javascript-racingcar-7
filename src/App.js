import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1, 사용자에게 값을 입력받고 처리하기
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const separate = () => {
      return carNames.split(",");
    };

    const checkNames = () => {
      const separateNames = separate();
      for (let i = 0; i < separateNames.length; i++) {
        if (separateNames[i].length > 5) {
          throw new Error("[ERROR] 자동차 이름을 5자 이하로 작성해주세요.");
        }
        if (separateNames[i].length === 0) {
          throw new Error("[ERROR] 자동차 이름을 공백으로 작성하였습니다.");
        }
      }
      const uniqueNames = [...new Set(separateNames)];
      if (separateNames.length !== uniqueNames.length) {
        throw new Error("[ERROR] 자동차의 이름을 중복으로 작성하였습니다.");
      }

      return separateNames;
    };

    const inputCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    Console.print(inputCount + "회");

    // 2. 입력받은 값을 통해 게임 구현

    const userNames = checkNames();
    Console.print("실행 결과");
    for (let cnt = 0; cnt < inputCount; cnt++) {
      Console.print("\n");
      for (let j = 0; j < userNames.length; j++) {
        Console.print(userNames[j] + " : ");
      }
    }
  }
}

export default App;
