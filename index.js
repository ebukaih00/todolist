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
    <p id="task-text">${tasks[i]}</p>
    <span class="material-symbols-outlined" id="delete-btn">
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
    if (event.target.id === "delete-btn") {
        event.target.parentElement.remove()
       event.target.task.splice()
    }

})


