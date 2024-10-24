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
    let carName = input.split(",");
    let resultObj = {};
    carName.forEach((v) => {
      resultObj[v] = 0;
    });
    gameFlow(count, carName, resultObj);
    return Ranking(resultObj);
  }

  RandomNumber() {
    let number = Math.floor(Math.random() * 10);
    console.log(number);
    if (number > 4) {
      console.log("통과");
      return true;
    }
    return false;
  }

  gameFlow(count, carName, resultObj) {
    for (let i = 0; i < count; i++) {
      console.log(`${i + 1} 차시:`);
      for (let j = 0; j < carName.length; j++) {
        if (RandomNumber()) {
          resultObj[carName[j]] = (resultObj[carName[j]] || 0) + 1;
        }
      }
      Object.entries(resultObj).forEach(([name, value]) => {
        console.log(`${name}: ${"-".repeat(value)}`);
      });
    }
  }

  Ranking(resultObj) {
    let rankingArray = Object.entries(resultObj).sort(([, a], [, b]) => b - a);
    console.log("순위 :");
    rankingArray.forEach(([name, value], index) => {
      console.log(`${index + 1}위 : ${name} (전진횟수 : ${value})`);
    });
  }
}

export default App;
