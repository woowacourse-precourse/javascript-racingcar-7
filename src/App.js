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

}

export default App;
