export function validateCarNames(names) {
    for (let i = 0; i < names.length; i++) {
    const name = names[i].trim();
    
    if (name.length > 5) {
            throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
        }
    }
}