export const INPUT = Object.freeze({
  cars: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  count: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR = Object.freeze({
  separator_must_comma: '[ERROR] 올바른 형식을 입력해주세요. 쉼표(,)로 구분되어야합니다',
  name_length_exceed_5: '[ERROR] 경주할 자동차 이름은 최대 5글자입니다.',
  same_name: '[ERROR] 경주할 자동차 이름은 중복될 수 없습니다.',
  only_positive_number: '[ERROR] 시도할 횟수는 양수만 가능합니다.',
});

export const REGEX = Object.freeze({
  separator: /^[^,]+(,[^,]+)*$/,
  name: /^[^,]{1,5}$/,
});
