export function splitComma(string){
    let commaSplitList = string.split(",");
    isFiveLength(commaSplitList);
    return commaSplitList;
}

function isFiveLength(list){
    list.forEach((carName) => {
        if(carName.length > 5){
            throw new Error("[ERROR] 차 이름 길이가 5를 초과했습니다.")
        }
    })
}