import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';
import { ERROR_MSG } from '../Util/Util.js';

describe('UserInput Exception Test', () => {
  test.each([
    // Exception1
    [[], ERROR_MSG.INVALID_INPUT_DATA],
    [[null], ERROR_MSG.INVALID_INPUT_DATA],
    [['null'], ERROR_MSG.INVALID_INPUT_DATA],
    [[undefined], ERROR_MSG.INVALID_INPUT_DATA],
    [['undefined'], ERROR_MSG.INVALID_INPUT_DATA],
    [[''], ERROR_MSG.INVALID_INPUT_DATA],
    // Exception2
    [['ca r1'], ERROR_MSG.EXSIT_WHITE_SPACE],
    [['car1, car2'], ERROR_MSG.EXSIT_WHITE_SPACE],
    // Exception5
    [['naaaaame', '1'], ERROR_MSG.EXCEED_CAR_NAME_LENGTH],
    // Exception6
    [['name,name,name', '1'], ERROR_MSG.DUPLICATE_CAR_NAME],
    [['name,name1,name', '1'], ERROR_MSG.DUPLICATE_CAR_NAME],
    [['name,naaaaame1,name', '1'], ERROR_MSG.DUPLICATE_CAR_NAME],
    // Exception7
    [['car1'], ERROR_MSG.INVALID_INPUT_DATA],
    [['car1', null], ERROR_MSG.INVALID_INPUT_DATA],
    [['car1', 'null'], ERROR_MSG.INVALID_INPUT_DATA],
    [['car1', undefined], ERROR_MSG.INVALID_INPUT_DATA],
    [['car1', 'undefined'], ERROR_MSG.INVALID_INPUT_DATA],
    [['car1', ''], ERROR_MSG.INVALID_INPUT_DATA],
    // Exception8
    [['car1', '3 2'], ERROR_MSG.EXSIT_WHITE_SPACE],
    [['car1', '32 '], ERROR_MSG.EXSIT_WHITE_SPACE],
    [['car1', ' 32'], ERROR_MSG.EXSIT_WHITE_SPACE],
    [['car1', ' '], ERROR_MSG.EXSIT_WHITE_SPACE],
    // Exception9 ~ 12
    [['car1,car2,car3', '-1'], ERROR_MSG.NEGATIVE_GAME_COUNT],
    [['car1,car2,car3', '0'], ERROR_MSG.ZERO_GAME_COUNT],
    [['car1,car2,car3', '90071992547409999'], ERROR_MSG.EXCEED_GAME_COUNT],
    [['car1,car2,car3', 'one'], ERROR_MSG.CAHR_GAME_COUNT],
  ])('areAnagrams(%s) returns %s', async (first, second) => {
    // given
    mockQuestions(first);

    // when
    const app = new App();

    await expect(app.run()).rejects.toThrow(second);
  });
});
