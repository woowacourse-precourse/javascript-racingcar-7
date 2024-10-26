import { Console, MissionUtils } from "@woowacourse/mission-utils";

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

    const checkCount = () => {
      if (isNaN(inputCount) || inputCount === "") {
        throw new Error("[ERROR] 숫자를 입력해주새요.");
      }
    };
    Console.print(checkCount());

    // 2. 입력받은 값을 통해 게임 구현

    const randomNum = () => {
      return MissionUtils.Random.pickNumberInRange(0, 9);
    };
    Console.print(randomNum());

    const userNames = checkNames();
    const userRacingResult = Array.from({ length: userNames.length });

    Console.print(userRacingResult);
    Console.print(userNames);

    const racing = () => {
      let dash = "";
      for (let r = 0; r < inputCount; r++) {
        const randomNumber = randomNum();
        Console.print(randomNumber);
        if (4 <= randomNumber) {
          dash += "-";
        }
      }
      return dash;
    };
    Console.print(racing());

    const putResultToUser = () => {
      for (let u = 0; u < userNames.length; u++) {
        userRacingResult[u] = racing();
      }
      return userRacingResult;
    };
    Console.print(userRacingResult);
    Console.print(putResultToUser());
  }
}

export default App;
