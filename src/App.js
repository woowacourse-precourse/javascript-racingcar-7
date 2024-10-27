import { Console } from '@woowacourse/mission-utils';

const validateCarName = (input) => {
  const regex = /^[A-Za-z0-9]+$/;

  if (input.length > 5) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
  }

  if (!regex.test(input)) {
    throw new Error('[ERROR] 자동차 이름에는 영어, 숫자만 사용할 수 있어요.');
  }
};
const determineCarName = (input) => {
  const names = input.split(',');
  names.forEach((name) => validateCarName(name));
  if (new Set(names).size !== names.length) {
    throw new Error('[ERROR] 자동차 이름은 중복되지 않게 입력해주세요.');
  }
};

class App {
  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    determineCarName(input);
    const raceNumber =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
