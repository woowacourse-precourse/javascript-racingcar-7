import getInput from '../../src/input/getInput.js';
import { mockQuestions } from '../../src/utils/testUtils.js';

describe('getInput 테스트', () => {
  test('사용자 입력을 정상적으로 반환', async () =>{
    const question = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
    const expectedResponse = 'pobi,woni';

    mockQuestions([expectedResponse]);
    const response = await getInput(question);
    expect(response).toEqual(expectedResponse);
  })
});