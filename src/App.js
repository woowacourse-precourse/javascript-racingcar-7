import { Console } from '@woowacourse/mission-utils';

const RIGHT_EXAMPLE_OF_CAR_NAME_INPUT =
  "ex) 'pobi,jun' 같은 형식으로 입력해주세요.";

const throwNewError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};

const validateCarNames = (carNames) => {
  const dividerCount = carNames.split('').filter((char) => char === ',').length;
  const carList = carNames.split(',').filter(Boolean);
  throwNewError(
    carNames.trim() === '',
    `[ERROR]빈 문자열은 입력이 불가능합니다. ${RIGHT_EXAMPLE_OF_CAR_NAME_INPUT}`,
  );
  throwNewError(
    carNames.includes(' '),
    `[ERROR]공백이 포함된 문자열은 입력이 불가능합니다. ${RIGHT_EXAMPLE_OF_CAR_NAME_INPUT}`,
  );

  throwNewError(
    carList.length === 0,
    `[ERROR]자동차 이름을 1개 이상 입력해주세요. ${RIGHT_EXAMPLE_OF_CAR_NAME_INPUT}`,
  );

  throwNewError(
    dividerCount !== carList.length - 1,
    `[ERROR]구분자는 자동차 이름 사이에 1개씩만 쓰여야 합니다. ${RIGHT_EXAMPLE_OF_CAR_NAME_INPUT}`,
  );
  throwNewError(
    carList.some((carName) => carName.length > 5),
    `[ERROR]자동차 이름은 5자 이하만 가능합니다. ${RIGHT_EXAMPLE_OF_CAR_NAME_INPUT}`,
  );
};

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    validateCarNames(carNames);

    const gameCount =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
