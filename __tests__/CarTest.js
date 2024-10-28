describe('Car 클래스 테스트', () => {
  test('입력된 자동차 이름을 가진 자동차 인스턴스를 생성할 수 있다.', () => {
    const input = 'minji';
    const expectedCarName = 'minji';

    const car = new Car(input);

    expect(car).toBeInstanceOf(Car);
    expect(car.name).toBe(expectedCarName);
  });
});
