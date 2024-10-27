export const Message = {
  ERROR: {
    CAR: {
      INVALID_CAR_NAME: '[ERROR] 자동차 이름은 5자 이하의 영어 또는 숫자를 입력하셔야 합니다.',
      INVALID_EMPTY_CAR: '[ERROR] 2개 이상의 자동차 이름을 적어주세요',
      INVALID_MIN_CARS: '[ERROR] 차량은 최소 2개 이상이여야 합니다',
      INVALID_CAR_NAME_TO_LONG: '[ERROR] 차량의 이름은 최대 5자입니다',
      INVALID_DUPLICATE_CAR_NAME: '[ERROR] 중복된 이름은 사용 할 수 없습니다',
      INVALID_ROUND: '[ERROR] 1에서 20 사이의 숫자만 입력 가능합니다',
      INVALID_NUBER_TYPE: '[ERROR] 1에서 20 사이의 숫자만 입력 가능합니다',
    },
    ROUND: {
      INVALID_TYPE: '[ERROR] 문자를 입력하셨습니다, 1~20사이의 숫자를 입력해주세요',
      INVALID_RANGE: '[ERROR] 숫자의 범위를 초과하셨습니다, 1~20사이의 숫자를 입력해주세요',
    },
  },
  INPUT: {
    CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    RACE_ROUND: '시도할 횟수는 몇 회인가요?(1~20 의 숫자만 넣어주세요)\n',
  },
  OUTPUT: {
    RACE_RESULT: '실행 결과',
    currentRound: (round) => `${round}라운드 결과 입니다`,
    raceWinner: (winner) => `\n최종 우승자 : ${winner}`,
    raceCurrentStatus: (car, location) => `${car} : ${location}`,
  },
};

export const CAR_VALIDATION = {
  CAR_NAME_SEPARATOR: ',',
  MIN_CAR_LIST_LENGTH: 2,
  MAX_CAR_NAME_LENGTH: 5,
};

export const ROUND_VALIDATION = {
  MIN_ROUND: 1,
  MAX_ROUND: 20,
  REGEX_NUMERIC: /^[0-9]+$/,
};

export const CAR = {
  DEFAULT_LOCATION: 0,
};

export const DEFAULT_OBJECT_VALUES = 0;

export const RACE_PROGRESS_PHRASE = '-';
export const RACE = {
  RACE_MOVE_CONDITION: 4,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
};

export const WINNER_SPACING = ', ';
