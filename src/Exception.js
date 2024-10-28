export function validateParticipants(names) {
    names.forEach(name => {
      if (name.length > 5) throw new Error("[ERROR] 이름은 5글자를 넘을 수 없습니다.");
    });
  }
  
  export function validateAttempts(attempts) {
    if (isNaN(attempts) || attempts < 1) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
  }
  