
export const nameStrValid = (NAME_STR) => {
    const TEST_STR = NAME_STR.toString()

    if (NAME_STR === '') {
        throw new Error("[ERROR] 경주할 자동차 이름을 입력해주세요.")
    }

    if (TEST_STR.match(/,/) === null) {
        throw new Error("[ERROR] 쉼표를 사용해주세요.")
    }

    if (TEST_STR.match(/,,/)) {
        throw new Error("[ERROR] 쉼표를 한 번만 사용해주세요.")
    }

}

export const runTimesValid = (RUN_TIMES) => {

    if (RUN_TIMES === '') {
        throw new Error("[ERROR] 횟수를 입력해주세요")
    }


    if (isNaN(RUN_TIMES)) {
        throw new Error("[ERROR] 숫자를 입력해주세요")
    }

}