import CarNameValidator from '../src/validators/CarNameValidator.js';

describe('경주할 자동차 이름 테스트 - [Error] 발생 상황', () => {
  test('자동차 이름이 공백일 경우 에러가 발생합니다.', () => {
    const carNameList = [''];
    expect(() => CarNameValidator.validate(carNameList)).toThrow(
      '[ERROR] 자동차 이름은 공백일 수 없습니다.',
    );
  });

  test('자동차 이름에 공백이 포함된 경우 에러가 발생합니다.', () => {
    const carNameList = ['Seop', 'Ha ry'];
    expect(() => CarNameValidator.validate(carNameList)).toThrow(
      '[ERROR] 자동차 이름에 공백이 포함되면 안됩니다.',
    );
  });

  test('자동차 이름이 5자를 초과하는 경우 에러가 발생합니다.', () => {
    const carNameList = ['Seop', 'HarrySeop'];
    expect(() => CarNameValidator.validate(carNameList)).toThrow(
      '[ERROR] 자동차 이름은 5자 이하여야 합니다.',
    );
  });

  test('자동차가 2대 미만인 경우 에러가 발생합니다.', () => {
    const carNameList = ['Harry'];
    expect(() => CarNameValidator.validate(carNameList)).toThrow(
      '[ERROR] 자동차는 2대 이상이어야 합니다.',
    );
  });

  test('자동차 이름이 중복된 경우 에러를 발생합니다.', () => {
    const carNameList = ['Harry', 'Harry'];
    expect(() => CarNameValidator.validate(carNameList)).toThrow(
      '[ERROR] 자동차 이름은 중복되선 안됩니다.',
    );
  });
});

describe('경주할 자동차 이름 테스트 - 정상 작동', () => {
  test('조건에 맞게 입력하면 에러를 발생하지 않습니다.', () => {
    const carNameList = ['Seop', 'Harry'];
    expect(() => CarNameValidator.validate(carNameList)).not.toThrow();
  });
});
