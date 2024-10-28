import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 문자열 길이 검증을 위한 함수
    function isNameTooLong(name) {
      return name.length > 5;
    }
    function validateCarArrayLength(arr) {
      arr.forEach((name) => {
        if (isNameTooLong(name)) {
          throw Error(
            "[ERROR] 자동차 이름은 최대 5글자까지 입력할 수 있습니다. 다시 입력해주세요."
          );
        }
      });
    }

    const carStr = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carArr = carStr.split(",");
    validateCarArrayLength(carArr);
    const carObj = carArr.reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});
    let tryCnt = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    tryCnt = parseInt(tryCnt) + 1;

    Console.print("실행 결과");
}

export default App;
