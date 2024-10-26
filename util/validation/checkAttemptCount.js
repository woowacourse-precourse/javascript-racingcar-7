export default function checkAttemptCount (ATTEMPT_COUNT) {
    if (ATTEMPT_COUNT <= 0 || isNaN(ATTEMPT_COUNT)) {
        throw new Error("[ERROR] 시행 횟수는 1 이상의 숫자로 입력해야 합니다.")
    }
};