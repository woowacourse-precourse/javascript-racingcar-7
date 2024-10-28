const getObjectValueLengths = (obj) => {
    return Object.values(obj).map(value => value.length);
};

export default getObjectValueLengths