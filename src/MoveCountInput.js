import { Console } from '@woowacourse/mission-utils';

export async function getMoveCount() {
  return new Promise((resolve, reject) => {
    Console.readLineAsync("시도할 횟수는 몇 회인가요? \n").then((input) => {
      try {
        // 입력이 비어 있거나 공백만 있는 경우
        if (!input || input.trim() === '') {
          throw new Error("[ERROR] 시도할 횟수를 입력하세요.");
        }

        // 수식을 포함하거나 소수인 경우
        if (/[^0-9]/.test(input) || input.includes('.')) {
          throw new Error("[ERROR] 시도 횟수는 정수여야 하며, 수식이 포함될 수 없습니다.");
        }

        const moveCount = Number(input); // 입력을 숫자로 변환

        // 숫자가 아닌 경우
        if (isNaN(moveCount)) {
          throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
        }

        // 1 미만인 경우 (음수 또는 0 포함)
        if (moveCount < 1) {
          throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
        }

        // 유효한 이동 횟수 반환
        resolve(moveCount);

      } catch (error) {
        Console.print(`${error.message}`); // 에러 메시지 출력
        reject(error); // 에러 발생 시 reject 호출
      }
    }).catch((error) => {
      Console.print(`[ERROR] ${error.message}`); // 입력 처리 중 에러 발생 시 reject 호출
      reject(error);
    });
  });
}