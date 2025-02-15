function createRacerInformation(racerList) {
  const DEFAULT_RACER_LIST = racerList.map((car) => [car, '']);
  const RACER_MAP = new Map(DEFAULT_RACER_LIST);
  return RACER_MAP;
};

export default createRacerInformation;