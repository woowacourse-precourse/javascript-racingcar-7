import getCarName from "./utils/getCarName.js";
import getRaceNumber from "./utils/getRaceNumber.js";

const input = async () => {
  const cars = await getCarName();
  const raceNum = await getRaceNumber();

  return { cars, raceNum };
};

export default input;