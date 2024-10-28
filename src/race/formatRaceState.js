import { RACE_MOVE } from "../constants/race.js";

export const formatRaceState = ([name, position]) =>
  `${name} : ${RACE_MOVE.FORWARD.repeat(position)}`;
