export function checkValidNameLength(name, length) {
    if (name.length > length) {
        throw Error(`[ERROR] 이름은 최대 ${length}자까지 설정 가능합니다. ${name}`);
    }
}