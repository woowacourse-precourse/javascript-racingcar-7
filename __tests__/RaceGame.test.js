import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const failCase = [
  {
    name: '사용자가 차 이름의 값을 undefined로 입력했을 때',
    inputs: [undefined],
    error: ['[ERROR] 자동차의 이름을 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름의 값을 null로 입력했을 때',
    inputs: [null],
    error: ['[ERROR] 자동차의 이름을 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름의 값을 아무것도 입력을 안했을 때',
    inputs: [''],
    error: ['[ERROR] 자동차의 이름을 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름을 입력한 값 중 쉼표 기준으로 구분했을 때 빈칸이 있는 경우',
    inputs: ['pobi,jin,'],
    error: ['[ERROR] 각 자동차의 이름들은 공백이 안되게 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름을 입력한 값 중 쉼표 기준으로 구분했을 때 이름이 5자리 초과한 경우',
    inputs: ['pobipobi'],
    error: ['[ERROR] 각 자동차의 이름은 5자리 이하로 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름을 입력한 값 중 쉼표 기준으로 구분했을 때 이름의 공백이 포함된 경우',
    inputs: ['pobi, pobi2'],
    error: ['[ERROR] 각 자동차의 이름은 공백이 포함 안되게 입력해주세요!'],
  },
  {
    name: '사용자가 차 이름을 입력한 값 중 쉼표 기준으로 구분했을 때 중복되는 이름이 있는 경우',
    inputs: ['pobi,pobi'],
    error: [
      '[ERROR] 각 자동차의 이름은 헷갈리지 않게 중복이 안되게 입력해주세요!',
    ],
  },
  {
    name: '사용자가 반복 횟수의 값을 undefined로 입력했을 때',
    inputs: ['pobi', undefined],
    error: ['[ERROR] 시도 횟수를 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 null로 입력했을 때',
    inputs: ['pobi', null],
    error: ['[ERROR] 시도 횟수를 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 null로 입력했을 때',
    inputs: ['pobi', null],
    error: ['[ERROR] 시도 횟수를 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 숫자가 아닌 것으로 입력했을 때',
    inputs: ['pobi', 'ten'],
    error: ['[ERROR] 시도 횟수는 숫자만 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 0으로 입력했을 때',
    inputs: ['pobi', '0'],
    error: ['[ERROR] 시도 횟수는 1 이상으로 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 음수로 입력했을 때',
    inputs: ['pobi', '-3'],
    error: ['[ERROR] 시도 횟수는 1 이상으로 입력해주세요!'],
  },
  {
    name: '사용자가 반복 횟수의 값을 소수점으로 입력했을 때',
    inputs: ['pobi', '1.5'],
    error: ['[ERROR] 시도 횟수는 소수점이 아닌 양수로만 입력해주세요!'],
  },
];

describe('레이싱 게임 예외처리', () => {
  failCase.map(({ name, inputs, error }) => {
    it(name, async () => {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow(`${error}`);
    });
    return { name, inputs, error };
  });
});
