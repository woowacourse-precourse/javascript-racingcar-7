import randomMove from "./RandomMove.js";

const updateCarDistances = distances => {
    for (let j = 0; j < distances.length; j++) {
        randomMove(distances, j);
    }
};

export default updateCarDistances;