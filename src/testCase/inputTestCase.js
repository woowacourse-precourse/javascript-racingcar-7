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
