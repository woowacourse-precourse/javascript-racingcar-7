import { parseInputs } from '../src/Parsing.js';

describe('parsing test', () => {
  test('만욱,노미,재걸,동호', () => {
    expect(parseInputs('만욱,노미,재걸,동호')).toEqual([
      '만욱',
      '노미',
      '재걸',
      '동호',
    ]);
  });
});
