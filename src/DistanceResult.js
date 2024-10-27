const distanceResult = (cars, distances) => {
    let distanceStatus = "";
    cars.forEach((car, index) => {
        distanceStatus += `${car} : ${'-'.repeat(distances[index])} `; // 차수별 실행 결과
    })
    return distanceStatus;
}

export default distanceResult;