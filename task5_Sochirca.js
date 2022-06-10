const arr = [{
    name: "Roman",
    marks: [10, 9, 10, 9, 10]

}, {
    name: "Petru",
    marks: [2, 4, 5, 4, 4]
}, {
    name: "Alexandru",
    marks: [9, 8, 8, 10, 9]
}, {
    name: "Vasile",
    marks: [6, 7, 5, 8, 7]
}, {
    name: "Dan",
    marks: [9, 9, 8, 8, 5]
}]

// 1.
let sum = 0;
const showMean = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        console.log(`Elevul: ${arr[i].name} Media: ${sum / arr[i].marks.length}`)
        sum = 0;
    }
}
showMean(arr);

// 2.
const filterMean = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        if (sum / arr[i].marks.length > 5) {
            console.log(`Elevul: ${arr[i].name} Media: ${sum / arr[i].marks.length}`);
        }
        sum = 0;
    }
}
filterMean(arr);

// 3.
let x = 0;
let y = 10;
let max;
let min;
const showMaxMinMean = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        let mean = sum / arr[i].marks.length;
        if (mean > x) {
            x = mean;
            max = i;
        }
        if (mean < y) {
            y = mean;
            min = i;
        }
        sum = 0;
    }
    console.log(`Elevul cu cea mai mare medie: ${arr[max].name} Media: ${x}`);
    console.log(`Elevul cu cea mai mica medie: ${arr[min].name} Media: ${y}`);
}
showMaxMinMean(arr);

// 4.
let arrSort = [];
const sortMean = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        arrSort[i] = sum / arr[i].marks.length;
        sum = 0;
    }
    arrSort.sort();
    arrSort.reverse();
}
sortMean(arr);
console.log(arrSort);

// 5.
let classMean = 0;
const filterClassMean = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        classMean += sum / arr[i].marks.length;
        sum = 0;
    }
    classMean = classMean / arr.length;
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].marks.length - 1; j++) {
            sum += arr[i].marks[j];
        }
        if (sum / arr[i].marks.length > classMean) {
            console.log(`Elevul: ${arr[i].name} Media: ${sum / arr[i].marks.length} mai mare ca media clasei ${classMean}`);
        }
        sum = 0;
    }
}
filterClassMean(arr);
