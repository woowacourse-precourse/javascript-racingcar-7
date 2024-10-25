import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../App.js';

export function getUserInput() {
  // 입력을 비동기적으로 받아오는 함수
  return MissionUtils.Console.readLineAsync(); // promist 반환
}
