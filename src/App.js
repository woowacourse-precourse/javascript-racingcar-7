import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const nameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const numberInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const nameList = this.splitNameInput(nameInput);
    this.validateNameList(nameList);
    const number = this.validateNumber(numberInput);
    this.generateGameProgress(nameList, number);
  }

  splitNameInput(nameInput) {
    return nameInput.split(",");
  }

  validateNameList(nameList) {
    if (nameList.length < 2) {
      throw new Error("자동차 이름은 쉼표로 구분하여 2개 이상 입력해 주세요.");
    }

    const hasEmptyName = nameList.some((name) => name.trim() === "");
    if (hasEmptyName) {
      throw new Error("자동차 이름 사이에 공백이 포함되어 있습니다.");
    }

    const tooLongName = nameList.find((name) => name.length > 5);
    if (tooLongName) {
      throw new Error(`"${tooLongName}"은(는) 5자를 초과합니다.`);
    }
  }

  validateNumber(numberInput) {
    const number = Number(numberInput);
    if (!number || number <= 0) {
      throw new Error("시도할 횟수는 1 이상의 양수여야 합니다.");
    }
    return number;
  }

  generateGameProgress(nameList, targetNumber) {
    const results = Array.from({ length: nameList.length }, () => "");
    let isGameFinished = false;

    while (!isGameFinished) {
      this.runOneRound(nameList, results);

      this.printRoundResults(nameList, results);

      isGameFinished = results.some((result) => result.length >= targetNumber);
    }
  }

  runOneRound(nameList, results) {
    nameList.forEach((_, index) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        results[index] += "-";
      }
    });
  }

  printRoundResults(nameList, results) {
    nameList.forEach((name, index) => {
      MissionUtils.Console.print(`${name} : ${results[index]}`);
    });
    MissionUtils.Console.print("\n");
  }
}

export default App;
