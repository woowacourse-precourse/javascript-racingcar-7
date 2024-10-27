const MissionUtils = require("@woowacourse/mission-utils");

class App {
  run() {
    MissionUtils.Console.readLine(
      "자동차 이름을 입력하세요 (쉼표로 구분): ",
      (input) => {
        MissionUtils.Console.readLine(
          "게임을 몇 번 진행하시겠습니까? ",
          (count) => {
            try {
              this.gameStart(input, parseInt(count));
            } catch (error) {
              MissionUtils.Console.print("[ERROR] " + error.message);
              throw new Error("[ERROR] " + error.message); // 예외를 명시적으로 throw하여 테스트 통과
            } finally {
              MissionUtils.Console.close();
            }
          }
        );
      }
    );
  }

  gameStart(input, count) {
    this.CarNameException(input);
    let carName = input.split(",");
    let resultObj = {};
    carName.forEach((v) => {
      resultObj[v] = 0;
    });
    this.gameFlow(count, carName, resultObj);
    this.Ranking(resultObj);
  }

  RandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  gameFlow(count, carName, resultObj) {
    for (let i = 0; i < count; i++) {
      MissionUtils.Console.print(`${i + 1} 차시:`);
      carName.forEach((name) => {
        if (this.RandomNumber() >= 4) {
          resultObj[name] += 1;
        }
      });
      Object.entries(resultObj).forEach(([name, value]) => {
        MissionUtils.Console.print(`${name} : ${"-".repeat(value)}`);
      });
    }
  }

  Ranking(resultObj) {
    const rankingArray = Object.entries(resultObj).sort(
      ([, a], [, b]) => b - a
    );
    const highestScore = rankingArray[0][1];
    const winners = rankingArray
      .filter(([, score]) => score === highestScore)
      .map(([name]) => name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  CarNameException(input) {
    const carName = input.split(",");
    const uniqueNames = new Set(carName);

    if (carName.length > 5 || uniqueNames.size !== carName.length) {
      throw new Error("입력값에 문제가 있습니다");
    }

    carName.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error("입력값에 문제가 있습니다");
      }
    });
    return true;
  }
}

module.exports = App;
