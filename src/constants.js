export const INPUT_PROMPT = {
  readCarNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  readRoundCount: '시도할 횟수는 몇 회인가요?',
};

export const REGEX = {
  carName: /^.{1,5}$/g,
  roundCount: /[^0-9]/g,
};

export const BEFORE_ERROR_MESSAGE = '[ERROR]';

export const ERROR_MESSAGE = {
  carNameCharacterCountError: `${BEFORE_ERROR_MESSAGE} 경주에 참여 가능한 자동차 이름은 최소 1자 이상, 최대 5자 이하입니다.`,
  roundCountFormat: `${BEFORE_ERROR_MESSAGE} 이동 시도 횟수는 숫자로만 입력해야 합니다.`,
};

export const FORWARD_SYMBOL = '-';

export const NAME_SEPARATOR = ',';

export const OUTPUT_MESSAGE = {
  messageSeparator: ':',
  executionResult: '실행 결과',
  winner: '최종 우승자',
};
