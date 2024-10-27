import { MAX_CAR_NAME_LENGTH, MAX_TRY_COUNT } from './numberConstants.js';

export const FAIL_INPUT = '입력에 실패했습니다.';

export const CAR_NAME_LENGTH = `자동차 이름은 ${MAX_CAR_NAME_LENGTH}글자 이하여야 합니다.`;
export const CAR_NAME_BLANK = '자동차 이름은 빈 값 또는 공백문자만으로 입력할 수 없습니다.';
export const CAR_ZERO = '자동차 이름은 1개 이상 입력해야 합니다.';
export const CAR_NAME_DUPLICATE = '자동차 이름은 중복될 수 없습니다.';

export const TRY_COUNT = '시도 횟수를 입력해주세요.';
export const TRY_COUNT_NUMBER = '시도 횟수는 양의 정수만 입력 가능합니다.';
export const TRY_COUNT_MAX = `시도 횟수는 ${MAX_TRY_COUNT}회 이하로 입력해야 합니다.`;
