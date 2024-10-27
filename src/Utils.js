import { CAR_NAME_DELEMETER } from "./constants/Setting.js";

const Utils = {
    transformCarNamesStringToArray(stringCarNames) {
        return stringCarNames.split(CAR_NAME_DELEMETER);
    },
};

export default Utils;
