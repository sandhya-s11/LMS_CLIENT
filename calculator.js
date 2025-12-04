function inputValue(val) {
    document.getElementById("screen").value += val;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch {
        document.getElementById("screen").value = "Error";
    }
}

function toggleSign() {
    let val = document.getElementById("screen").value;
    if (val) {
        if (val.startsWith("-")) {
            document.getElementById("screen").value = val.slice(1);
        } else {
            document.getElementById("screen").value = "-" + val;
        }
    }
}