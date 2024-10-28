import { MissionUtils } from '@woowacourse/mission-utils';
import RaceGameController from '../../src/controller/RaceGameController.js';
import RaceGameService from '../../src/service/RaceGameService.js';
import io from '../../src/utils/io.js';
import RaceGameView from '../../src/view/RaceGameView.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('RaceGameController 테스트', () => {
  let controller;
  beforeEach(() => {
    controller =  new RaceGameController(new RaceGameView(io), new RaceGameService());
  });
  test('carNames가 null이 들어온 경우 에러를 던져야한다.', async () => {
    mockQuestions([null]);
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });
  test('carNames가 중복된 경우 에러를 던져야한다.', async () => {
    mockQuestions(['chani,chani']);
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });

  test('iteration이 숫자가 아닌경우 에러를 던져야한다', async () => {
    mockQuestions(['pobi,chani', 'hi']);
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });

  test('iteration이 정수가 아닌경우 에러를 던져야한다', async () => {
    mockQuestions(['pobi,chani', '11.2']);
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });

  test('iteration이 null이 들어온 경우 에러를 던져야한다.', async () => {
    mockQuestions(['pobi', null]);
    await expect(controller.run()).rejects.toThrow('[ERROR]');
  });
});
