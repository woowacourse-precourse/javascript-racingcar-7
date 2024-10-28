import { MissionUtils } from "@woowacourse/mission-utils";
function playGame(p1, p2, p3) {
  if (p1>3 && p2>3 && p3>3) {
    return true;
  }
  return false;
}