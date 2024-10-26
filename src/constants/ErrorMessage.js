import { InputSeperator } from './displayConstant.js';
import { CarInfo } from './racingConfig.js';

const ErrorMessage = Object.freeze({
  PREFIX: '[ERROR]',

  NO_CAR_NAME_INPUT: `지정하지 않은 자동차 이름이 있어요.\n이름은 ${CarInfo.MAX_NAME_LENGTH}자 이하의 문자열을 ${InputSeperator.NAME}(${InputSeperator.MARK}) 기준으로 구분해 다시 입력해주세요.`,
  OVER_CAR_NAME: `자동차의 이름이 너무 길어요.\n이름은 ${CarInfo.MAX_NAME_LENGTH}자 이하의 문자열을 ${InputSeperator.NAME}(${InputSeperator.MARK}) 기준으로 구분해 다시 입력해주세요.`,
  DUPLICATE_CAR_NAME: `중복되는 자동차 이름이 있어요.\n자동차 이름의 중복없이 다시 입력해주세요.`,

  NOT_NUMBER_TURN: `시도할 횟수는 숫자만 입력할 수 있어요.\n대시(-) 기호나 소수점(.) 등과 같은 문자없이 다시 입력해주세요.`,
  NO_TURN_INPUT: `시도할 횟수를 입력하지 않으셨어요.\n시도할 횟수를 숫자를 이용해 다시 입력해주세요.`,
});

export default ErrorMessage;
