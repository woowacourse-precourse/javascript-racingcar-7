import Simulator from '../src/Simulator'; // Simulator 클래스가 정의된 경로로 수정하세요.
import { MESSAGE } from '../src/constant';
import { printOutput } from '../src/util/io';
import pickRandomNumberInRange from '../src/util/pickRandomNumberInRange';

jest.mock('../src/util/io');
jest.mock('../src/util/pickRandomNumberInRange');

describe('Simulator class', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('name, count 초기화 확인하기', () => {
    const names = ['Car1', 'Car2', 'Car3'];
    const simulator = new Simulator(names);

    expect(printOutput).toHaveBeenCalledWith(MESSAGE.EXECUTE_OUTPUT);
    expect(simulator.state).toEqual([{ Car1: 0 }, { Car2: 0 }, { Car3: 0 }]);
  });

  test('#canMoveForward가 true일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValue(5);

    simulator.simulate();
    console.log(simulator.state);
    expect(simulator.state).toEqual([{ Car1: 1 }]);
    expect(printOutput).toHaveBeenCalledWith('Car1 : -\n');
  });

  test('#canMoveForward가 false일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValue(3);

    simulator.simulate();

    expect(simulator.state).toEqual([{ Car1: 0 }]);
    expect(printOutput).toHaveBeenCalledWith('Car1 : \n');
  });

  test('자동차가 여러 개일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1', 'Car2'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValueOnce(5).mockReturnValueOnce(3);

    simulator.simulate();

    expect(simulator.state).toEqual([{ Car1: 1 }, { Car2: 0 }]);
    expect(printOutput).toHaveBeenCalledWith('Car1 : -');
    expect(printOutput).toHaveBeenCalledWith('Car2 : ');
    expect(printOutput).toHaveBeenCalledWith('');
  });
});
