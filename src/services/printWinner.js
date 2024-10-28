import { Console } from '@woowacourse/mission-utils';

function PrintWinner(carList, score) {
  // 각 score의 길이 저장 배열
  const lengthList = score.map((s) => s.length);
  const maxLength = Math.max(...lengthList);

  const winner = carList.filter((car, idx) => lengthList[idx] === maxLength);

  Console.print('최종 우승자 : ' + winner.join(', '));
}

export { PrintWinner };
