import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPositions(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`); // 이동한 거리만큼 "-"를 표시
    });
    Console.print('\n');
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`); // 공동 우승자 있을 경우 쉼표로 구분
  },

  printError(message) {
    Console.print(message); // 오류 메시지 출력
  },
};

export default OutputView;
