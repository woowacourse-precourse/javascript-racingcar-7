import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
    async inputCars() {
        return await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");
    }

    async inputTry() {
        return await MissionUtils.Console.readLineAsync("시도할 횟수\n");
    }
}

export default Input;