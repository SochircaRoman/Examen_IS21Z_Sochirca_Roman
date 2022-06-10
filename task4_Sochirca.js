const listOfElements = document.getElementById("listOfElements");
let val = 1;

const interval = setInterval(() => {
    if (val <= 20) {
        if (val % 2 == 0) {
            const x = listOfElements.appendChild(document.createElement("li"));
            x.innerHTML = "Element Nr " + val;
            x.style.backgroundColor = "green";
        } else {
            const x = listOfElements.appendChild(document.createElement("li"));
            x.innerHTML = "Element Nr " + val;
            x.style.backgroundColor = "purple";
        }
        val++;
    } else {
        clearInterval(interval);
    }
}, 2000);