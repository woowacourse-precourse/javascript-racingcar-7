import MAGICNUMBER from './magicnumber.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import validation from './validation.js';
import ERRORMESAGE from './errorMessage.js';

const utils = {
  pickRandomNumber: () => {
    return MissionUtils.Random.pickNumberInRange(
      MAGICNUMBER.STARTINCLUSIVE,
      MAGICNUMBER.ENDINCLUSIVE,
    );
  },

  tryNumvalidation: (tryNum) => {
    if (!validation.isPositiveInteger(Number(tryNum)))
      throw new Error(`${ERRORMESAGE.NOT_POSITIVE_INTEGER}`);

    const tryNumArr = String(tryNum).split('');
    if (validation.hasSpace(tryNumArr))
      throw new Error(`${ERRORMESAGE.WRONG_NUMBER_FORM_SPACE}`);

    return Number(tryNum);
  },

  createBoard: (inputArr) => {
    const board = {};
    inputArr.map((car) => {
      board[car] = '';
    });
    return board;
  },
};
export default utils;
