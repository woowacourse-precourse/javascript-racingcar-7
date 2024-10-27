export const firstErrorCondition =(string)=>{
    return string.includes(" ") || string.length > 5
}

export const secondErrorCondition =(string)=>{
    return string.includes(" ") || isNaN(string)
}