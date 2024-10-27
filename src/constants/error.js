import { MAX_NAME_LENGTH } from './index.js';

const ERROR_MESSAGES = {
  MAX_RACER_NAME: `이름은 ${MAX_NAME_LENGTH}글자 이하로 입력해주세요`,
  EMPTY_INPUT:
    '값을 입력하지않으면 레이싱을 진행할수 없어요. 값을 입력해주세요.',
  INVALIDATE_SEPARATOR:
    '이름은 쉼표(,) 기준으로만 구분돼요. 쉼표를 사용해주세요. ex) pobi,woni,jun',
  INVALIDATE_TOTAL_ROUND:
    '시도 횟수는 양의 정수만 입력가능해요. 올바른 값을 입력해 주세요. ex) 5',
};

export default ERROR_MESSAGES;
