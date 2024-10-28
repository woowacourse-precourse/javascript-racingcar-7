import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 쉼표로 구분하여 입력해주세요. \n"
    );
    const count = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    try {
      const result = this.racing(input, count);

      //반복문이 여기 들어가야하나...?!
      //각 자동차에 해당하는 배열을 만들고 거기에 승리한 횟수만큼 넣어줘야 하나?
      // for (let i = 0; i < count; i++) {
      // }

      // MissionUtils.Console.print(` 실행 결과 : ${result} `);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      throw error;
    }
  }

  racing(input, count) {
    const arr = input.split(",").map((item) => item.trim());
    for (let i = 0; i < count; i++) {
      console.log("");
      console.log(i + 1 + "번째 경기");
      for (let j = 0; j < arr.length; j++) {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        console.log(arr[j] + num);
      }
    }
  }
}

export default App;
