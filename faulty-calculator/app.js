const random = Math.random()
let a = prompt("Enter First Number")
let c = prompt("Enter What Calculation you want")
let b = prompt("Enter Second Number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}

if (random > 0.1) {
    alert(`Your result is ${eval(`${ a } ${ c } ${ b }`)}`);
} else {
    c = obj[c]
        alert(`Your result is ${eval(`${ a } ${ c } ${ b }`)}`);

}