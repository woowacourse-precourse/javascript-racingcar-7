import PROMPT from '../../constants/Prompt.js';

const Format = {
  raceResult: (name, position) => `${name} ${PROMPT.RESULT_DELIMITER} ${position}`,
  winners: (winner) => `${PROMPT.WINNER_PROMPT}${winner}`,
};

export default Format;
