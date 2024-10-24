export function checkValidNameLength(name, length) {
    if (name.length > length) {
        throw Error(`[ERROR] 이름은 최대 ${length}자까지 설정 가능합니다. ${name}`);
    }
}

export function checkLessThanOrEqualMaxCount(count, maxCount) {
    if (count > maxCount) {
        throw Error(`[ERROR] 경기는 최대 ${maxCount}회 시도할 수 있습니다. ${count}`)
    }
}