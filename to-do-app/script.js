
const input = document.querySelector("#input-box")
const button = document.querySelector("#button")
const task = document.querySelector(".task-list")

button.addEventListener("click", () => {
    if (input.value === ""){
        return
    }


    const li = document.createElement("li");
    li.className = "li-task";
    li.innerHTML = input.value;


    //create a delete button
    const delB = document.createElement("span");
    delB.textContent = "{-";
    delB.className = "deleteButton";
    li.appendChild(delB);


    task.appendChild(li)
    input.value = ""

    //create function to click and delete
    delB.addEventListener("click", () => {
        li.remove()
    })
})