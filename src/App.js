import { Console } from "@woowacourse/mission-utils";

class App {
    async getCarNameList() {
        const carName = await Console.readLineAsync("경주할 자동차 이름을 쉼표로 구분하여 입력하세요 : ");
        const carNameList = carName.split(",");

        if (carNameList.some(name => name.length > 5)) {
            throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
        }
        return carNameList;
    }

    async run() {
        const result = await this.getCarNameList();
        Console.print(result);
    }
}

export default App;
