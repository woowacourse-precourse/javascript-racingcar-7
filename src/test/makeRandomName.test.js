import {
  makeOddChar,
  makeEvenChar,
  makeRandomName,
  initRandomName,
} from '../game/makeRandomName.js';
import { VOWEL } from '../const/index.js';

describe('랜덤 이름 생성기 테스트', () => {
  const testList = ['만욱', '노미', '재걸', '동호'];

  test('정상적인 입력 테스트 ', () => {
    expect(initRandomName(...testList)).toEqual(testList);
  });

  const count = 100;

  test.each(Array.from({ length: count }))(
    'makeOddChar 홀수 문자열 자음 반환 테스트 #%#',
    () => {
      const char = makeOddChar();
      expect(char).toMatch(/^[a-z]$/); // 소문자 확인
      expect(Object.values(VOWEL)).not.toContain(char.charCodeAt(0)); // 모음이 아닌지 확인
    },
  );

  test.each(Array.from({ length: count }))(
    'makeEvenChar 짝수 문자열 모음 반환 테스트 #%#',
    () => {
      const char = makeEvenChar();
      expect(Object.keys(VOWEL)).toContain(char); // 모음인지 확인
    },
  );

  test.each([
    { name: '랜덤이름', length: 5 },
    { name: '다른이름', length: 5 },
  ])(
    '랜덤함수가 실제로 %i글자를 반환하고 짝수=모음, 홀수=자음 테스트 %#',
    ({ name, length }) => {
      const randomName = makeRandomName();
      expect(randomName).toHaveLength(length);

      for (let i = 0; i < randomName.length; i++) {
        if (i % 2 === 0) {
          expect(Object.values(VOWEL)).not.toContain(randomName.charCodeAt(i));
        } else {
          expect(Object.keys(VOWEL)).toContain(randomName[i]);
        }
      }
    },
  );

  test.each([
    { inputs: ['재걸', '', '동호', ''], expected: ['재걸', 5, '동호', 5] },
    { inputs: ['', '노미', '', '재걸'], expected: [5, '노미', 5, '재걸'] },
    { inputs: ['만욱', '', '재걸', ''], expected: ['만욱', 5, '재걸', 5] },
  ])('initRandomName 빈값과 실제값 테스트 %#', ({ inputs, expected }) => {
    const result = initRandomName(...inputs);
    expect(result).toHaveLength(inputs.length);

    result.forEach((item, index) => {
      if (typeof expected[index] === 'string') {
        expect(item).toBe(expected[index]);
      } else {
        expect(item).toHaveLength(expected[index]);
      }
    });
  });
});
