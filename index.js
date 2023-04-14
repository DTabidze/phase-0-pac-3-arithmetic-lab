function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function increment(n) {
    return (n + 1);
}

function decrement(n) {
    return (n - 1);
}

function makeInt(n) {
    // if (typeof n === "number") {
    //     return (Math.floor(n).toString());
    // }
    // if (typeof n !== "number") {
    //     return (NaN);
    // }
    console.log(n);
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    let result = parseFloat(n);
    if (isNaN(result)) {
        return NaN;
    }
    return result;
}