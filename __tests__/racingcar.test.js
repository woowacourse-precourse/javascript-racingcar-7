import Racingcar from '../src/racingcar.js';

describe('Racingcar 기능 테스트', () => {
  let racingcar;

  beforeEach(() => {
    racingcar = new Racingcar();
  });

  test('자동차 이름 입력 검증: 빈 문자열', () => {
    expect(() => racingcar.verifyCarNames('')).toThrow(
      '[ERROR] 자동차 이름이 없습니다.'
    );
  });

  test('자동차 이름 입력 검증: 이름 형식이 올바른지 확인', () => {
    expect(() => racingcar.verifyCarNames('car1,car2,car3')).not.toThrow();
    expect(() => racingcar.verifyCarNames('car1, ,car3')).toThrow(
      '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.'
    );
    expect(() => racingcar.verifyCarNames('car1,supercar')).toThrow(
      '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.'
    );
  });

  test('자동차 이름 구분자 검증', () => {
    expect(() =>
      racingcar.checkCarNameSeparation('car1,car2,car3')
    ).not.toThrow();
    expect(() => racingcar.checkCarNameSeparation('car1.car2,car3')).toThrow(
      '[ERROR] 이름 구분은 쉼표로만 가능합니다.'
    );
  });

  test('시도 횟수 입력 검증: 숫자가 양의 정수인지 확인', () => {
    expect(() => racingcar.verifyCounts('5')).not.toThrow();
    expect(() => racingcar.verifyCounts('0')).toThrow(
      '[ERROR] 시도 횟수는 양의 정수만 가능합니다.'
    );
    expect(() => racingcar.verifyCounts('-1')).toThrow(
      '[ERROR] 시도 횟수는 양의 정수만 가능합니다.'
    );
    expect(() => racingcar.verifyCounts('abc')).toThrow(
      '[ERROR] 시도 횟수는 양의 정수만 가능합니다.'
    );
  });

  test('자동차 위치 초기화', () => {
    racingcar.setCarsAndCounts('car1,car2', '3');
    expect(racingcar.cars).toEqual([
      { name: 'car1', position: 0 },
      { name: 'car2', position: 0 },
    ]);
    expect(racingcar.counts).toBe(3);
  });

  test('자동차 이동 기능: 랜덤 값에 따라 자동차가 전진하는지 확인', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    racingcar.setCarsAndCounts('car1', '1');
    racingcar.moveCars();
    expect(racingcar.cars[0].position).toBe(1);

    jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
    racingcar.moveCars();
    expect(racingcar.cars[0].position).toBe(1);

    global.Math.random.mockRestore();
  });

  test('우승자 판별 기능', () => {
    racingcar.cars = [
      { name: 'car1', position: 1 },
      { name: 'car2', position: 2 },
      { name: 'car3', position: 2 },
    ];
    const winners = racingcar.findWinners();
    expect(winners).toEqual(['car2', 'car3']);
  });
});
