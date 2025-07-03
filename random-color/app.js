
const box = document.querySelectorAll(".box")
const bigbox = document.querySelector("conctainer")



// by using harry bhai method and its pretty good

function randomColor() {
    first = Math.ceil(Math.random() * 255);
    second = Math.ceil(Math.random() * 255);
    third = Math.ceil(Math.random() * 255);
    return (` rgb(${first} ${second} ${third})`)
}

box.forEach(b => {
    b.style.backgroundColor = randomColor();
})



// by using chatGpt method

// let colors = {
//     1: "red",
//     2: "pink",
//     3: "blue",
//     4: "orange",
//     5: "purple",
//     6: "black",
//     7: "aqua",
// };

// function randomcolor(){
//     box.forEach(b =>{
//         let randomN = Math.floor(Math.random()* Object.keys(colors).length) +1;
//         b.style.backgroundColor = colors[randomN]
//     })
// }
// randomcolor()