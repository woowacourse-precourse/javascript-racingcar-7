export const ERROR_MESSAGES = Object.freeze({
    empty_car_list: "[ERROR] 입력된 자동차가 없습니다.",
    only_one_car: "[ERROR] 입력된 자동차가 한 개 뿐입니다.",
    duplicate_car: "[ERROR] 중복된 자동차 이름이 있습니다.",
    long_name_car: car => `[ERROR] "${car}"의 길이가 5를 초과합니다.`,
    not_number: "[ERROR] 숫자가 아닌 값을 입력하면 안됩니다.",
    not_positive_number: "[ERROR] 양수를 입력해주세요."
});
