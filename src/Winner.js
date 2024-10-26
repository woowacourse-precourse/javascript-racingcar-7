import { Console } from '@woowacourse/mission-utils'

class Winner {
  announce(cars) {
    const winenrs = this.findWinners(cars);

    Console.print(`최종 우승자 : ${winenrs.join(', ')}`)
  }

  findWinners(cars) {
    let winners = [''];
    let maxMove = -99999;

    cars.forEach((move, name) => {
      // 더 많이 간 사람이 나오면 name과 이름 초기화
      if (move > maxMove) {
        winners = [name];
        maxMove = move;
      } 
      // 이미 가장 많이 간 사람이랑 같으면, name 추가
      else if (move === maxMove) {
        winners.push(name);
      }
    })

    return winners;
  }
}

export default Winner;