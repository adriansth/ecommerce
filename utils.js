const getElementById = (arr, elemntId) => {
    for (let i = 0; i < arr.length; i++) {
        if (elementId === arr[i].id) {
            return arr[i];
        }
    }
}

module.exports = {
    getElementById
}
