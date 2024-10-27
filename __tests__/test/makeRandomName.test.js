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
  test('makeOddChar 홀수 문자열 자음 반환 테스트', () => {
    for (let i = 0; i < count; i++) {
      const char = makeOddChar();
      expect(char).toMatch(/^[a-z]$/); // 소문자 확인
      expect(Object.values(VOWEL)).not.toContain(char.charCodeAt(0)); // 모음이 아닌지 확인
    }
  });

  test('makeEvenChar 짝수 문자열 모음 반환 테스트 ', () => {
    for (let i = 0; i < count; i++) {
      const char = makeEvenChar();
      expect(Object.keys(VOWEL)).toContain(char); // 모음인지 확인
    }
  });

  test('랜덤함수가 실제로 5글자를 반환하고 짝수 = 모음 , 홀수 = 자음 테스트', () => {
    const randomName = makeRandomName();
    expect(randomName).toHaveLength(5); // 길이 확인

    for (let i = 0; i < randomName.length; i++) {
      if (i % 2 === 0) {
        // 홀수 인덱스는 자음
        expect(Object.values(VOWEL)).not.toContain(randomName.charCodeAt(i));
      } else {
        // 짝수 인덱스는 모음
        expect(Object.keys(VOWEL)).toContain(randomName[i]);
      }
    }
  });

  test('initRandomName 빈값과 실제값이 있는 경우 테스트 ', () => {
    const inputs = ['재걸', '', '동호', ''];
    const result = initRandomName(...inputs);

    expect(result).toHaveLength(inputs.length);
    expect(result[0]).toBe('재걸'); // 입력된 값 그대로
    expect(result[2]).toBe('동호'); // 입력된 값 그대로
    expect(result[1]).toHaveLength(5); // 빈 문자열이 랜덤 이름으로 대체됨
    expect(result[3]).toHaveLength(5); // 빈 문자열이 랜덤 이름으로 대체됨
  });
});
