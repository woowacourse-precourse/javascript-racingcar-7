export function separateCarNames(carNames) {
    return carNames.split(',').map((carName) => carName.trim());
}

export function initializeMove(carNames) {
    return Array(carNames.length).fill(0);
}
