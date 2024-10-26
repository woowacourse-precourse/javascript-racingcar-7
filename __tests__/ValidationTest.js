import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Racingcar from '../src/model/racingcar.js';
import { ERROR_MESSAGE } from '../src/constants/message.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력 유효성 검사', () => {
  test('정상 입력 시 Racingcar 배열 반환', async () => {
    const input = ['haku,haul'];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingCarName();

    expect(JSON.stringify(result)).toEqual(
      JSON.stringify([new Racingcar('haku'), new Racingcar('haul')])
    );
  });

  test('자동차 입력이 하나일 시 오류 발생', async () => {
    const input = ['haku'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidSeparator
    );
  });

  test('자동차 이름 공백 입력 시 오류 발생', async () => {
    const input = [];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.blank
    );
  });

  test('자동차 이름 사이 공백 입력 시 오류 발생', async () => {
    const input = ['ha ku,haku'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.blank
    );
  });

  test('자동차 이름 증복 시 오류 발생', async () => {
    const input = ['haku,haku'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidOverlap
    );
  });

  test('자동차 이름 5글자 초과 시 오류 발생', async () => {
    const input = ['hakuku,haku'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidLength
    );
  });

  test('자동차 이름 구분자 , 아닐 시 오류 발생', async () => {
    const input = ['haku.haul'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidSeparator
    );
  });
});

describe('자동차 경주 시도 횟수 입력 유효성 검사', () => {
  test('시도 횟수 정상 입력 시 입력된 값 반환', async () => {
    const input = ['5'];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingAttmeptCount();
    expect(result).toEqual('5');
  });

  test('시도 횟수 숫자가 아닐 시 오류 발생', async () => {
    const input = ['ㅁ'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingAttmeptCount()).rejects.toThrow(
      ERROR_MESSAGE.attemptNumber.invalidType
    );
  });

  test('시도 횟수 소수일 시 오류 발생', async () => {
    const input = ['3.5'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingAttmeptCount()).rejects.toThrow(
      ERROR_MESSAGE.attemptNumber.invalidInteger
    );
  });

  test('시도 횟수 공백일 시 오류 발생', async () => {
    const input = [''];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingAttmeptCount()).rejects.toThrow(
      ERROR_MESSAGE.blank
    );
  });

  test('시도 횟수 음수일 시 오류 발생', async () => {
    const input = ['-1'];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingAttmeptCount()).rejects.toThrow(
      ERROR_MESSAGE.attemptNumber.invalidInteger
    );
  });
});
