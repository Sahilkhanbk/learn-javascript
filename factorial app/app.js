// factorial with the help of for loop

let number = prompt("Enter Your number")
let fat = 1;

for (let i = 1; i <= number; i++) {
    fat = fat * i
}
console.log(fat);



// by function creating factorial app
// function sum(no){
//    let arr =  Array.from(Array(no+1).keys()).slice(1);
//    let sun = arr.reduce((a,b) => a*b);
//    console.log(sun);
// }
// sum()