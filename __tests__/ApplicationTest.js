import App from '../src/App.js';
import Car from '../src/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Car 클래스', () => {
  test('Car 객체 생성 이름과 위치 초기화', () => {
    const car = new Car('dawon');

    expect(car.name).toBe('dawon');
    expect(car.position).toBe(0);
  });

  test('자동차 전진', () => {
    const car = new Car('dawon');
    mockRandoms([4]);

    car.moveOrStop();

    expect(car.position).toBe(1);
  });

  test('자동차 정지', () => {
    const car = new Car('dawon');
    mockRandoms([3]);

    car.moveOrStop();
    
    expect(car.position).toBe(0);
  });

  test('함수를 이용한 자동차 객체 생성', () => {
    const input = ['kia','hyun','gene'];
    const app = new App();

    const cars = app.createCars(input);

    // 객체의 갯수가 input과 같은지 확인
    expect(cars.length).toBe(input.length);

    cars.forEach((car, index) => {
      expect(car.name).toBe(input[index]);
      expect(car.position).toBe(0);
      expect(car).toBeInstanceOf(Car);
    });
  });
});

describe('자동차 이름 문자열 입력', () => {
  test('문장이 구분자로 끝날 수 없음', () => {
    const input = 'kia,hyun,gene,';
    const app = new App();

    expect(() => app.validateCarNames(input)).toThrow('[ERROR] 문장 양식이 구분자로 끝날 수 없습니다!');
  });

  test('문장이 구분자로 시작할 수 없음', () => {
    const input = ',kia,hyun,gene';
    const app = new App();

    expect(() => app.validateCarNames(input)).toThrow('[ERROR] 문장 양식이 구분자로 시작할 수 없습니다!');
  });
});

describe('자동차 이름 문자열 분리', () => {
  test('자동차 이름 반환', () => {
    const CAR_NAMES = 'hyun,kia,gene';

    const app = new App();
    const result = app.splitName(CAR_NAMES);

    expect(result).toEqual(['hyun','kia','gene']);
  });

  test('이름은 공백으로 할 수 없음', () => {
    const input = ['kia','','hyun'];
    const app = new App();

    expect(() => app.validateSplitCarNames(input)).toThrow('[ERROR] 이름은 공백으로 설정할 수 없습니다!');
  });

  test('이름은 중복으로 사용할 수 없음', () => {
    const input = ['kia','kia','hyun'];
    const app = new App();

    expect(() => app.validateSplitCarNames(input)).toThrow('[ERROR] 이름은 중복으로 설정할 수 없습니다!');
  });
  
  test('이름은 5글자를 넘을 수 없음', () => {
    const input = ['kia','hyundai','gene'];
    const app = new App();

    expect(() => app.validateSplitCarNames(input)).toThrow('[ERROR] 이름은 5글자를 넘을 수 없습니다!');
  });
});

describe('회차 입력', () => {

  test('숫자가 아닌 값 입력', () => {
    const input = 'a';

    const app = new App();

    expect(() => app.validateRoundNumber(input)).toThrow('[ERROR] 숫자를 입력해야 합니다!');
  });
  
  test('1보다 적은 값 입력', () => {
    const input = '0';

    const app = new App();

    expect(() => app.validateRoundNumber(input)).toThrow('[ERROR] 1보다 적은 값은 입력할 수 없습니다.');
  });
});

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
