const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Method-1
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}

// Method-2
let index = 0;
while (index <= arr.length - 1) {
    console.log(arr[index]);
    index++;
}

// Method-3
index = 0;
do {
    console.log(arr[index]);
    index++;
} while (index <= arr.length - 1);

// Method-4
for (variable in arr) {
    console.log(Number(variable));
}

// Method-5
arr.forEach(element => console.log(element));

// Method-6
arr.map(element => console.log(element));