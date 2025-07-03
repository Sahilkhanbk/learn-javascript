// questions -------------------------------
let questions = [

    {
        question: "Is sahil is going to the Gym?",
        option: ["no", "maybe", "yes", "he never go"],
        correct: "yes"
    },
    {
        question: "What is sahil currently learning?",
        option: ["fullStack development", "Nothing", "Phycology", "frontend development"],
        correct: "frontend development"
    },
    {
        question: "What sahil Wants most in these things?",
        option: ["Money", "Milk", "Powerful man", "richest person"],
        correct: "Powerful man"
    },
]
//grab Elements------------------------------------

const ques1 = document.querySelector(".question")
const ansButton = document.querySelectorAll(".ansb")
const next = document.querySelector(".next")
const result = document.querySelector(".score")

let index = 0;
let score = 0;


function showQuestion() {
    let currentques = questions[index]
    ques1.textContent = currentques.question

    ansButton.forEach((btn, index) => {
        btn.textContent = currentques.option[index]

        btn.style.backgroundColor = "" // Reset background color
        btn.disabled = false // Enable buttons
    })

    next.style.display = "none"
}

ansButton.forEach(btn => {
    btn.addEventListener("click", checkAnswer)
})


next.addEventListener("click", () => {
    index++
    if (index < questions.length) {
        showQuestion()
    } else {
        ques1.textContent = "Quiz  Completed"
        ansButton.forEach(btn => btn.style.display = "none")
        next.style.display = "none";


    }
})

function checkAnswer(e) {
    let selected = e.target.textContent;
    let correct = questions[index].correct;
    if (selected === correct) {
        score++
        e.target.style.backgroundColor = "green"
    } else {
        e.target.style.backgroundColor = "red"
        ansButton.forEach(btn => {
            if (btn.textContent === correct) {
                btn.style.backgroundColor = "green"
            }
        })
    }
    next.style.display = "block"
    ansButton.forEach(btn => btn.disabled = true)
    result.textContent = `score${score}`
}

showQuestion()