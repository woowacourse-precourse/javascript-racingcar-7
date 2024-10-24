import { errorMessages } from '../constant.js';
import Car from '../Car.js';

export const carNameInputCase = [
  {
    input: 'js,java',
    expected: [new Car('js'), new Car('java')],
    throwError: false,
  },
  {
    input: 'js,java,py,ts',
    expected: [new Car('js'), new Car('java'), new Car('py'), new Car('ts')],
    throwError: false,
  },
  {
    input: '자스,java,파이,ts',
    expected: [new Car('자스'), new Car('java'), new Car('파이'), new Car('ts')],
    throwError: false,
  },
  {
    input: '',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js1,java2,py3,ts4',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js!,java@,py#,ts$',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js,javani',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarNameLength}`,
    throwError: true,
  },
  {
    input: 'js, java',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js ,java',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js,java, py',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
  {
    input: 'js.java',
    expected: `${errorMessages.prefix} ${errorMessages.invalidDelimiter}`,
    throwError: true,
  },
  {
    input: 'js,,java',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCarInputName}`,
    throwError: true,
  },
];

export const countInputCase = [
  { input: '5', expected: 5, throwError: false },
  {
    input: '9999999999999999999999999999999999',
    expected: 9999999999999999999999999999999999,
    throwError: false,
  },
  {
    input: '',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
  {
    input: '0',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
  {
    input: '일',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
  {
    input: 'two',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
  {
    input: '2.5',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
  {
    input: '3회',
    expected: `${errorMessages.prefix} ${errorMessages.invalidCount}`,
    throwError: true,
  },
];
