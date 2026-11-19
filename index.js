let btnEl = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let taskEl = document.getElementById("task-container")
let tasks = []
let savedTasks = JSON.parse(localStorage.getItem("tasks"))


// localStorage.clear()
// console.log(localStorage)



btnEl.addEventListener("click", function () {




    if (inputEl.value.trim() === "") {

    }
    else {
        tasks.push(inputEl.value)

        localStorage.setItem("tasks", JSON.stringify(tasks))
        rendertasks()
    }

})




if (savedTasks) {
    tasks = savedTasks
    rendertasks()
}



function rendertasks() {
    let taskitem = ""
    for (let i = 0; i < tasks.length; i++) {
        taskitem += `

    <div id ="list-item">
    <input type="checkbox" id="checkbox">
    <p>${tasks[i]}</p>
    </div>
    `
    }

    taskEl.innerHTML = taskitem
}


