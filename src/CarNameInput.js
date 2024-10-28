import { Console }  from '@woowacourse/mission-utils';

export async function getCarNames() {
  return new Promise((resolve, reject) => {
    Console.readLineAsync("경주할 자동차 이름을 입력하세요 (이름은 쉼표(,) 기준으로 구분): \n").then((input) => {
      try {
        // 입력이 비어 있거나 공백만 있는 경우
        if (!input || input.trim() === '') {
          throw new Error("[ERROR] 자동차 이름을 입력하세요.");
        }

        const carNames = input.split(',').map(name => name.trim()).filter(name => name !== ''); // 빈 이름 필터링

        // 중복된 이름 검사
        const uniqueNames = new Set(carNames);
        if (uniqueNames.size !== carNames.length) {
          throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
        }

        // 모든 이름에 대해 유효성 검사
        for (let name of carNames) {
          if (name.length === 0) {
            throw new Error("[ERROR] 자동차 이름으로 공백을 사용할 수 없습니다."); // 공백 이름 체크
          }
          if (name.length > 5) {
            throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해주세요."); // 길이 체크
          }
          if (!/[a-zA-Z0-9]/.test(name)) {
            throw new Error("[ERROR] 자동차 이름에는 문자나 숫자가 포함되어야 합니다."); // 기호만 있는 이름 검사
          }
        }
        
        // 유효한 자동차 이름 목록 반환
        resolve(carNames);

      } catch (error) {
        Console.print(`${error.message}`); // 에러 메시지 출력
        reject(error); // 에러 발생 시 reject 호출
      }
    }).catch((error) => {
      Console.print(`[ERROR] ${error.message}`); // 에러 메시지 출력
      reject(error); // 입력 처리 중 에러 발생 시 reject 호출
    });
  });
}
