import {Console} from '@woowacourse/mission-utils'

class App {
    async run() {

    }

    async carNameInput() {
        const inputArray = await Console.readLineAsync("경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)");
        const carArray = Array.split(inputArray, ',');

        carArray.forEach(carName => {
            if (carName.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5글자를 초과할 수 없습니다.");
            }
        });
        return carArray;
    }
}

export default App;
