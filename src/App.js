import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 쉼표로 구분하여 입력해주세요. \n"
      );
      const count = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );

      const { resultList, parsed } = this.racing(input, count);

      // run 메서드의 indent depth를 낮추기 위해 forEach문을 map 함수 사용으로 변경
      MissionUtils.Console.print(
        resultList
          .map((item) => {
            return Object.entries(item)
              .map(([key, value]) => `${key} : ${value}`)
              .join("\n");
          })
          .join("\n\n")
      );

      MissionUtils.Console.print("");
      MissionUtils.Console.print(parsed);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  racing(input, count) {
    const arr = input.split(",").map((item) => item.trim());

    //scoreArray는 각 자동차의 득점을 저장할 배열이다.
    const scoreArray = arr.map(() => 0);

    //중간 결과를 저장
    const raceResult = [];

    console.log("");
    console.log("실행결과");

    //경주가 한 번씩 실행되는 턴
    for (let i = 0; i < count; i++) {
      const currentRace = this.updateCurrentRace(arr, scoreArray);
      raceResult.push(currentRace);
    }

    const parsed = this.determineWinner(arr, scoreArray);
    return { resultList: raceResult, parsed };
  }

  //현재 경기를 업데이트하는 메서드 분리
  updateCurrentRace(arr, scoreArray) {
    const currentRace = {};

    arr.forEach((car, index) => {
      const num = MissionUtils.Random.pickNumberInRange(0, 9);
      if (num >= 4) {
        scoreArray[index] += 1;
      }
      currentRace[car] = "-".repeat(scoreArray[index]);
    });

    return currentRace;
  }

  getRaceResult(arr, scoreArray) {
    return arr.map((car, index) => ({
      car,
      score: "-".repeat(scoreArray[index]),
    }));
  }

  //우승자 판별 로직 메서드 분리
  determineWinner(arr, scoreArray) {
    //scoreArr에서 최댓값을 찾고 그와 index가 같은 우승자를 arr에서 가져오자
    const max = Math.max(...scoreArray);
    console.log("");
    // //최종 우승자를 담을 배열 winners
    const winners = [];

    scoreArray.forEach((value, index) => {
      //최댓값을 가진 우승자들을 arr에서 찾아내서 winners로 push한다.
      if (value === max) {
        winners.push(arr[index]);
      }
    });
    // //join은 배열 요소를 쉼표와 띄어쓰기로 연결해 하나의 문자열로 만들어준다.
    const parsed = "최종 우승자 : " + winners.join(", ");

    return parsed;
  }
}

export default App;
