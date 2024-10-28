export const VALID_CHARACTER_REGEX = /^[a-z|A-Z|가-힣|,]+$/g;

export const ERROR_MESSAGES = {
	hasWhiteSpace: '[ERROR] 공백을 포함할 수 없어요.',
	hasNothing: '[ERROR] 값을 입력해 주세요.',
	invalidNameLength: '[ERROR] 이름은 1~5자 사이로 입력해 주세요.',
	invalidName: '[ERROR] 올바르지 않은 문자가 입력되었어요.',
	isDuplicates: '[ERROR] 중복되지 않은 이름을 입력해 주세요.',
	invalidRound: '[ERROR] 시도할 횟수는 1~9 사이의 정수로 입력해 주세요.',
	isNaN: '[ERROR] 정수만 입력할 수 있어요.',
	isNegative: '[ERROR] 1이상의 정수만 입력할 수 있어요.',
	isRational: '[ERROR] 정수만 입력할 수 있어요.',
};
