export const checkEmptyInput = (input) => {
	if (input === '') {
		throw new Error(`[ERROR]`);
	}
};

// 시도할 횟수가 숫자가 아닌 문자열(알파벳,구분자 등)입력
export const checkContents = (input) => {
	if (isNaN(input)) {
		throw new Error(`[ERROR]`);
	}
};
