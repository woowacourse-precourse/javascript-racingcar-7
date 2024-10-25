import Car from '../src/Car';

describe('자동차 클래스', () => {
  test.each([
    ['pobi', true],
    [' jun ', true],
    ['pobiwonijun', new Error('[ERROR]')],
  ])('자동차 클래스 생성자에서 이름 유효성 검사 테스트', (inputs, expected) => {
    //given
    const carName = inputs;

    //when
    if (expected instanceof Error) {
      //then
      expect(() => new Car(carName)).toThrow('[ERROR]');
    } else {
      //then
      expect(() => new Car(carName)).not.toThrow();
    }
  });
});
