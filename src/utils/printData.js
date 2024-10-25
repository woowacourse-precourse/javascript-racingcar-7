import { Console } from '@woowacourse/mission-utils';

export const printCurrentStatus = (carList) => {
  carList.forEach(({ name, position }) => {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  });
};

export const printBlankLine = () => {
  Console.print('');
};
