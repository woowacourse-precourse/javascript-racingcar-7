const arrayToObject=(array) =>{
    return array.reduce((acc, key) => {
        acc[key] = ""; 
        return acc;
    }, {});
}



export default arrayToObject