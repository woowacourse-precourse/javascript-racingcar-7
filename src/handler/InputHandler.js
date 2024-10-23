import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    async carNameInput() {
        const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.processInput(input);
        return carNames;
    }
    processInput(input) {
        const carNames = input.split(',').map(name => name.trim());
        return carNames;
    }
}

export default InputHandler;