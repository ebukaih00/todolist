let btnEl = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let taskEl = document.getElementById("task-container")
let tasks = []
let savedTasks = JSON.parse(localStorage.getItem("tasks"))
let messageEl = document.getElementById("message-el")




btnEl.addEventListener("click", function () {




    if (inputEl.value.trim() === "") {
        messageEl.textContent = "Enter a task!"
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

     <div id="list-item" data-index="${i}">
        <input type="checkbox" class="checkbox">
        <p class="task-text">${tasks[i]}</p>
        <span class="material-symbols-outlined delete-btn">
            delete
        </span>
    </div>
    `
    }

    taskEl.innerHTML = taskitem
}




taskEl.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
        let taskText = event.target.nextElementSibling
        taskText.classList.toggle("checked")
    }

})


taskEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        let item = event.target.parentElement
        let index = Number(item.dataset.index)

        tasks.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        rendertasks()
    }
})

