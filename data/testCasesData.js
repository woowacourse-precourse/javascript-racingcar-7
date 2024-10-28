import { ERROR_MESSAGE } from '../src/constants/errorMessages.js';

const {
  INVALID_CAR_NAMES_LENGTH,
  INVALID_CAR_NAME_LENGTH,
  DUPLICATE_CAR_NAMES,
  INVALID_TRY_COUNT,
} = ERROR_MESSAGE;

const VARIOUS_NAME_TEST_CASES = [
  {
    description: '한글, 숫자, 특수문자 통과 테스트',
    inputs: ['한글1,한글2', '1'],
    logs: ['한글1 : -', '한글2 : ', '최종 우승자 : 한글1'],
  },
  {
    description: '숫자만 포함된 자동차 이름 테스트',
    inputs: ['1234,5678', '1'],
    logs: ['1234 : -', '5678 : ', '최종 우승자 : 1234'],
  },
  {
    description: '한글과 숫자가 혼합된 자동차 이름 테스트',
    inputs: ['한글123,한글456', '1'],
    logs: ['한글123 : -', '한글456 : ', '최종 우승자 : 한글123'],
  },
  {
    description: '특수문자만 포함된 자동차 이름 테스트',
    inputs: ['!@#$,%^&*', '1'],
    logs: ['!@#$ : -', '%^&* : ', '최종 우승자 : !@#$'],
  },
  {
    description: '한글과 특수문자가 혼합된 자동차 이름 테스트',
    inputs: ['한글!@#,한글%^&', '1'],
    logs: ['한글!@# : -', '한글%^& : ', '최종 우승자 : 한글!@#'],
  },
  {
    description: '한글과 영문자가 혼합된 자동차 이름 테스트',
    inputs: ['한글abc,한글xyz', '1'],
    logs: ['한글abc : -', '한글xyz : ', '최종 우승자 : 한글abc'],
  },
];

const ROUND_TEST_CASE = {
  inputs: ['pobi,woni', '3'],
  logs: [
    'pobi : -',
    'woni : ',
    '', // 첫 라운드 후 빈 줄 출력
    'pobi : --',
    'woni : ',
    '', // 두 번째 라운드 후 빈 줄 출력
    'pobi : ---',
    'woni : ',
    '', // 세 번째 라운드 후 빈 줄 출력
    '최종 우승자 : pobi',
  ],
};

const TWO_WINNERS_TEST_CASE = {
  inputs: ['pobi,woni', '1'],
  logs: ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'],
};

const EXCEPTION_TEST_CASES = [
  {
    inputs: ['pobi'],
    expectedError: INVALID_CAR_NAMES_LENGTH,
  },
  {
    inputs: ['pobi,moon,'],
    expectedError: INVALID_CAR_NAME_LENGTH,
  },
  {
    inputs: ['pobicar,moon'],
    expectedError: INVALID_CAR_NAME_LENGTH,
  },
  {
    inputs: ['pobi,pobi'],
    expectedError: DUPLICATE_CAR_NAMES,
  },
  {
    inputs: ['pobi,woni', '0'],
    expectedError: INVALID_TRY_COUNT,
  },
  {
    inputs: ['pobi, woni', '-1'],
    expectedError: INVALID_TRY_COUNT,
  },
  {
    inputs: ['pobi,woni ', 'a'],
    expectedError: INVALID_TRY_COUNT,
  },
];

export {
  VARIOUS_NAME_TEST_CASES,
  ROUND_TEST_CASE,
  TWO_WINNERS_TEST_CASE,
  EXCEPTION_TEST_CASES,
};
