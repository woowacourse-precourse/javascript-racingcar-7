export class InputValid{
    static validPlayerName(names){
        names.forEach(name=>{
            if(name.length>5){
                throw new Error("[ERROR] 자동차 이름은 5자 이하여야만 합니다")
            }
        })       
    }
}