let val = 0;
const btn01 = document.getElementById("btn01");
const btn02 = document.getElementById("btn02");
let inputNumber = document.getElementById("inputNumber");

btn01.addEventListener("click", () => {
    if (val == 0) {
        inputNumber.setAttribute("value", val);
    } else {
        val--;
        inputNumber.setAttribute("value", val);
    }
});

btn02.addEventListener("click", () => {
    if (val == 9) {
        inputNumber.setAttribute("value", val);
    } else {
        val++;
        inputNumber.setAttribute("value", val);
    }
});