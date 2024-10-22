import { Random, Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    const inputtedNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세여;(이름은 쉼표(,) 기준으로 구분)\n');
    const names = validateNames(inputtedNames);
  }
}

function validateNames(input) {
  const names = splitNames(input);

  let i = 0;

  while (i < names.length) {
    if (names[i].length > 5) {
      throw new Error('[ERROR] 이름이 5자 이상입니다');
    }
    i++;
  }

  return names;
}

function splitNames(input) {
  const names = input.split(',');
  return names;
}

export default App;
