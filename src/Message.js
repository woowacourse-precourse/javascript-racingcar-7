export const INPUT_MESSAGE = {
  carName: '경주할 자동차 이름을 입력하세요.(이름은 (,)기준으로 구분됩니다. 마지막은 붙이지마세요.)\n',
  tryCount: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  winner: '최종 우승자 : ',
};

export const NUMBER = {
  startPosition: 0,
  pickNumberMin: 0,
  pickNumberMax: 9,
  fowardCondition: 4,
};

export const ERROR = {
  nameNull: '[ERROR] 이름을 입력해주세요.',
  nameLength: '[ERROR] 이름은 5자 이하만 가능합니다.',
  nameDuplicate: '[ERROR] 이름은 중복되지 않아야 합니다.',
  tryCountNull: '[ERROR] 시도 횟수를 입력해주세요.',
  tryCountNan: '[ERROR] 시도 횟수는 숫자여야 합니다.',
  tryCountMin: '[ERROR] 시도 횟수는 0이상이어야 합니다.',
};