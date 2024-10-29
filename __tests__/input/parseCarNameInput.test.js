import parseCarNameInput from '../../src/input/parseCarNameInput.js';

const testCases = [
  ['Junseo,Haki,wap', ['Junseo', 'Haki', 'wap'], '여러 자동차 이름'],
  ['', [''], '빈 문자열'],
  ['Junseo', ['Junseo'], '단일 자동차 이름'],
  ['KR_OO,W W W,*(^&,   a', ['KR_OO', 'W W W', '*(^&', '   a'], '공백 포함 이름']
];


describe('parseCarNameInput 테스트', () => {
  test.each(testCases)(
    '(%s): 입력 %s -> 예상 출력 %p',
    (input, expectedOutput) => {
      expect(parseCarNameInput(input)).toEqual(expectedOutput);
    }
  );
});


