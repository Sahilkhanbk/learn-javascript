const buttons = document.querySelectorAll("button")
const input = document.querySelector("#inputBox")
const clean = document.querySelector("#clear")
const equal = document.querySelector("#equal")

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn === clean || btn === equal) return;

        let val = btn.innerText;

        input.value += val;
    });
});

clean.addEventListener("click", () => {
    input.value = "";

});

// ------- evaluate (=) -------------
equal.addEventListener('click', () => {
    try {
        input.value = eval(input.value || '0');
    } catch {
        input.value = 'error';
    }
});
