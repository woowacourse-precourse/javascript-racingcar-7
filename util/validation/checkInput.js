export function checkInput(INPUT) {
    if (!INPUT.includes(',')) {
        throw new Error('[ERROR] 쉼표 구분자가 입력되지 않았습니다.')
    }
}