export function validateCarNames(names) {
    for (let i = 0; i < names.length; i++) {
    const name = names[i].trim();
    
    if (name.length > 5) {
            throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
        }
    }
}

export function playNumIsNaN(num) {
    
    if (isNaN(num)) {
        throw new Error('[ERROR] 시도 횟수는 숫자를 입력해야 합니다.');
    }
}