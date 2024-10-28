import Simulator from '../src/Simulator'; // Simulator 클래스가 정의된 경로로 수정하세요.
import { MESSAGE } from '../src/constant';
import { printOutput } from '../src/util/io';
import pickRandomNumberInRange from '../src/util/pickRandomNumberInRange';

jest.mock('../src/util/io');
jest.mock('../src/util/pickRandomNumberInRange');

describe('Simulator simulate test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('#canMoveForward가 true일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValue(5);
    console.log(simulator.state);

    simulator.simulate(1);
    expect(printOutput).toHaveBeenCalledWith(MESSAGE.EXECUTE_OUTPUT);
    expect(printOutput).toHaveBeenCalledWith('Car1 : -');
    expect(printOutput).toHaveBeenCalledWith('');
  });

  test('#canMoveForward가 false일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValue(3);

    simulator.simulate(1);

    expect(printOutput).toHaveBeenCalledWith(MESSAGE.EXECUTE_OUTPUT);
    expect(printOutput).toHaveBeenCalledWith('Car1 : ');
    expect(printOutput).toHaveBeenCalledWith('');
  });

  test('자동차가 여러 개일 때 상태 업데이트 확인하기', () => {
    const names = ['Car1', 'Car2'];
    const simulator = new Simulator(names);
    pickRandomNumberInRange.mockReturnValueOnce(5).mockReturnValueOnce(3);

    simulator.simulate(1);

    expect(printOutput).toHaveBeenCalledWith(MESSAGE.EXECUTE_OUTPUT);
    expect(printOutput).toHaveBeenCalledWith('Car1 : -');
    expect(printOutput).toHaveBeenCalledWith('Car2 : ');
    expect(printOutput).toHaveBeenCalledWith('');
  });
});

describe('Simulator printWinner test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('우승자가 한 명일 경우', () => {
    const names = ['Car1', 'Car2', 'Car3'];
    const simulator = new Simulator(names);

    pickRandomNumberInRange.mockReturnValueOnce(5);
    pickRandomNumberInRange.mockReturnValue(3);

    simulator.simulate(1);
    simulator.printWinner();

    expect(printOutput).toHaveBeenCalledWith(`${MESSAGE.FINAL_OUTPUT} : Car1`);
  });

  test('우승자가 여러 명일 경우', () => {
    const names = ['Car1', 'Car2', 'Car3'];
    const simulator = new Simulator(names);

    pickRandomNumberInRange.mockReturnValueOnce(5);
    pickRandomNumberInRange.mockReturnValueOnce(5);
    pickRandomNumberInRange.mockReturnValue(3);

    simulator.simulate(1);
    simulator.printWinner();

    expect(printOutput).toHaveBeenCalledWith(
      `${MESSAGE.FINAL_OUTPUT} : Car1, Car2`,
    );
  });

  test('아무도 전진하지 않았을 경우', () => {
    const names = ['Car1', 'Car2', 'Car3'];
    const simulator = new Simulator(names);

    pickRandomNumberInRange.mockReturnValue(1);

    simulator.simulate();
    simulator.printWinner();

    expect(printOutput).toHaveBeenCalledWith(
      `${MESSAGE.FINAL_OUTPUT} : Car1, Car2, Car3`,
    );
  });
});
