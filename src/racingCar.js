export function separateCarNames(carNames) {
    return carNames.split(',').map((carName) => carName.trim());
}
