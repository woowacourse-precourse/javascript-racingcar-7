import { printRaceStatus } from '../src/features/Race/display.js';
import moveForward from '../src/features/Race/moveForward.js';
import runRace from '../src/features/Race/runRace.js';

jest.mock('../src/features/Race/moveForward');
jest.mock('../src/features/Race/display', () => ({
  printRaceStatus: jest.fn(),
}));

describe('mock', () => {
  it('should mock moveForward correctly', () => {
    expect(jest.isMockFunction(moveForward)).toBe(true);
  });

  it('should mock printRaceStatus correctly', () => {
    expect(jest.isMockFunction(printRaceStatus)).toBe(true);
  });
});

describe('/feature/Race/runRace', () => {
  // given
  const cars = ['a', 'b', 'c'];
  const count = 1;

  beforeEach(() => {
    moveForward
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should correctly update car positions based on moveForward results', () => {
    // when
    const finalPositions = runRace(cars, count);

    // then
    expect(finalPositions).toEqual([1, 0, 1]);
  });

  it('should call printRaceStatus with correct parameters', () => {
    // when
    runRace(cars, count);

    // then
    expect(printRaceStatus).toHaveBeenCalledWith(cars, [1, 0, 1]);
    expect(printRaceStatus).toHaveBeenCalledTimes(1);
  });

  it('should use moveForward to determine car movements', () => {
    // when
    runRace(cars, count);

    // then
    expect(moveForward).toHaveBeenCalledTimes(cars.length * count);
  });
});
