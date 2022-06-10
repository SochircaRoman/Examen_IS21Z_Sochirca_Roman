let arr = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const pointFilter = (array) => {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof (array[i].x) == "number" && typeof (array[i].y) == "number") {
            newArray.unshift(array[i]);
        }
    }
    return newArray;
}

console.log(pointFilter(arr));
