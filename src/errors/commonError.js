export const checkEmptyInput = (input) => {
	if (input === '') {
		throw new Error(`[ERROR]`);
	}
};
