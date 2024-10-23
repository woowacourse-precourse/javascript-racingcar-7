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
          MissionUtils.Console.readLine();
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
}

export default App;
