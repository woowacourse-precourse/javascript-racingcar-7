import { Console } from '@woowacourse/mission-utils';

class PrintResult {
  static print(cars) {
    // 차 이름과 위치를 출력할 때 ':' 뒤에 공백을 추가하지 않음
    const carStatus = cars.map(car => `${car.name} : ${'-'.repeat(car.position)}`).join('\n');
    Console.print(carStatus);
    Console.print('');
  }

  static printWinner(cars) {
    // 가장 많이 이동한 차를 찾기
    const maxPosition = Math.max(...cars.map(car => car.position));
    const winners = cars.filter(car => car.position === maxPosition);

    // 우승자 이름 출력
    const winnerNames = winners.map(winner => winner.name).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default PrintResult;
