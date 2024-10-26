describe('Car 유닛 테스트', () => {
  let car;
  beforeEach(() => {
    car = new Car('chan');
  })
  test('Car의 이름을 넣어 생성할 수 있다.', () => {
    expect(car.name).toBe(name);
  });

  test('Car는 자신의 상태를 나타낼 수있다.', () => {
    expect(car.getStatus()).toStrictEqual({name: 'chan', move: 0});
  });

  test('Car는 움직일 수 있다.', () => {
    expect(car.move()).toStrictEqual({name:'chan',move: 1});
  });
});