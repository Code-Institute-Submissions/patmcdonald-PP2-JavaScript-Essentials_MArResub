// taskie is a task list app
// Some basic functions for the app

// Code adapted from "https://code-boxx.com/simple-javascript-to-do-list"
// Used under MIT licence

// Initialise taskieToDo app
let task = {
    data : [], // task list array
    hAdd : null, // html add task text field
    hTemplate : null, // html task row template
    hList : null, // html task list
    init : () => {
      // Initialise localStorage
      if (localStorage.task == undefined) { localStorage.task = "[]" }
  
      // localStorage data from previous session
      task.data = JSON.parse(localStorage.task)
  
      // html elements
      task.hAdd = document.getElementById("task-input")
      task.hTemplate = document.getElementById("task-template").content
      task.hList = document.getElementById("task-list")
  
      // submit task
      document.getElementById("task-form").onsubmit = task.add
  
      // (A5) task list
      task.draw()
    },
  
    // (B) task list draw
    draw : () => {
      // reset
      task.hList.innerHTML = ""
  
      // task rows
      if (task.data.length>0) { for (let id in task.data) {
        let row = task.hTemplate.cloneNode(true)
        row.querySelector(".task-item").textContent = task.data[id][0]
        row.querySelector(".task-done").onclick = () => { task.toggle(id) }
        row.querySelector(".task-del").onclick = () => { task.del(id) }
        if (task.data[id][1]) {
          row.querySelector(".task-item").classList.add("task-ok")
        }
        task.hList.appendChild(row)
      }}
    },
  
    // save task to localStorage using JSON(data saved as strings)
    save: () => {
      localStorage.task = JSON.stringify(task.data)
      task.draw()
    },
  
    // add new task
    add : () => {
      task.data.push([task.hAdd.value, false])
      task.hAdd.value = ""
      task.save()
      return false
    },
  
    // update status of task
    toggle: (id) => {
      task.data[id][1] = !task.data[id][1]
      task.save()
    },
  
    // delete task
    del: (id) => { if (confirm("Delete task?")) {
      task.data.splice(id, 1)
      task.save()
    }}
  }
  
  // (G) load page
  window.addEventListener("load", task.init)