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
      // MissionUtils.Console.print(` 실행 결과 : ${result} `);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      throw error;
    }
  }

  racing(input, count) {
    const arr = input.split(",").map((item) => item.trim());

    //score라는 이름의 각 차량의 득점을 저장할 수 있는 배열을 만들자
    // arr = [치킨, 닭, 다리]
    // scoreArr = [1,2,3]
    // 치킨이 1회 승리, 닭이 2회 승리, 다리가 3회 승리했다는 것

    //scoreArray는 arr과 길이가 같으면서 모든 값을 0으로 갖는 배열이다.
    const scoreArray = arr.map(() => 0);

    //depth가 깊어진다. 후에 메서드를 분리해줘야 한다.
    for (let i = 0; i < count; i++) {
      console.log("");
      console.log(i + 1 + "번째 경기");
      let score = 0;
      for (let j = 0; j < arr.length; j++) {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);

        if (num >= 4) {
          scoreArray[j] = scoreArray[j] + 1;

          process.stdout.write(arr[j] + " : ");
          for (let k = 0; k < scoreArray[j]; k++) {
            process.stdout.write("-");
          }
          console.log("");

          // console.log(arr[j] + " : " + scoreArray[j]);
        } else {
          // console.log(arr[j] + " : " + scoreArray[j]);
          process.stdout.write(arr[j] + " : ");
          for (let k = 0; k < scoreArray[j]; k++) {
            process.stdout.write("-");
          }
          console.log("");
        }
      }
    }
  }
}

export default App;
