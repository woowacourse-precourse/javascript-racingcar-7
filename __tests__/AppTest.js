import App from '../src/App.js';
import { getNameInput, getRoundCountInput } from '../src/utils/inputHandler.js';
import { printWinners } from '../src/utils/printWinners.js';
import { createCars } from '../src/utils/createCars.js';
import Validator from '../src/validators/Validator.js';
import Race from '../src/models/Race.js';

jest.mock('../src/utils/inputHandler.js');
jest.mock('../src/validators/Validator.js');
jest.mock('../src/utils/createCars.js');
jest.mock('../src/utils/printWinners.js');
jest.mock('../src/models/Race.js');

describe('App 클래스 흐름 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('App.run 메서드가 올바른 흐름으로 실행되는지 확인', async () => {
    const app = new App();
    await app.run();

    getNameInput.mockResolvedValue('pobi,woni');
    getRoundCountInput.mockResolvedValue(3);
    Race.mockImplementation(() => ({
      start: jest.fn(),
    }));

    expect(getNameInput).toHaveBeenCalledTimes(1);
    expect(Validator.checkNames).toHaveBeenCalledTimes(1);
    expect(createCars).toHaveBeenCalledTimes(1);
    expect(getRoundCountInput).toHaveBeenCalledTimes(1);
    expect(Validator.checkRoundCount).toHaveBeenCalledTimes(1);
    expect(Race).toHaveBeenCalledTimes(1);
    expect(Race.mock.instances[0].start).toHaveBeenCalledTimes(1);
    expect(printWinners).toHaveBeenCalledTimes(1);
  });
});
