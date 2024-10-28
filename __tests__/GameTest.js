describe('Game 클래스 테스트', () => {
  test('전진 횟수가 가장 많은 자동차(우승자)를 구할 수 있다.', () => {
    const carNames = ['zzi', 'hyuk', 'kki'];
    const roundsRandomNumbers = [
      [0, 6, 3],
      [3, 4, 6],
      [5, 1, 7],
      [8, 3, 9],
    ];
    const expectedWinners = ['kki'];

    const game = new Game();
    game.cars = carNames.map((carName) => new Car(carName));

    roundsRandomNumbers.map((roundRandomNumbers) => {
      roundRandomNumbers.map((randomNumber, index) => game.cars[index].moveForward(randomNumber));
    });

    const winners = game.getWinners();

    expect(winners).toEqual(expectedWinners);
  });

  test('전진 횟수가 가장 많은 여러 자동차(우승자)를 구할 수 있다.', () => {
    const carNames = ['zzi', 'hyuk', 'kki'];
    const roundsRandomNumbers = [
      [4, 6, 3],
      [3, 4, 6],
      [5, 7, 2],
      [8, 3, 9],
    ];
    const expectedWinners = ['zzi', 'hyuk'];

    const game = new Game();
    game.cars = carNames.map((carName) => new Car(carName));

    roundsRandomNumbers.map((roundRandomNumbers) => {
      roundRandomNumbers.map((randomNumber, index) => game.cars[index].moveForward(randomNumber));
    });

    const winners = game.getWinners();

    expect(winners).toEqual(expectedWinners);
  });
});
