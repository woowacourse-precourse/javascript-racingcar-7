export function checkValidNameLength(name, length) {
    if (name.length > length) {
        throw new Error(`[ERROR] 이름은 최대 ${length}자까지 설정 가능합니다. (입력값: ${name})`);
    }
}

export function checkLessThanOrEqualMaxCount(count, maxCount) {
    if (count > maxCount) {
        throw new Error(`[ERROR] 경기는 최대 ${maxCount}회 시도할 수 있습니다. (입력값: ${count})`)
    }
}