import { printOutput } from './io';

function printSimulate(name, count) {
  const result = '-'.repeat(count);
  printOutput(`${name} : ${result}`);
}

export default printSimulate;
