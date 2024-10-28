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
    console.log("");
    console.log("실행결과");
    for (let i = 0; i < count; i++) {
      console.log("");
      // console.log(i + 1 + "번째 경기");
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
    //우승자 판별 로직 추가
    //scoreArr에서 최댓값을 찾고 그와 index가 같은 우승자를 arr에서 가져오자
    const max = Math.max(...scoreArray);

    console.log("");
    // console.log("최대 득점수 : ", max);

    //최종 우승자를 담을 배열 winners
    const winners = [];

    scoreArray.forEach((value, index) => {
      //최댓값을 가진 우승자들을 arr에서 찾아내서 winners로 push한다.
      if (value === max) {
        winners.push(arr[index]);
      }
    });
    //join은 배열 요소를 쉼표와 띄어쓰기로 연결해 하나의 문자열로 만들어준다.
    console.log("최종 우승자 : " + winners.join(", "));
  }
}

export default App;
