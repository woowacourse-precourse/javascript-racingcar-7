import CarModel from '../../src/model/carModel';
import RacingModel from '../../src/model/racingModel';

jest.mock('../../src/model/carModel');

describe('RacingModel', () => {
  beforeEach(() => {
    CarModel.mockClear();
    CarModel.mockImplementation((name) => ({
      getName: jest.fn(() => name),
      move: jest.fn(),
      getPosition: jest.fn(() => 0),
    }));
  });

  test('초기화 시 자동차 이름 배열을 받아 CarModel 인스턴스를 생성한다', () => {
    const carNames = ['Car1', 'Car2', 'Car3'];
    const racingModel = new RacingModel(carNames, 5);
    expect(racingModel.getCars()).toHaveLength(3);
    expect(racingModel.getCars().map((car) => car.getName())).toEqual(carNames);
  });

  test('race() 호출 시 모든 CarModel 인스턴스의 move() 메서드가 호출된다', () => {
    const carNames = ['Car1', 'Car2'];
    const racingModel = new RacingModel(carNames, 5);

    racingModel.race();

    racingModel.getCars().forEach((car) => {
      expect(car.move).toHaveBeenCalled();
    });
  });

  test('getWinners() 호출 시 가장 멀리 이동한 자동차의 이름을 반환한다', () => {
    const carNames = ['Car1', 'Car2', 'Car3'];
    const racingModel = new RacingModel(carNames, 5);

    racingModel.getCars()[0].getPosition.mockReturnValue(2);
    racingModel.getCars()[1].getPosition.mockReturnValue(4);
    racingModel.getCars()[2].getPosition.mockReturnValue(4);

    const winners = racingModel.getWinners();
    expect(winners).toEqual(['Car2', 'Car3']);
  });

  test('getCars() 호출 시 자동차 배열을 반환한다', () => {
    const carNames = ['Car1', 'Car2', 'Car3'];
    const racingModel = new RacingModel(carNames, 5);
    expect(racingModel.getCars()).toHaveLength(3);
  });
});
