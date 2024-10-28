import Racing from '../../src/domain/Racing.js';

describe('Racing 테스트', () => {
  describe('create 메서드 테스트', () => {
    test('정상적인 Racing 인스턴스 생성 확인', () => {
      // given
      const mockMoveCar = jest.fn().mockReturnValue(1);
      const mockCar = {
        moveCar: mockMoveCar,
        getCarName: () => 'car1',
        getMoveCount: () => 1,
      };
      const mockRacingCars = {
        getCars: () => [mockCar],
        moveCars: jest.fn(),
        getCarsState: () => [{ name: 'car1', moveCount: 1 }],
      };
      const mockRound = {
        getTargetRound: () => 3,
        nextRound: jest.fn(),
        isFinished: () => false,
      };

      // when
      const racing = Racing.create(mockRacingCars, mockRound);

      // then
      expect(racing).toBeInstanceOf(Racing);
    });

    test('중복된 자동차 이름으로 생성시 예외 발생 확인', () => {
      // given
      const mockCars = [
        { getCarName: () => 'car1' },
        { getCarName: () => 'car1' },
      ];
      const mockRacingCars = {
        getCars: () => mockCars,
      };
      const mockRound = {
        getTargetRound: () => 3,
      };

      // when & then
      expect(() => Racing.create(mockRacingCars, mockRound))
        .toThrow('[ERROR]');
    });
  });

  describe('게임 진행 테스트', () => {
    test('라운드 진행 후 상태 반환 확인', () => {
      // given
      const mockMoveCar = jest.fn().mockReturnValue(1);
      const mockCar = {
        moveCar: mockMoveCar,
        getCarName: () => 'car1',
        getMoveCount: () => 1,
      };
      const mockRacingCars = {
        getCars: () => [mockCar],
        moveCars: jest.fn(),
        getCarsState: () => [{ name: 'car1', moveCount: 1 }],
      };
      const mockRound = {
        getTargetRound: () => 3,
        nextRound: jest.fn(),
        isFinished: () => false,
      };
      const racing = new Racing(mockRacingCars, mockRound);

      // when
      const result = racing.startNewRound();

      // then
      expect(mockRacingCars.moveCars).toHaveBeenCalled();
      expect(mockRound.nextRound).toHaveBeenCalled();
      expect(result).toEqual([{ name: 'car1', moveCount: 1 }]);
    });

    test('우승자 결정 확인', () => {
      // given
      const mockCars = [
        { getCarName: () => 'car1', getMoveCount: () => 3 },
        { getCarName: () => 'car2', getMoveCount: () => 3 },
        { getCarName: () => 'car3', getMoveCount: () => 2 },
      ];
      const mockRacingCars = {
        getCars: () => mockCars,
      };
      const mockRound = {
        getTargetRound: () => 3,
        isFinished: () => true,
      };
      const racing = new Racing(mockRacingCars, mockRound);

      // when
      const winners = racing.getWinners();

      // then
      expect(winners).toEqual(['car1', 'car2']);
    });

    test('우승자가 없을 경우 확인', () => {
      // given
      const mockCars = [
        { getCarName: () => 'car1', getMoveCount: () => 0 },
        { getCarName: () => 'car2', getMoveCount: () => 0 },
        { getCarName: () => 'car3', getMoveCount: () => 0 },
      ];
      const mockRacingCars = {
        getCars: () => mockCars,
      };
      const mockRound = {
        getTargetRound: () => 3,
        isFinished: () => true,
      };
      const racing = new Racing(mockRacingCars, mockRound);

      // when
      const winners = racing.getWinners();

      // then
      expect(winners).toEqual([]);
    });
  });
});
