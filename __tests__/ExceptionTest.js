import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';
import { ERROR_MSG } from '../Util/Validator.js';

const invalidInputErrorMsg = `[ERROR] ${ERROR_MSG.INVALID_INPUT_DATA}`;
const whitSpaceErrorMsg = `[ERROR] ${ERROR_MSG.EXSIT_WHITE_SPACE}`;
const maxCarNameErrorMsg = `[ERROR] ${ERROR_MSG.EXCEED_CAR_NAME_LENGTH}`;
const duplicateErrorMsg = `[ERROR] ${ERROR_MSG.DUPLICATE_CAR_NAME}`;

const negativeCountErrorMsg = `[ERROR] ${ERROR_MSG.NEGATIVE_GAME_COUNT}`;
const zeroCountErrorMsg = `[ERROR] ${ERROR_MSG.ZERO_GAME_COUNT}`;
const exceedMaxCountErrorMsg = `[ERROR] ${ERROR_MSG.EXCEED_GAME_COUNT}`;
const charCountErrorMsg = `[ERROR] ${ERROR_MSG.CAHR_GAME_COUNT}`;

describe('UserInput Exception Test', () => {
  test.each([
    // Exception1
    [[], invalidInputErrorMsg],
    [[null], invalidInputErrorMsg],
    [['null'], invalidInputErrorMsg],
    [[undefined], invalidInputErrorMsg],
    [['undefined'], invalidInputErrorMsg],
    [[''], invalidInputErrorMsg],
    // Exception2
    [['ca r1'], whitSpaceErrorMsg],
    [['car1, car2'], whitSpaceErrorMsg],
    // Exception5
    [['naaaaame', '1'], maxCarNameErrorMsg],
    // Exception6
    [['name,name,name', '1'], duplicateErrorMsg],
    [['name,name1,name', '1'], duplicateErrorMsg],
    [['name,naaaaame1,name', '1'], duplicateErrorMsg],
    // Exception7
    [['car1'], invalidInputErrorMsg],
    [['car1', null], invalidInputErrorMsg],
    [['car1', 'null'], invalidInputErrorMsg],
    [['car1', undefined], invalidInputErrorMsg],
    [['car1', 'undefined'], invalidInputErrorMsg],
    [['car1', ''], invalidInputErrorMsg],
    // Exception8
    [['car1', '3 2'], whitSpaceErrorMsg],
    [['car1', '32 '], whitSpaceErrorMsg],
    [['car1', ' 32'], whitSpaceErrorMsg],
    [['car1', ' '], whitSpaceErrorMsg],
    // Exception9 ~ 12
    [['car1,car2,car3', '-1'], negativeCountErrorMsg],
    [['car1,car2,car3', '0'], zeroCountErrorMsg],
    [
      ['car1,car2,car3', '999999999999999999999999999999999'],
      exceedMaxCountErrorMsg,
    ],
    [['car1,car2,car3', 'one'], charCountErrorMsg],
  ])('areAnagrams(%s) returns %s', async (first) => {
    // given
    mockQuestions(first);

    // when
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
