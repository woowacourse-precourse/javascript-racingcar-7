import filterWinner from '../src/features/Race/filterWinner';

describe('/features/Race/filterWinner', () => {
  it.each([
    [[3, 5, 4, 2], [1]],
    [
      [3, 5, 5, 2],
      [1, 2],
    ],
    [
      [4, 4, 1, 3],
      [0, 1],
    ],
    [
      [6, 2, 6, 6],
      [0, 2, 3],
    ],
    [[3], [0]],
    [
      [3, 3],
      [0, 1],
    ],
  ])('should filter %s into %s', (input, expected) => {
    // when
    const result = filterWinner(input);
    // then
    expect(result).toEqual(expected);
  });
});
