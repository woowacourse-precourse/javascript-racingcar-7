import { MissionUtils } from "@woowacourse/mission-utils";

function splitInput(targetInput) {
  try {
    const CARNAMES = targetInput.split(",");
    return CARNAMES
    
  } catch {
    MissionUtils.Console.print("[ERROR] 올바른 입력 형식이 아닙니다.");
  }
}

export default splitInput;