import { Console } from '@woowacourse/mission-utils';

const Printer = {
  currentStatus(carList) {
    carList.forEach(({ name, position }) => {
      Console.print(`${name} : ${'-'.repeat(position)}`);
    });
  },

  blankLine() {
    Console.print('');
  },
};

export default Printer;
