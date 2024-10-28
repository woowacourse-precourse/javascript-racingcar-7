import { CAR_NAME_DELEMETER } from "./constants/Setting.js";

const Utils = {
    convertCarNames(stringCarNames) {
        return stringCarNames.split(CAR_NAME_DELEMETER);
    },

    convertTryCount(stringTrycount) {
        return Number(stringTrycount);
    },
};

export default Utils;
