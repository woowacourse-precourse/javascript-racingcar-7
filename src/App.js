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

    checkNames();

    const inputCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const checkCount = () => {
      if (isNaN(inputCount) || inputCount === "") {
        throw new Error("[ERROR] 숫자를 입력해주새요.");
      }
    };
    checkCount();

    // 2. 입력받은 값을 통해 게임 구현

    const randomNum = () => {
      return MissionUtils.Random.pickNumberInRange(0, 9);
    };

    const userNames = checkNames();
    const userRacingResult = Array.from({ length: userNames.length }, () => "");

    let dash = "";
    const racing = () => {
      for (let r = 0; r < inputCount; r++) {
        for (let u = 0; u < userNames.length; u++) {
          dash = "";
          userRacingResult[u] += checkRange();
          Console.print(userNames[u] + " : " + userRacingResult[u]);
        }
        Console.print("");
      }
    };

    const checkRange = () => {
      let randomNumber = randomNum();
      if (4 <= randomNumber) {
        dash = "-";
      }
      return dash;
    };
    racing();
    Console.print(userNames);
    Console.print(userRacingResult);

    const checkRacingScore = () => {
      let max = Number.MIN_SAFE_INTEGER;
      for (let userNum = 0; userNum < userRacingResult.length; userNum++) {
        if (max <= userRacingResult[userNum].length) {
          max = userRacingResult[userNum].length;
        }
      }
      return max;
    };
    Console.print(checkRacingScore());
  }
}

export default App;
