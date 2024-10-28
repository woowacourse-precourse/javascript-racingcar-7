import { Console } from "@woowacourse/mission-utils";

// 횟수 검증 함수
const vaildCount = (count) => {
  if (!Number(count) || count <= 0) {
    throw "실행 횟수는 양수만 입력 가능합니다.";
  }
};

const getCount = async () => {
  const getCountNumber = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?"
  );

  try {
    vaildCount(getCountNumber);
    return Number(getCountNumber);
  } catch (error) {
    throw new Error("[ERROR]" + error);
  }
};

export default getCount;
