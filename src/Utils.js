import { CAR_NAME_DELEMETER } from "./constants/Setting";

const Utils = {
    transformCarNamesStringToArray(stringCarNames) {
        return stringCarNames.split(CAR_NAME_DELEMETER);
    },
};

export default Utils;
