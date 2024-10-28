const MissionUtils = require("@woowacourse/mission-utils");

class App {
  run() {
    MissionUtils.Console.readLine(
      "자동차 이름을 입력하세요 (쉼표로 구분): ",
      (input) => {
        MissionUtils.Console.readLine(
          "게임을 몇 번 진행하시겠습니까? ",
          (count) => {
            const parsedCount = parseInt(count);
            if (isNaN(parsedCount) || parsedCount < 1) {
              MissionUtils.Console.print(
                "[ERROR] 이동 횟수는 1 이상의 정수여야 합니다."
              );
              throw new Error("[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.");
            }
            this.gameStart(input, parsedCount);
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
    const carName = input.split(",").map((name) => name.trim());
    const uniqueNames = new Set(carName);

    if (carName.length > 5) {
      throw new Error("[ERROR] 자동차는 최대 5대까지 입력 가능합니다.");
    }

    if (uniqueNames.size !== carName.length) {
      throw new Error("[ERROR] 자동차 이름에 중복이 있습니다.");
    }

    carName.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error(
          "[ERROR] 각 자동차 이름은 1자 이상 5자 이하이어야 합니다."
        );
      }
    });
    return true;
  }
}

module.exports = App;
