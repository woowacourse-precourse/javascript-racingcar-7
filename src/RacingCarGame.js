import { Console } from "@woowacourse/mission-utils";

class RacingCarGame {
  static CAR_NAME_SEPARATOR = ",";

  static MAX_CAR_NAME_LENGTH = 5;

  static MIN_CAR_NAME_LENGTH = 1;

  validateCarName(carName) {
    return (
      carName.length >= RacingCarGame.MIN_CAR_NAME_LENGTH &&
      carName.length <= RacingCarGame.MAX_CAR_NAME_LENGTH
    );
  }

  async start() {
    const carNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${RacingCarGame.CAR_NAME_SEPARATOR}) 기준으로 구분)\n`
    );
    const carNameList = carNames.split(RacingCarGame.CAR_NAME_SEPARATOR);

    carNameList.forEach((carName) => {
      if (!this.validateCarName(carName)) {
        throw new Error("[ERROR] 유효하지 않은 자동차 이름이 입력되었습니다.");
      }
    });
  }
}

export default RacingCarGame;
