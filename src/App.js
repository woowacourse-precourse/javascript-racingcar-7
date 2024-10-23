const MissionUtils = require("@woowacourse/mission-utils");
class App {
  async run() {
    this.isStart();
  }
  isStart() {
    MissionUtils.Console.readLine(
      "자동차 이름을 입력하시오(쉼표로 구분해주세요):",
      (input) => {
        if (this.CarNameException(input)) {
          MissionUtils.Console.print(`입력된 자동차: ${input}`);
          MissionUtils.Console.readLine(
            "게임을 몇번 진행하시겠습니까?",
            (count) => {
              MissionUtils.Console.print(
                `게임을 총 ${count} 번 진행하겠습니다`
              );
              gameStart(input, count);
            }
          );
        }
      }
    );
  }

  CarNameException(input) {
    let nameArray = input.split("");
    nameArray.forEach((v) => {
      if (v.length > 5) {
        throw new Error("이름은 5글자 이하입니다");
      }
    });
    return true;
  }

  gameStart(input, count) {
    // input ["ㄷ"]
    let carName = input.split("");

    let gameResult = new Set();

    // gameResult에다가
  }
}

export default App;
