import { errorMessages } from '../src/constant.js';
import Car from '../src/Car.js';

export const carNameInputCase = [
  {
    input: 'js,java',
    expected: [new Car('js'), new Car('java')],
    throwError: false,
  },
  {
    input: '',
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
    input: 'js.java',
    expected: `${errorMessages.prefix} ${errorMessages.invalidDelimiter}`,
    throwError: true,
  },
];

export const countInputCase = [
  { input: '5', expected: 5, throwError: false },
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
];
