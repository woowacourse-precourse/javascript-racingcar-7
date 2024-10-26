import { Random } from "@woowacourse/mission-utils";

function goStopResult() {
  const RANDOM_NUMBER = Random.pickNumberInRange(0,9);

  let result = '';

  if(RANDOM_NUMBER >= 4) {
    result = '-';
  };

  return result;
};

export default goStopResult;