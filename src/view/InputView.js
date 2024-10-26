import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getCarName() {
    const carArr = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carArr.split(",");
  }
}

export default InputView;
