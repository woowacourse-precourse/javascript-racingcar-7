import App from '../src/App';
import { mockQuestions } from '../src/Test';

const exceptionCases = [
  {
    description: '이름이 중복될 경우',
    inputs: ['name,name,name'],
  },
  {
    description: '빈 문자열일 경우',
    inputs: [''],
  },
  {
    description: '쉼표로 시작하는 경우',
    inputs: [',hi,baby'],
  },
  {
    description: '쉼표로 끝나는 경우',
    inputs: ['a,b,'],
  },
  {
    description: '이름이 빈 문자열일 경우',
    inputs: ['a,   ,b,c'],
  },
  {
    description: '이름이 5글자를 초과할 경우',
    inputs: ['너와나의연결고리,비욘세'],
  },
  {
    description: '시도할 횟수가 빈 문자열일 경우',
    inputs: ['a,b,c', ''],
  },
  {
    description: '시도할 횟수가 한글일 경우',
    inputs: ['a,b,c', '안녕'],
  },
  {
    description: '시도할 횟수가 특수문자일 경우',
    inputs: ['a,b,c', '!'],
  },
  {
    description: '시도할 횟수가 음수일 경우',
    inputs: ['a,b,c', '-4'],
  },
  {
    description: '시도할 횟수가 소수일 경우',
    inputs: ['a,b,c', '3.14'],
  },
  {
    description: '시도할 횟수가 공백일 경우',
    inputs: ['a,b,c', ' '],
  },
  {
    description: '시도할 횟수가 0일 경우',
    inputs: ['a,b,c', '0'],
  },
  {
    description: '시도할 횟수가 공백을 포함한 양수일 경우',
    inputs: ['a,b,c', '3 '],
  },
];

const runExceptionTest = async ({ description, inputs }) => {
  test(description, async () => {
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
};

exceptionCases.forEach(runExceptionTest);
