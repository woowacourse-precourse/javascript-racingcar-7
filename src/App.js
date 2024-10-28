import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const car_name = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const car_list = this.separateCarList(car_name);
    // 자동차 이름이 5자 이상이면 에러 처리
  }

  separateCarList(carName) {
    const car_list = carName.split(",");
    return car_list;
  }
}

export default App;
