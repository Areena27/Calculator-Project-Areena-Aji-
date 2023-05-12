var display = document.getElementById("display");
function clrscrn() {
    display.value = "";
}

function del(){
    display.value = display.value.toString().slice(0,-1);
}

function btnclk(value) {
    display.value += value;
    if (display.value == i) {
        i = math.sqrt(-1, 2);
    }
}

function sqr(value) {
    display.value = display.value * display.value;
}

function res() {
    var result = eval(display.value)
    display.value = result;
}