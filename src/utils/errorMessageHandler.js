import {OUTPUT_MESSAGE} from "../constants/message.js";

export const getFirstPromptError = (string) => {
    const arr = string.split(",")
    if (arr.includes(" ")) {
        throw new Error(OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.IS_SPACING)
    }
    if (arr.includes("")) {
        throw new Error(OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.HAS_EMPTY)
    }
    if (arr.some((car) => car.length > 5)) {
        throw new Error(OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.IS_MAX)
    }
    if (arr.some((car) => car.trim().length !== car.length)) {
        throw new Error(OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.HAS_SPACING)
    }
    if (new Set(arr).size < arr.length) {
        throw new Error(OUTPUT_MESSAGE.ERROR.FIRST_PROMPT.IS_DUPLICATION)
    }
    return true
}
export const getSecondPromptError = (string) => {
    if (string.includes(" ")) {
        throw new Error(OUTPUT_MESSAGE.ERROR.SECOND_PROMPT.IS_SPACING)
    }
    if (string === "") {
        throw new Error(OUTPUT_MESSAGE.ERROR.SECOND_PROMPT.HAS_EMPTY)
    }
    if (isNaN(string)) {
        throw new Error(OUTPUT_MESSAGE.ERROR.SECOND_PROMPT.IS_NUMBER)
    }
    if (string.includes(".")) {
        throw new Error(OUTPUT_MESSAGE.ERROR.SECOND_PROMPT.HAS_POINT)
    }
    if (string.trim().length !== string.length) {
        throw new Error(OUTPUT_MESSAGE.ERROR.SECOND_PROMPT.HAS_EMPTY)
    }
    return true
}
