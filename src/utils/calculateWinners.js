export function calculateWinners(carNameList, positions) {
	const maxPosition = Math.max(...positions);
	return carNameList.filter((_, index) => positions[index] === maxPosition);
}
