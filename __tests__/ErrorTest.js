import { expectError } from '../src/utils/testUtils.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

describe('에러가 발생하는 App 테스트', () => {
  test.each([{ input: [' a'] }, { input: ['a '] }, { input: [' a '] }, { input: [' '] }])(
    '자동차 이름에 앞 또는 뒤, 앞뒤에 공백이 포함된 문자열 ($input)을 입력한 경우',
    async ({ input }) => {
      await expectError(input, ERROR_MESSAGES.trim);
    },
  );
  test.each([{ input: [''] }, { input: ['abcdef'] }, { input: ['ab cde'] }])(
    '자동차 이름에 잘못된 길이의 이름인 ($input)을 입력한 경우',
    async ({ input }) => {
      await expectError(input, ERROR_MESSAGES.invalidNameLength);
    },
  );
  test.each([{ input: ['abc,abc'] }])(
    '자동차 이름에 중복된 이름인 $input이 입력될 경우',
    async ({ input }) => {
      await expectError(input, ERROR_MESSAGES.duplicatedName);
    },
  );
  test.each([
    { input: ['pobi'], trialCount: ['a'] },
    { input: ['pobi'], trialCount: ['0'] },
    { input: ['pobi'], trialCount: ['1.5'] },
    { input: ['pobi'], trialCount: ['3회'] },
  ])(
    '시도 횟수로 1 이상의 정수가 아닌 $trialCount를 입력한 경우',
    async ({ input, trialCount }) => {
      await expectError([...input, ...trialCount], ERROR_MESSAGES.notPositiveInteger);
    },
  );
});
