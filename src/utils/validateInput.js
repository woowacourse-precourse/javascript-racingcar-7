const validateInput = {
    isEmpty: (input) => {
        return input.length === 0;
    },
    startsWithComma: (input) => {
        return input[0] === ',';
    },
    endsWithComma: (input) => {
        return input[input.length - 1] === ',';
    },
    isDuplicatedComma: (input) => {
        return /,,/.test(input);
    },
    hasNameLongerThanFive: (nameList) => {
        return nameList.some((name) => name.length > 5);
    },
    isValidAttemptCount: (input) => {
        const number = Number(input);
        return Number.isInteger(number) && number > 0;
    }
}

export const { isEmpty, startsWithComma, endsWithComma, isDuplicatedComma, hasNameLongerThanFive, isValidAttemptCount } = validateInput;