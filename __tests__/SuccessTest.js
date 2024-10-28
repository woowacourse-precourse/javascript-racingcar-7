import App from '../src/App';
import { mockQuestions, mockRandoms, getLogSpy } from '../src/Test';

const validCases = [
  {
    description: '미션에서 주어진 예시 테스트',
    inputs: ['pobi,woni,jun', '5'],
    randoms: [5, 3, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
    logs: [
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
    description: '우승자가 한 명일 경우 테스트',
    inputs: ['a,b,c', '4'],
    randoms: [5, 4, 4, 5, 3, 3, 5, 3, 3, 5, 2, 2],
    logs: [
      'a : -',
      'b : -',
      'c : -',
      'a : --',
      'b : -',
      'c : -',
      'a : ---',
      'b : -',
      'c : -',
      'a : ----',
      'b : -',
      'c : -',
      '최종 우승자 : a',
    ],
  },
  {
    description: '자동차 이름에 공백이 있는 경우 테스트',
    inputs: ['go go,to,sky', '3'],
    randoms: [2, 5, 1, 4, 6, 6, 2, 7, 7],
    logs: [
      'go go : ',
      'to : -',
      'sky : ',
      'go go : -',
      'to : --',
      'sky : -',
      'go go : -',
      'to : ---',
      'sky : --',
      '최종 우승자 : to',
    ],
  },
  {
    description: '자동차 이름 시작과 끝에 공백이 있는 경우 테스트',
    inputs: [' space,yes ', '3'],
    randoms: [1, 5, 5, 3],
    logs: ['space : ', 'yes : -', 'space : -', 'yes : -', '최종 우승자 : space, yes'],
  },
];

const runTest = async ({ description, inputs, randoms, logs }) => {
  test(description, async () => {
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms(randoms);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
};

validCases.forEach(runTest);
