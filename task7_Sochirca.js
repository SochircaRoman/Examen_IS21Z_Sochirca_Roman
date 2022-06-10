let val = 0;
let inputNumber = document.getElementById("inputNumber");


inputNumber.addEventListener("mouseleave", () => {
    inputNumber.setAttribute("value", val);
});