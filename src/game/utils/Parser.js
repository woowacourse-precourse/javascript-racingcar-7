export default class Parser{

    static splitStringByComma(String){
        const StringArr = String.split(new RegExp(','))
        return StringArr
    }
}