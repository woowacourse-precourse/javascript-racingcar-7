export default function checkCnt(counts, key) {
    if (counts.cnt > counts.maxCnt) {
        counts.moveLonger = [key];
        counts.maxCnt = counts.cnt;
    } else if (counts.cnt === counts.maxCnt) {
        counts.moveLonger.push(key);
    }
}