

const textarea = document.querySelector("#userv")
const timer = document.querySelector("#timer")
const target = document.querySelector("#target")
const result = document.querySelector("#result")

let startTime;
let timeInterval;

function startGame() {


    startTime = new Date();
    textarea.disabled = false;
    textarea.focus();
    textarea.value = ""
    result.innerHTML = ""
    
    timer.textContent = "0.0s"
    timeInterval = setInterval(()=>{
        const currentTime = new Date();
        const move = (currentTime- startTime)/ 1000;
        timer.textContent = move.toFixed(2);
    },100)
}

function endGame() {


    if (!textarea.value.trim()) {
        result.innerHTML = "type spmething";
        return;
    }

    const endTime = new Date();
    clearInterval(timeInterval);// stop timer


    textarea.disabled = true;
    let sec = (endTime - startTime) / 1000;
    let min = sec / 60;
    let words = textarea.value.trim().split(/\s+/).length;
    let wpm = Math.round(words / min)
    result.innerHTML = `you typed ${words} word in ${sec} s speed is ${wpm}`

    // console.log("start", startTime);
    // console.log("end" ,endTime);
    // console.log("start", endTime - startGame);
    //console.log(sec, min, words, wpm);

}