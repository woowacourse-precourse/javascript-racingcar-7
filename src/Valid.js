
export const NAMESTRValid = (NAMESTR) => {
    const nameStr = NAMESTR.toString()

    if (NAMESTR === '') {
        throw new Error("경주할 자동차 이름을 입력해주세요.")
    }

    if (nameStr.match(/,/) === null) {
        throw new Error("쉼표를 사용해주세요.")
    }

    if (nameStr.match(/,,/)) {
        throw new Error("쉼표를 한 번만 사용해주세요.")
    }

}

export const RUNTIMESValid = (RUNTIMES) => {
    if (RUNTIMES === '') {
        throw new Error("횟수를 입력해주세요")
    }

    if (isNaN(RUNTIMES)) {
        throw new Error("숫자를 입력해주세요")
    }
}