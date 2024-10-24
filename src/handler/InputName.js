import { ReadLine } from "./ReadLine.js";

const INPUT_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';

export class InputName {
  async read() {
    return await new ReadLine().readInput(INPUT_NAME_MESSAGE);
  }
}
