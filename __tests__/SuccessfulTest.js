import App from '../src/App.js';
import {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  validateLogs,
} from '../src/Test/Test.js';

// 가독성을 위해 일부러 depth 3 이상 허용.
const validTestCases = [
  {
    description: '과제 페이지 실행 결과 예시',
    inputs: ['pobi,woni,jun', '5'],
    randoms: [5, 3, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
    expectedLogs: [
      'pobi : -',
      'woni : ',
      'jun : -',
      'pobi : --',
      'woni : -',
      'jun : --',
      'pobi : ---',
      'woni : --',
      'jun : ---',
      'pobi : ----',
      'woni : ---',
      'jun : ----',
      'pobi : -----',
      'woni : ----',
      'jun : -----',
      '최종 우승자 : pobi, jun',
    ],
  },
  {
    description: '우승자가 여러 명일 때 테스트',
    inputs: ['pobi,woni,honux', '3'],
    randoms: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    expectedLogs: [
      'pobi : -',
      'woni : -',
      'honux : -',
      'pobi : --',
      'woni : --',
      'honux : --',
      'pobi : ---',
      'woni : ---',
      'honux : ---',
      '최종 우승자 : pobi, woni, honux',
    ],
  },

  {
    description: '이름에 특수 문자가 포함된 경우 성공 테스트',
    inputs: ['pobi,@woni,#dux', '3'],
    randoms: [4, 3, 4, 6, 6, 6, 9, 6, 8],
    expectedLogs: [
      'pobi : -',
      '@woni : ',
      '#dux : -',
      'pobi : --',
      '@woni : -',
      '#dux : --',
      'pobi : ---',
      '@woni : --',
      '#dux : ---',
      '최종 우승자 : pobi, #dux',
    ],
  },
  {
    description: '이름에 이모지가 포함된 경우 성공 테스트',
    inputs: ['pobi,😀,honux', '2'],
    randoms: [3, 8, 3, 6, 8, 7],
    expectedLogs: [
      'pobi : ',
      '😀 : -',
      'honux : ',
      'pobi : -',
      '😀 : --',
      'honux : -',
      '최종 우승자 : 😀',
    ],
  },
  {
    description: '이름에 이모지가 포함된 경우 성공 테스트',
    inputs: ['pobi,😀😀😀😀😀,honux', '2'],
    randoms: [3, 8, 3, 6, 8, 7],
    expectedLogs: [
      'pobi : ',
      '😀😀😀😀😀 : -',
      'honux : ',
      'pobi : -',
      '😀😀😀😀😀 : --',
      'honux : -',
      '최종 우승자 : 😀😀😀😀😀',
    ],
  },

  {
    description: '이름이 하나인 경우 성공 테스트',
    inputs: ['pobi', '3'],
    randoms: [8, 8, 8],
    expectedLogs: ['pobi : -', 'pobi : --', 'pobi : ---', '최종 우승자 : pobi'],
  },
  {
    description: '이름이 일본어인 경우 성공 테스트',
    inputs: ['たんぽぽ', '3'],
    randoms: [8, 8, 8],
    expectedLogs: [
      'たんぽぽ : -',
      'たんぽぽ : --',
      'たんぽぽ : ---',
      '최종 우승자 : たんぽぽ',
    ],
  },
  {
    description: '이름에 특수 문자와 이모지가 모두 포함된 경우 성공 테스트',
    inputs: ['pobi,@😀,honux', '3'],
    randoms: [8, 8, 7, 7, 6, 9, 8, 8, 9],
    expectedLogs: [
      'pobi : -',
      '@😀 : -',
      'honux : -',
      'pobi : --',
      '@😀 : --',
      'honux : --',
      'pobi : ---',
      '@😀 : ---',
      'honux : ---',
      '최종 우승자 : pobi, @😀, honux',
    ],
  },
  {
    description: '4를 입력했을때 전진, 3이면 중지인지 테스트',
    inputs: ['pobi,@😀,honux', '3'],
    randoms: [4, 4, 4, 3, 3, 3, 4, 4, 4],
    expectedLogs: [
      'pobi : -',
      '@😀 : -',
      'honux : -',
      'pobi : -',
      '@😀 : -',
      'honux : -',
      'pobi : --',
      '@😀 : --',
      'honux : --',
      '최종 우승자 : pobi, @😀, honux',
    ],
  },
];

const runSuccessfulTest = async ({
  description,
  inputs,
  randoms,
  expectedLogs,
}) => {
  test(description, async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms(randoms);

    // when
    const app = new App();
    await app.run();

    // then
    validateLogs(logSpy, expectedLogs);
  });
};

validTestCases.forEach(runSuccessfulTest);
