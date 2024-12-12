import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from "../src/message.js";
import { validateCarNames, validateCount } from "../src/error.js";

export async function getCarNames(){
  const input = await Console.readLineAsync(MESSAGE.ASK_CARNAMES+"\n");
  const carNames = input.split(",");
  validateCarNames(carNames);
  return carNames;
}

export async function getCount(){
  const input = await Console.readLineAsync(MESSAGE.ASK_COUNT+"\n");
  const count = Number(input);
  validateCount(count);
  return count;
}


// forEach는 콜백함수 실행
// car는 results 배열의 현재 순회 중인 요소로, 각 자동차 객체를 나타냄.
export function displayResults(results) {
  results.forEach(car => { 
    Console.print(`${car.name} : ${car.position}`);
  });
  Console.print("");
}


// ...(스프레드 연산자)은 배열의 요소를 풀어서 개별 값으로 만듦
export function displayWinner(results) {
  const maxAdvanceCount = Math.max(...results.map(car => car.advanceCount));
  const winners = results
    .filter(car => car.advanceCount === maxAdvanceCount) //최대인 car부터 찾아내고
    .map(car => car.name);  // 이름 뽑아내기
  Console.print(`최종 우승자 : ${winners.join(", ")}`); // 배열의 모든 요소를 연결한 문자열을 반환.
}